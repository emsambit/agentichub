import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFeed, combineItems } from './update-feed.mjs';
const source = { name: 'Test', category: 'Research' };
test('RSS decodes titles, normalizes URLs and rejects unsafe or undated entries', () => {
  const items = parseFeed('<rss><channel><item><title>AI &amp; ML</title><link>https://example.com/a?utm_source=rss</link><pubDate>2026-01-01</pubDate></item><item><title>Bad</title><link>javascript:alert(1)</link><pubDate>2026-01-01</pubDate></item><item><title>Undated</title><link>https://example.com/b</link></item></channel></rss>', source);
  assert.equal(items.length, 1); assert.equal(items[0].title, 'AI & ML'); assert.equal(items[0].url, 'https://example.com/a');
});
test('Atom alternate links and updated dates work', () => {
  const items = parseFeed('<feed><entry><title>Paper</title><link rel="self" href="https://example.com/feed"/><link rel="alternate" href="https://example.com/paper"/><updated>2026-01-02</updated></entry></feed>', source);
  assert.equal(items[0].url, 'https://example.com/paper');
});
test('invalid responses fail; entries deduplicate and sort newest first', () => {
  assert.throws(() => parseFeed('<html>Error</html>', source));
  const a = { url: 'https://example.com/a', publishedAt: '2026-01-01' };
  const b = { url: 'https://example.com/b', publishedAt: '2026-02-01' };
  assert.deepEqual(combineItems([a, b, a]), [b, a]);
});
