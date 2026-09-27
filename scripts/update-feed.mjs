import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const sources = [
  { name: 'Hugging Face', url: 'https://huggingface.co/blog/feed.xml', category: 'Models & tools' },
  { name: 'Google Research', url: 'https://research.google/blog/rss/', category: 'Research' },
  { name: 'Google DeepMind', url: 'https://deepmind.google/blog/rss.xml', category: 'Research' },
  { name: 'Microsoft Research', url: 'https://www.microsoft.com/en-us/research/feed/', category: 'Research' },
];
const list = value => value == null ? [] : Array.isArray(value) ? value : [value];
const plain = value => String(value?.['#text'] ?? value ?? '').replace(/<[^>]*>/g, '').trim();
export function parseFeed(xml, source, now = Date.now()) {
  if (XMLValidator.validate(xml) !== true) throw new Error('Invalid XML');
  const doc = new XMLParser({ ignoreAttributes: false }).parse(xml);
  if (!doc.rss?.channel && !doc.feed) throw new Error('Not an RSS or Atom feed');
  return list(doc.rss?.channel?.item ?? doc.feed?.entry).flatMap(entry => {
    const link = typeof entry.link === 'string' ? entry.link : list(entry.link).find(l => !l['@_rel'] || l['@_rel'] === 'alternate')?.['@_href'];
    const title = plain(entry.title).slice(0, 240);
    const date = Date.parse(plain(entry.pubDate ?? entry.published ?? entry.updated));
    let url;
    try { url = new URL(link); } catch { return []; }
    if (url.protocol !== 'https:' || !title || !Number.isFinite(date) || date > now + 3600000) return [];
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) if (key.startsWith('utm_')) url.searchParams.delete(key);
    return [{ title, url: url.href, publishedAt: new Date(date).toISOString(), source: source.name, category: source.category }];
  });
}
export function combineItems(items) {
  return [...new Map(items.map(item => [item.url, item])).values()]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)).slice(0, 80);
}
export async function updateFeed() {
  const file = new URL('../public/ai-feed.json', import.meta.url);
  let previous = { items: [], sources: [] };
  try { previous = JSON.parse(await readFile(file, 'utf8')); } catch {}
  const checkedAt = new Date().toISOString();
  const results = await Promise.all(sources.map(async source => {
    const old = previous.sources?.find(s => s.name === source.name);
    try {
      const response = await fetch(source.url, { signal: AbortSignal.timeout(20000), headers: { 'User-Agent': 'AgenticHub-LearningFeed/1.0' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const items = parseFeed(await response.text(), source);
      if (!items.length) throw new Error('No usable entries');
      return { status: { ...source, status: 'ok', lastSuccessAt: checkedAt }, items };
    } catch (error) {
      console.warn(`${source.name}: ${error.message}`);
      return { status: { ...source, status: 'unavailable', lastSuccessAt: old?.lastSuccessAt ?? null }, items: previous.items.filter(i => i.source === source.name) };
    }
  }));
  await mkdir(new URL('../public/', import.meta.url), { recursive: true });
  await writeFile(file, JSON.stringify({ checkedAt, sources: results.map(r => r.status), items: combineItems(results.flatMap(r => r.items)) }, null, 2) + '\n');
  console.log(`Feed: ${results.filter(r => r.status.status === 'ok').length}/${sources.length} sources, ${results.reduce((n, r) => n + r.items.length, 0)} entries`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await updateFeed();
