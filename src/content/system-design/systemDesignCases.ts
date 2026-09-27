import { SystemDesignCase } from '../../types';

export const systemDesignCases: SystemDesignCase[] = [
  {
    id: "url-shortener",
    title: "Design a High-Throughput URL Shortener (Bitly Scale)",
    category: "Distributed Storage & Hashing",
    scale: "100M new URLs/month, 10B reads/month (100:1 Read-to-Write ratio)",
    requirements: {
      functional: [
        "Given a long URL, generate a unique short 7-character alias.",
        "When clicking a short alias, redirect with HTTP 301/302 to original URL within <20ms p99.",
        "Support custom aliases and expiration timestamps."
      ],
      nonFunctional: [
        "High availability (99.999% uptime).",
        "Low latency (<20ms redirect latency globally via CDNs/caches).",
        "Short links must not be guessable or enumerable."
      ]
    },
    architectureSummary: "Utilizes a distributed counter token range generator (Zookeeper/Redis) converted to Base62 encoding ([a-zA-Z0-9], 62^7 = 3.5 trillion unique combinations). Reads are cached heavily in Redis with an LRU eviction policy.",
    keyComponents: [
      "API Gateway & Rate Limiter (Token bucket per client IP)",
      "Token Range Allocator (Pre-allocates chunks of 100,000 unique integers to each app server)",
      "Base62 Encoder service (Deterministic conversion from integer ID to 7 characters)",
      "Distributed Cache (Redis cluster holding top 20% most active URLs)",
      "Persistent Storage (Cassandra or PostgreSQL with B-tree index on short_hash)"
    ],
    storageAndDataFlow: "Write: App server claims next token from its local allocated range, encodes to Base62, writes (short_hash, long_url, user_id, expires_at) to DB, and populates Redis. Read: Request hits CDN/Redis cache; on cache hit, returns 302 redirect. On cache miss, queries DB and backfills Redis.",
    tradeoffs: [
      "301 Permanent Redirect vs 302 Found: 301 caches in browser, reducing our server load but preventing accurate click analytics tracking. 302 routes every click to our servers, enabling telemetry at the cost of higher query load.",
      "Base62 Counter vs MD5/SHA256 Hash: Hashing requires collision detection loops; counter-based Base62 guarantees zero collisions by construction."
    ]
  },
  {
    id: "distributed-rate-limiter",
    title: "Design a Global Distributed Rate Limiter",
    category: "Reliability & Distributed Concurrency",
    scale: "500,000 requests/sec across 4 global cloud regions",
    requirements: {
      functional: [
        "Throttle requests exceeding per-user or per-API-key thresholds (e.g. 100 req/min).",
        "Return HTTP 429 Too Many Requests with Retry-After header when limit is breached."
      ],
      nonFunctional: [
        "Negligible latency impact (<3ms overhead to request processing pipeline).",
        "Accurate enforcement across multi-region distributed clusters without race conditions.",
        "Graceful degradation (fail-open if rate limiter cluster is unreachable)."
      ]
    },
    architectureSummary: "Employs Redis Sliding Window Log or Sliding Window Counter executed atomically via Lua scripts. Region-local Redis clusters synchronize token balances asynchronously, with local in-memory token caches on edge proxies to absorb bursts.",
    keyComponents: [
      "Edge Proxy / Envoy Gateway with embedded rate-limiting filter",
      "Redis Cluster with atomic Lua script execution",
      "Sliding Window Counter algorithm (approximates request window using current + previous minute weights)",
      "Fallback Circuit Breaker (Fail open if Redis latency > 10ms)"
    ],
    storageAndDataFlow: "Lua script atomically checks: count = redis.call('ZCOUNT', key, window_start, now). If count < limit, redis.call('ZADD', key, now, request_id) and returns 1 (allow); else returns 0 (reject).",
    tradeoffs: [
      "Token Bucket vs Sliding Window Counter: Token bucket is memory-efficient but can allow double-rate bursts at window boundaries. Sliding window counter smooths bursts with minimal memory overhead.",
      "Strict Global Consistency vs Low Latency: Enforcing strict global lock synchronization across AWS us-east and eu-west adds 100ms cross-region latency. Choosing regional quota splitting with asynchronous reconciliation guarantees sub-millisecond local latency."
    ]
  }
];
