import { JargonTerm } from '../../types';

export const techJargonTerms: JargonTerm[] = [
  {
    id: "kv-cache",
    term: "KV Cache (Key-Value Caching)",
    category: "LLM Systems",
    plainEnglish: "Saving the calculated keys and values of previous words so an AI model doesn't re-read the entire sentence from scratch every time it adds one new word.",
    deepDive: "During autoregressive text generation, tokens are emitted step by step. Standard multi-head self-attention computes Q, K, and V projections. Because previous tokens' representations remain unchanged, caching their K and V matrices converts per-token generation complexity from O(N^2) to O(N). Memory consumption of KV cache is: 2 * 2 * n_layers * n_heads * d_head * seq_len * precision_bytes.",
    realWorldExample: "vLLM utilizes PagedAttention to partition the KV Cache into non-contiguous virtual memory blocks, eliminating 96% of memory fragmentation on GPU VRAM."
  },
  {
    id: "vector-embedding",
    term: "Vector Embedding",
    category: "AI & ML",
    plainEnglish: "Translating words, code, or images into a list of numbers (coordinates in high-dimensional space) where concepts with similar meanings cluster close together.",
    deepDive: "A continuous dense vector representation mapping unstructured input into an R^d metric space (e.g. d=768 or 1536). Closeness is evaluated via cosine distance, inner product, or Euclidean distance. Preserves semantic relationships (e.g. King - Man + Woman ~ Queen).",
    realWorldExample: "OpenAI text-embedding-3-small transforms user documentation chunks into 1536-dimensional float arrays for cosine similarity indexing in Milvus."
  },
  {
    id: "idempotency",
    term: "Idempotency",
    category: "Distributed Systems",
    plainEnglish: "An operation that produces the exact same outcome no matter how many times you retry it.",
    deepDive: "Mathematically: f(f(x)) = f(x). In distributed APIs, clients send a unique Idempotency-Key (UUID) with mutation requests. The server records the transaction state; repeated retries with the same key return the original response without executing duplicate database mutations or charges.",
    realWorldExample: "Twilio webhook retries and payment gateway charges use idempotency keys to ensure a customer is never billed twice during network drops."
  },
  {
    id: "speculative-decoding",
    term: "Speculative Decoding",
    category: "LLM Inference",
    plainEnglish: "Having a fast, small AI model quickly guess several upcoming words, and having the big, smart AI model verify them all simultaneously in a single forward pass.",
    deepDive: "Memory bandwidth is the primary bottleneck in LLM inference. Speculative decoding runs a lightweight draft model (e.g. 1B parameter) autoregressively for K tokens, then feeds all K tokens to the target model (e.g. 70B parameter) in one parallel matrix pass to verify matching logits. Increases generation speed by 2x to 3x with zero loss in output quality.",
    realWorldExample: "Google Gemini and vLLM use speculative decoding to boost token emission rates on serverless endpoints."
  },
  {
    id: "data-skew",
    term: "Data Skew",
    category: "Big Data & Distributed Computing",
    plainEnglish: "When one computer in a cluster gets stuck doing 90% of the work while the other computers sit idle because data wasn't evenly divided.",
    deepDive: "Uneven distribution of records across partitions caused by low-cardinality join or grouping keys (e.g., millions of records with null or default country_code). Causes straggler tasks, out-of-memory (OOM) errors, and underutilized cluster resources. Mitigated via key salting, broadcast joins, or Spark AQE dynamic skew handling.",
    realWorldExample: "Walmart holiday order tables joining on merchant_id where a top seller accounts for 40% of all transactions."
  }
];
