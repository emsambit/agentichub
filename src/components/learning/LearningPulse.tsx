import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface FeedItem { title: string; url: string; publishedAt: string; source: string; category: string }
interface Feed { checkedAt: string; sources: { name: string; status: string; lastSuccessAt: string | null }[]; items: FeedItem[] }
const resources = [
  { title: 'JAX', detail: 'Accelerated arrays, automatic differentiation and compiled training steps.', url: 'https://docs.jax.dev/en/latest/beginner_guide.html', track: 'jax' },
  { title: 'Jev · TypeSafe AI', detail: 'Typed decisions, confidence thresholds and evaluation for agent workflows.', url: 'https://docs.typesafe.ai/introduction', track: 'jev' },
  { title: 'Hugging Face Learn', detail: 'Practical courses on language models, agents and open-source ML.', url: 'https://huggingface.co/learn', track: 'llms' },
  { title: 'Google Machine Learning', detail: 'Build foundations with exercises and engineering guidance.', url: 'https://developers.google.com/machine-learning', track: 'data-eng' },
];
export const LearningResources: React.FC = () => <section className="space-y-4">
  <div><h2 className="text-xl font-bold text-white">Learn it. Apply it.</h2><p className="text-sm text-slate-400 mt-1">Official resources and focused learning paths for working engineers.</p></div>
  <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">{resources.map(r => <article key={r.title} className="rounded-2xl border border-slate-800 bg-dark-900 p-5 flex flex-col gap-3">
    <h3 className="font-bold text-white">{r.title}</h3><p className="text-sm text-slate-300 flex-1">{r.detail}</p>
    <a className="text-sm text-cyan-300 hover:underline" href={r.url} target="_blank" rel="noopener noreferrer">Official learning resource ↗</a>
    <Link className="text-sm text-blue-400 hover:underline" to={`/curriculum/${r.track}`}>Study on AgenticHub →</Link>
  </article>)}</div>
</section>;

export const LearningPulse: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [query, setQuery] = useState('');
  const [source, setSource] = useState('All sources');
  useEffect(() => {
    let disposed = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setLoading(true);
    fetch(new URL('ai-feed.json', document.baseURI).href, { cache: 'no-cache', signal: controller.signal })
      .then(r => { if (!r.ok) throw new Error('Feed unavailable'); return r.json(); })
      .then((data: Feed) => {
        if (disposed) return;
        if (!Array.isArray(data.items) || !Array.isArray(data.sources) || !Number.isFinite(Date.parse(data.checkedAt))) throw new Error('Invalid feed');
        setFeed({ ...data, items: data.items.filter(i => typeof i.url === 'string' && i.url.startsWith('https://') && typeof i.title === 'string' && typeof i.source === 'string' && Number.isFinite(Date.parse(i.publishedAt))) }); setError(false);
      }).catch(() => { if (!disposed) setError(true); })
      .finally(() => { window.clearTimeout(timeout); if (!disposed) setLoading(false); });
    const timer = window.setInterval(() => setRefresh(n => n + 1), 5 * 60 * 1000);
    return () => { disposed = true; controller.abort(); window.clearTimeout(timeout); window.clearInterval(timer); };
  }, [refresh]);
  const stale = feed && Date.now() - Date.parse(feed.checkedAt) > 3 * 60 * 60 * 1000;
  const items = (feed?.items ?? []).filter(i => (source === 'All sources' || source === i.source) && `${i.title} ${i.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, compact ? 3 : 36);
  return <section className="rounded-3xl border border-slate-800 bg-dark-900/80 p-5 sm:p-6 space-y-4">
    <div className="flex flex-wrap justify-between items-center gap-3"><div><h2 className="text-lg font-bold text-white">AI Learning Pulse</h2><p className="text-xs text-slate-400 mt-1">Publisher updates · newest first · scheduled hourly</p></div>
      <button disabled={loading} onClick={() => setRefresh(n => n + 1)} className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-cyan-300 disabled:opacity-50">{loading ? 'Checking…' : 'Refresh'}</button></div>
    <p role="status" className="text-xs text-slate-400">{error ? 'Feed could not be refreshed. Try again; official learning links remain available.' : feed ? `Last checked ${new Date(feed.checkedAt).toLocaleString()}${stale ? ' · Update delayed' : ''}` : 'Loading publisher updates…'}</p>
    {feed?.sources.some(s => s.status !== 'ok') && <p className="text-xs text-amber-300">Some sources are unavailable. Their previously saved articles may still appear.</p>}
    {!compact && <div className="flex flex-col sm:flex-row gap-3"><input aria-label="Search AI updates" placeholder="Search models, agents, evaluation…" value={query} onChange={e => setQuery(e.target.value)} className="min-w-0 flex-1 bg-dark-950 border border-slate-700 rounded-xl p-3 text-sm text-white"/><select aria-label="Filter updates by source" value={source} onChange={e => setSource(e.target.value)} className="bg-dark-950 border border-slate-700 rounded-xl p-3 text-sm text-white"><option>All sources</option>{feed?.sources.map(s => <option key={s.name}>{s.name}</option>)}</select></div>}
    <div className={compact ? 'space-y-3' : 'grid md:grid-cols-2 gap-4'}>{items.map(item => <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-slate-800 bg-dark-850 p-4 hover:border-cyan-600 transition-colors">
      <p className="text-xs text-cyan-300 mb-2">{item.source} · {new Date(item.publishedAt).toLocaleDateString()}</p><h3 className="text-sm font-semibold text-white">{item.title} ↗</h3>{!compact && <p className="text-xs text-slate-400 mt-3">{item.category} · Read the source, then try one idea in your next project.</p>}
    </a>)}</div>
    {!loading && items.length === 0 && <p className="text-sm text-slate-400">{query || source !== 'All sources' ? 'No updates match these filters.' : 'No publisher updates are available yet. Explore the learning resources below.'}</p>}
    {compact ? <Link to="/trends" className="inline-block text-sm text-blue-400">Explore all updates & learning resources →</Link> : <p className="text-xs text-slate-500">Updates come from selected publisher feeds, not a global popularity ranking. GitHub schedules can be delayed. No API key is needed.</p>}
  </section>;
};
