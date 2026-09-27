import { Track } from '../../types';
import { newTracks } from './newTracks';

export const allTracks: Track[] = [
  ...newTracks,
  {
    id: "agentic-ai",
    title: "Agentic AI & Multi-Agent Systems",
    slug: "agentic-ai",
    description: "Master autonomous agent architectures, LangGraph stategraphs, Model Context Protocol (MCP), human-in-the-loop, and multi-agent coordination.",
    iconName: "Bot",
    level: "Advanced to Principal",
    accentColor: "from-purple-500 to-indigo-500",
    modules: [
      {
        id: "mod-agent-foundations",
        trackId: "agentic-ai",
        title: "Agent Foundations & State Machines",
        description: "Deconstructing workflows vs agents, statefulness, reasoning loops, and deterministic graph execution.",
        lessons: [
          {
            id: "intro-agentic-arch",
            moduleId: "mod-agent-foundations",
            trackId: "agentic-ai",
            title: "Workflows vs Autonomous Agents & ReAct Loops",
            durationMinutes: 30,
            difficulty: "Intermediate",
            prerequisites: ["LLM API basics", "Python async"],
            learningObjectives: [
              "Distinguish deterministic LLM workflows (DAGs) from dynamic agent loops.",
              "Implement a robust ReAct (Reason + Act) loop with structured tool calling.",
              "Handle recursion limits, token budget protection, and infinite loop guards."
            ],
            overview: "A software workflow follows a predetermined path through deterministic tasks and LLM calls. An autonomous agent, in contrast, actively determines its execution route at runtime using an iterative cycle of Observation, Thought, and Action.",
            theory: `### The Spectrum: Workflow vs Agent

1. **Deterministic Chains**: Step A -> Step B -> Step C. The sequence is fixed in code; LLM calls only generate text or transform data within rigid slots.
2. **Router Chains**: An LLM classifies input and routes to 1 of N predefined paths. The branch is dynamic, but the subsequent flow is fixed.
3. **ReAct Pattern (Yao et al., 2022)**:
   - **Thought**: The model deliberates over the conversation history, available tools, and goal.
   - **Action**: The model emits a structured function call with strict parameter typing.
   - **Observation**: The execution environment invokes the tool, captures the output, and appends the result back to context.
   - **Looping**: Repeats until the agent emits a 'Final Answer' action or encounters an exit condition.

### Failure Modes in Agentic Loops
- **Semantic Loops**: The agent repeatedly calls the same tool with equivalent arguments because the observation doesn't explicitly resolve its doubt.
- **Context Explosion**: Accumulating raw tool observations can quickly exhaust context windows and balloon inference costs.
- **Tool Hallucination**: Emitting function arguments that do not conform to the JSON schema.`,
            architectureDiagram: `User Goal ──> [ Planner / LLM ]
                   │         ▲
                   ▼         │ Observation
             [ Tool Call ] ──┘
                   │
                   ▼ Final Answer
              [ User Output ]`,
            codeSnippet: {
              title: "Typed ReAct Agent State Loop in Python",
              language: "python",
              code: `from typing import Annotated, TypedDict, List, Dict, Any
from pydantic import BaseModel, Field

class AgentState(TypedDict):
    messages: List[Dict[str, Any]]
    iterations: int
    max_iterations: int
    is_complete: bool

def reason_and_plan(state: AgentState) -> Dict[str, Any]:
    if state["iterations"] >= state["max_iterations"]:
        return {"is_complete": True, "messages": [{"role": "assistant", "content": "Reached max iteration budget."}]}
    
    # In real runtime: Invoke LLM with tool definitions
    # Returning mock step for demonstration
    return {"iterations": state["iterations"] + 1}
`
            },
            tradeoffs: [
              "Autonomy vs Predictability: Full autonomous agents can solve novel edge cases, but latency and cost variance are significantly higher.",
              "Context Richness vs Token Cost: Passing entire tool outputs provides fidelity, but can pollute context and degrade attention."
            ],
            commonMistakes: [
              "Failing to enforce hard recursion limits (e.g. max_iterations = 10), leading to runaway cost spikes.",
              "Not validating tool outputs before re-injecting them into LLM context.",
              "Using generic prompts instead of strictly typed JSON schemas for tool arguments."
            ],
            interviewQuestions: [
              {
                question: "How do you prevent an agent from getting trapped in an infinite retry loop when a tool fails?",
                answer: "Implement a tiered defensive strategy: (1) Enforce a strict max_iterations ceiling, (2) Keep a hash of recent tool calls and arguments to detect semantic cycles, (3) Return informative error observations that explicitly instruct the model to try an alternate tool or exit gracefully."
              }
            ],
            quiz: [
              {
                id: "q1",
                question: "What is the primary difference between a prompt chain workflow and an autonomous agent?",
                options: [
                  "Prompt chains use smaller models; agents require GPT-4 only.",
                  "In a workflow the sequence is predetermined in code; an agent dynamically decides the next step based on observations.",
                  "Workflows cannot call APIs; agents can.",
                  "Agents don't need system prompts."
                ],
                correctIndex: 1,
                explanation: "Workflows follow predefined deterministic control flows; agents use model reasoning to dynamically select actions at runtime."
              },
              {
                id: "q2",
                question: "What is the role of an 'Observation' in the ReAct pattern?",
                options: [
                  "To critique the user's initial prompt.",
                  "The output produced by executing an external tool, returned to the model to guide the next thought.",
                  "A human-in-the-loop approval step.",
                  "A vector database index."
                ],
                correctIndex: 1,
                explanation: "The observation is the ground-truth result returned by executing the chosen tool, which is fed back into the context."
              }
            ]
          },
          {
            id: "mcp-protocol-deep-dive",
            moduleId: "mod-agent-foundations",
            trackId: "agentic-ai",
            title: "Model Context Protocol (MCP) Architecture",
            durationMinutes: 35,
            difficulty: "Advanced",
            prerequisites: ["intro-agentic-arch", "JSON-RPC / SSE"],
            learningObjectives: [
              "Understand the MCP Client-Server protocol model created by Anthropic.",
              "Differentiate MCP Resources, Prompts, and Tools.",
              "Build a production MCP tool server with secure sandbox execution."
            ],
            overview: "Model Context Protocol (MCP) is an open standard that decouples AI models from proprietary tool integrations, enabling secure, modular connections between LLM applications and data sources.",
            theory: `### Why Model Context Protocol (MCP)?
Before MCP, every AI agent framework (LangChain, CrewAI, custom code) implemented proprietary connectors. If you built a connector for PostgreSQL, you had to rewrite it for every framework.

MCP creates a standard client-host-server architecture:
- **Host**: The user-facing application (e.g. IDE, Agent runtime).
- **Client**: Connects 1:1 with an MCP Server.
- **Server**: Exposes three core capabilities:
  1. **Resources**: Passive data read-only streams (like file contents, database logs).
  2. **Prompts**: Standardized templates that guide users or models.
  3. **Tools**: Executable functions that make changes or perform computations with JSON Schema validation.`,
            architectureDiagram: `[ Host Application ]
       │
   [ MCP Client ]
       │ (JSON-RPC over Stdio / SSE)
       ▼
 [ MCP Server ] ──> [ Database / Internal APIs / Shell ]`,
            codeSnippet: {
              title: "MCP Server Tool Definition (Python FastMCP)",
              language: "python",
              code: `from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Database-Inspector")

@mcp.tool()
def explain_query_plan(query: str) -> str:
    """Explains PostgreSQL query execution plan and flags table scans."""
    # Production: execute EXPLAIN (ANALYZE, BUFFERS) with read-only credentials
    return f"Execution plan analyzed for: {query}"
`
            },
            tradeoffs: [
              "Standardization vs Custom Protocol: Standard JSON-RPC overhead is slightly higher than raw in-memory calls, but unlocks universal cross-platform tool reuse.",
              "Transport choices: Stdio is zero-network local, while SSE (Server-Sent Events) is required for distributed microservices."
            ],
            commonMistakes: [
              "Granting unrestricted write permissions without confirmation schemas in MCP tools.",
              "Exposing raw SQL execution without strict read-only replica separation."
            ],
            interviewQuestions: [
              {
                question: "How does MCP handle security when an agent is given access to sensitive internal databases?",
                answer: "MCP enforces capability negotiation: servers expose exact JSON schemas, clients require explicit approval for tool calls (Human-In-The-Loop), and servers can be sandboxed in read-only containers with ephemeral IAM credentials."
              }
            ],
            quiz: [
              {
                id: "q-mcp-1",
                question: "What are the three core primitives exposed by an MCP Server?",
                options: [
                  "Models, Weights, and Checkpoints",
                  "Resources, Prompts, and Tools",
                  "Embeddings, Vectors, and Indexes",
                  "Queries, Tables, and Views"
                ],
                correctIndex: 1,
                explanation: "The MCP specification defines Resources (passive data), Prompts (templates), and Tools (executable functions)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "rag",
    title: "RAG University: Production Retrieval Systems",
    slug: "rag",
    description: "From Naive RAG to Hybrid Search, Cross-Encoder Reranking, Graph RAG, and Parent-Child Chunking at enterprise scale.",
    iconName: "Search",
    level: "Intermediate to Principal",
    accentColor: "from-cyan-500 to-blue-500",
    modules: [
      {
        id: "mod-rag-core",
        trackId: "rag",
        title: "Chunking, Embedding & Hybrid Retrieval",
        description: "Designing the physical retrieval pipeline: tokenization, dense vs sparse search, and reciprocal rank fusion.",
        lessons: [
          {
            id: "advanced-chunking",
            moduleId: "mod-rag-core",
            trackId: "rag",
            title: "Advanced Chunking Strategies: Semantic, Hierarchical & Late Chunking",
            durationMinutes: 30,
            difficulty: "Intermediate",
            prerequisites: ["Vector embeddings", "Tokenization"],
            learningObjectives: [
              "Evaluate fixed-size vs semantic vs parent-child chunking architectures.",
              "Prevent context loss at chunk boundaries using hierarchical metadata.",
              "Understand the revolutionary Late Chunking technique."
            ],
            overview: "The greatest determinant of RAG accuracy is not the LLM or the vector database: it is chunking quality. Bad chunking breaks ideas mid-sentence, splits tables, and destroys semantic coherence.",
            theory: `### Chunking Taxonomy

1. **Fixed-Size Chunking with Overlap**:
   - Split strictly by 512 tokens with 50 token overlap.
   - *Flaw*: Ignores natural paragraph boundaries, splitting headings from paragraphs and slicing through tables.

2. **Recursive Character Chunking**:
   - Splits on a list of delimiters: ["\\n\\n", "\\n", " ", ""].
   - Maintains natural document units much better than raw fixed splitting.

3. **Parent-Child (Hierarchical) Chunking**:
   - Store large **Parent chunks** (e.g., 2000 tokens) in a document store.
   - Generate multiple small **Child chunks** (e.g., 300 tokens) for vector indexing.
   - *Retrieval*: Query matches the child chunk vector, but the *parent chunk* is sent to the LLM context. This provides both high retrieval precision and broad synthesis context!

4. **Late Chunking (2024)**:
   - Run the entire document through a long-context embedding model (like Jina/ColBERT) first.
   - Chunk the token embeddings *after* the transformer self-attention layers have contextualized every token against the whole document.`,
            architectureDiagram: `Raw Document ──> Long Context Attention
                     │
         [ Document-Aware Token Embeddings ]
                     │
           ┌─────────┴─────────┐
           ▼                   ▼
      [ Chunk A ]         [ Chunk B ]
     (Has context of doc) (Has context of doc)`,
            codeSnippet: {
              title: "Hierarchical Parent-Child Retriever Schema",
              language: "python",
              code: `from dataclasses import dataclass
from typing import List, Dict

@dataclass
class ChildChunk:
    child_id: str
    parent_id: str
    vector: List[float]
    text: str

@dataclass
class ParentDoc:
    parent_id: str
    full_text: str
    metadata: Dict[str, str]
`
            },
            tradeoffs: [
              "Child size vs Parent context: Small child chunks improve cosine similarity top-1 accuracy, but require a key-value store for parent doc re-hydration.",
              "Latency: Late chunking requires processing entire documents through transformers before indexing."
            ],
            commonMistakes: [
              "Chunking markdown or JSON without structural parsers, destroying code blocks and tables.",
              "Using zero overlap on fixed-size chunking."
            ],
            interviewQuestions: [
              {
                question: "Why does Parent-Child retrieval outperform standard single-tier vector retrieval?",
                answer: "Because small chunks (200-300 tokens) have dense semantic specificity for cosine vector similarity matching, but lack the complete surrounding context needed by the LLM to generate an accurate answer. Parent-Child retrieval decouples the indexing unit from the synthesis unit."
              }
            ],
            quiz: [
              {
                id: "q-chunk-1",
                question: "In Parent-Child chunking, what gets returned to the LLM during generation?",
                options: [
                  "Only the child chunk vector",
                  "The parent document/chunk associated with the matched child",
                  "The entire raw database",
                  "A summary generated by a cross-encoder"
                ],
                correctIndex: 1,
                explanation: "The child chunk is used for precise vector search; the parent chunk is retrieved to provide broad context to the LLM."
              }
            ]
          },
          {
            id: "reranking-cross-encoders",
            moduleId: "mod-rag-core",
            trackId: "rag",
            title: "Hybrid Search & Cross-Encoder Reranking",
            durationMinutes: 35,
            difficulty: "Advanced",
            prerequisites: ["advanced-chunking", "BM25 fundamentals"],
            learningObjectives: [
              "Combine Dense (Vector) and Sparse (BM25) search using Reciprocal Rank Fusion (RRF).",
              "Implement Cross-Encoder reranking (Cohere, BGE-Reranker, ColBERT) to eliminate false-positive vector hits.",
              "Optimize latency budget for sub-100ms multi-stage retrieval pipelines."
            ],
            overview: "Vector search alone struggles with acronyms, part numbers, and exact keywords. Sparse search (BM25) struggles with synonyms and intent. Hybrid search + Reranking gives you the best of both worlds.",
            theory: `### The Two-Stage Retrieval Funnel

Stage 1: **Candidate Generation (High Recall)**
- Fetch Top 50 via Dense Vector Search (semantic similarity).
- Fetch Top 50 via BM25 (exact keyword match).
- Combine using **Reciprocal Rank Fusion (RRF)**:
  $$RRF\\_Score(d) = \\sum_{m \\in M} \\frac{1}{k + r_m(d)}$$
  where $k \\approx 60$.

Stage 2: **Precision Reranking (High Precision)**
- Feed (Query, Candidate Doc) pairs into a **Cross-Encoder**.
- Unlike Bi-Encoders which compute independent embeddings, Cross-Encoders pass query and document tokens jointly into self-attention.
- Select Top 5 reranked docs for final LLM prompt context.`,
            architectureDiagram: `Query ──┬──> [ Dense Vector Search (Milvus/Qdrant) ] ──> Top 50 ──┐
        │                                                           ▼
        └──> [ Sparse Search (BM25 / Elasticsearch) ] ───> Top 50 ──> [ RRF Fusion ]
                                                                            │ Top 30
                                                                            ▼
                                                            [ Cross-Encoder Reranker ]
                                                                            │ Top 5
                                                                            ▼
                                                                     [ LLM Prompt ]`,
            codeSnippet: {
              title: "Reciprocal Rank Fusion (RRF) Implementation",
              language: "python",
              code: `def reciprocal_rank_fusion(dense_results: list, sparse_results: list, k: int = 60):
    rrf_scores = {}
    for rank, doc_id in enumerate(dense_results):
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k + rank + 1))
    for rank, doc_id in enumerate(sparse_results):
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k + rank + 1))
    return sorted(rrf_scores.items(), key=lambda x: x[1], reverse=True)
`
            },
            tradeoffs: [
              "Accuracy vs Latency: Cross-encoders are compute-intensive. Scoring 100 documents can take 150-300ms. Keep the candidate pool to Top 20-40.",
              "Infrastructure Complexity: Requires operating both inverted indexes (Elastic/OpenSearch) and vector databases."
            ],
            commonMistakes: [
              "Passing 100 candidate documents into a cross-encoder on CPU, blowing latency SLAs.",
              "Relying solely on vector embeddings for queries containing product codes or UUIDs."
            ],
            interviewQuestions: [
              {
                question: "Why can't we just use a Cross-Encoder for the entire retrieval process over millions of documents?",
                answer: "Because Cross-Encoders require joint cross-attention over Query + Document tokens for every single candidate. With 1M docs, this requires 1,000,000 forward passes through a transformer per query, which is computationally intractable. Bi-encoders pre-compute embeddings offline, allowing fast sub-millisecond approximate nearest neighbor (ANN) search."
              }
            ],
            quiz: [
              {
                id: "q-rrf-1",
                question: "What is the primary benefit of Reciprocal Rank Fusion (RRF)?",
                options: [
                  "It eliminates the need for vector embeddings.",
                  "It combines ranked lists from disparate retrieval algorithms without requiring calibrated raw score normalization.",
                  "It automatically generates embeddings for free.",
                  "It compresses documents."
                ],
                correctIndex: 1,
                explanation: "RRF uses positions (ranks) rather than raw arbitrary score scales, making it immune to differences in BM25 vs cosine similarity scales."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "llms",
    title: "LLM Engineering & Core Transformers",
    slug: "llms",
    description: "Deep dive into Transformer Attention, KV Caching, LoRA/QLoRA Parameter-Efficient Fine-Tuning, Quantization, and Speculative Decoding.",
    iconName: "Cpu",
    level: "Advanced",
    accentColor: "from-amber-500 to-red-500",
    modules: [
      {
        id: "mod-transformer-internals",
        trackId: "llms",
        title: "Transformer Internals & Inference Acceleration",
        description: "The mathematical engine: Self-Attention, Key-Value cache optimization, and quantization schemes.",
        lessons: [
          {
            id: "attention-mechanisms",
            moduleId: "mod-transformer-internals",
            trackId: "llms",
            title: "Scaled Dot-Product & Multi-Head Self-Attention",
            durationMinutes: 35,
            difficulty: "Advanced",
            prerequisites: ["Linear algebra", "Matrix multiplication"],
            learningObjectives: [
              "Derive the Scaled Dot-Product Attention formula from first principles.",
              "Understand Query, Key, and Value linear projections.",
              "Explain why dividing by sqrt(d_k) prevents vanishing gradients in softmax."
            ],
            overview: "Self-attention allows every token in an input sequence to dynamically route information from every other token in the sequence based on relevance, breaking the sequential bottlenecks of RNNs.",
            theory: `### Mathematical Formulation

$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$

Where:
- $Q = X W_Q$ (Queries: What am I looking for?)
- $K = X W_K$ (Keys: What content do I offer?)
- $V = X W_V$ (Values: If matched, what information do I pass along?)

### Why Scale by $\\sqrt{d_k}$?
For large projection dimensions $d_k$, the dot product $Q K^T$ grows large in magnitude. When input magnitudes to the softmax function are large, the softmax output pushes towards 0 or 1, causing extremely small gradients (vanishing gradient problem). Scaling by $\\frac{1}{\\sqrt{d_k}}$ preserves unit variance when keys and queries have zero mean and unit variance.`,
            architectureDiagram: `Tokens ──> [ Linear Projections: W_Q, W_K, W_V ]
                  │        │        │
                  ▼        ▼        │
                  Q        K        │
                  │        │        │
                  └──MatMul┘        │
                      │             │
                 Scale & Mask       │
                      │             │
                   Softmax          │
                      │             │
                      └───MatMul────┘
                             │
                      Output Vectors`,
            codeSnippet: {
              title: "Scaled Dot-Product Attention in PyTorch",
              language: "python",
              code: `import torch
import torch.nn.functional as F

def scaled_dot_product_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    # Compute attention scores: (Batch, Heads, Seq_Q, Seq_K)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / (d_k ** 0.5)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, V), weights
`
            },
            tradeoffs: [
              "Quadratic Complexity: Standard self-attention scales as O(N^2) with sequence length N. Techniques like FlashAttention and sliding-window attention alleviate memory bandwidth constraints."
            ],
            commonMistakes: [
              "Forgetting causal masking during autoregressive decoder training, allowing tokens to cheat by looking at future tokens."
            ],
            interviewQuestions: [
              {
                question: "What is the purpose of the KV Cache during autoregressive LLM decoding?",
                answer: "During autoregressive text generation, tokens are emitted one at a time. The Keys and Values for all previous tokens in the sequence do not change between token generation steps. Caching these previously computed K and V vectors prevents re-computing O(N^2) projections at every step, reducing per-token decoding complexity from O(N^2) to O(N)."
              }
            ],
            quiz: [
              {
                id: "q-attn-1",
                question: "Why do we divide QK^T by sqrt(d_k)?",
                options: [
                  "To speed up GPU compilation",
                  "To prevent the dot product magnitudes from exploding and pushing softmax into vanishing gradient regions",
                  "To normalize word embeddings to length 1",
                  "To enable parallel inference"
                ],
                correctIndex: 1,
                explanation: "Dividing by sqrt(d_k) stabilizes the variance of the dot products, preventing saturation in the softmax function."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "data-eng",
    title: "Distributed Big Data Engineering",
    slug: "data-eng",
    description: "Petabyte-scale Apache Spark tuning, Adaptive Query Execution (AQE), Apache Kafka streaming, and Apache Iceberg lakehouses.",
    iconName: "Database",
    level: "Staff to Principal",
    accentColor: "from-emerald-500 to-teal-500",
    modules: [
      {
        id: "mod-spark-deep-dive",
        trackId: "data-eng",
        title: "Spark Internals & Skew Optimization",
        description: "Catalyst optimizer, shuffle partitions, AQE, and broadcast thresholds.",
        lessons: [
          {
            id: "spark-aqe",
            moduleId: "mod-spark-deep-dive",
            trackId: "data-eng",
            title: "Adaptive Query Execution (AQE) & Handling Data Skew",
            durationMinutes: 30,
            difficulty: "Advanced",
            prerequisites: ["Spark fundamentals", "MapReduce concepts"],
            learningObjectives: [
              "Understand how Spark 3+ AQE re-optimizes physical query plans at stage boundaries.",
              "Configure dynamic partition coalescing and skew join resolution.",
              "Triage out-of-memory (OOM) failures caused by skewed join keys."
            ],
            overview: "Prior to Spark 3.0, the physical execution plan was locked in statically before runtime based on outdated or non-existent catalog statistics. AQE inspects actual shuffle statistics at runtime to re-optimize downstream stages.",
            theory: `### Key AQE Features

1. **Dynamically Coalescing Shuffle Partitions**:
   - Instead of manually tuning \`spark.sql.shuffle.partitions\` (default 200), AQE combines small adjacent partitions at stage boundaries to meet a target size (\`spark.sql.adaptive.advisoryPartitionSizeInBytes\`, e.g., 64MB).

2. **Dynamically Converting Sort-Merge Join to Broadcast Join**:
   - If after filtering a table's actual output size drops below \`spark.sql.autoBroadcastJoinThreshold\` (10MB default), AQE switches from an expensive Sort-Merge Join to a Broadcast Hash Join dynamically!

3. **Dynamically Handling Skew Joins**:
   - If a partition's size is N times larger than the median partition size, AQE splits the skewed partition into smaller sub-partitions and duplicates the corresponding keys in the matching table.`,
            architectureDiagram: `Stage 1 Execution ──> [ Shuffle Write Statistics ]
                               │
               [ AQE Runtime Plan Re-Optimizer ]
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
  Coalesce Small        Convert to Broadcast     Split Skewed
    Partitions                 Join               Partitions`,
            codeSnippet: {
              title: "Spark AQE Production Configuration",
              language: "python",
              code: `spark.conf.set("spark.sql.adaptive.enabled", "true")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")
spark.conf.set("spark.sql.adaptive.advisoryPartitionSizeInBytes", "67108864") # 64MB
spark.conf.set("spark.sql.adaptive.skewJoin.enabled", "true")
spark.conf.set("spark.sql.adaptive.skewJoin.skewedPartitionFactor", "5")
`
            },
            tradeoffs: [
              "Small performance overhead when collecting shuffle partition metadata between stages, vastly outweighed by preventing OOM stragglers."
            ],
            commonMistakes: [
              "Relying on AQE to fix extreme skew on string keys without salting when using non-equi joins.",
              "Setting advisoryPartitionSizeInBytes too small, creating thousands of micro-tasks."
            ],
            interviewQuestions: [
              {
                question: "How does Spark AQE dynamically resolve a skewed join partition without manual key salting?",
                answer: "AQE detects when a shuffle partition exceeds both the skew threshold factor and size limit compared to the median. It then splits the skewed partition of Table A into multiple sub-partitions, reads the matching partition from Table B multiple times for each sub-partition, and runs smaller parallel joins without blowing executor heap."
              }
            ],
            quiz: [
              {
                id: "q-spark-1",
                question: "When does Spark AQE make runtime re-optimization decisions?",
                options: [
                  "Before the driver compiles the DAG",
                  "At runtime shuffle stage boundaries using actual materialize metrics",
                  "Only when an executor crashes with OOM",
                  "During disk compaction"
                ],
                correctIndex: 1,
                explanation: "AQE executes stage by stage; when a shuffle stage completes, the driver receives exact partition statistics and re-plans the next stage."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "system-design",
    title: "Distributed & AI System Design",
    slug: "system-design",
    description: "Enterprise RAG Platforms, Real-time Fraud Detection, Autonomous Coding Agents, Distributed Rate Limiters, and Kafka Event Sourcing.",
    iconName: "Network",
    level: "Principal",
    accentColor: "from-blue-600 to-indigo-600",
    modules: [
      {
        id: "mod-ai-sys-design",
        trackId: "system-design",
        title: "Enterprise AI & Scalable Platforms",
        description: "Designing end-to-end multi-tenant AI systems with strict SLAs, guardrails, and cost controls.",
        lessons: [
          {
            id: "enterprise-rag-sys-design",
            moduleId: "mod-ai-sys-design",
            trackId: "system-design",
            title: "System Design: Enterprise Multimodal RAG Platform",
            durationMinutes: 40,
            difficulty: "Principal",
            prerequisites: ["Vector databases", "Microservices", "Kafka"],
            learningObjectives: [
              "Design an enterprise RAG system serving 10,000 concurrent queries with <1s p99.",
              "Handle real-time document ingestion with change data capture (CDC) and vector updates.",
              "Incorporate document access control lists (ACLs) into vector search without data leakage."
            ],
            overview: "An enterprise RAG system must handle not just semantic retrieval, but enterprise realities: role-based access control (RBAC), multi-tenancy, asynchronous document ingestion pipelines, evaluation telemetry, and strict latency SLAs.",
            theory: `### Key Architecture Components

1. **Ingestion Plane (Asynchronous)**:
   - Connectors (Google Drive, Confluence, S3) emit events to Kafka.
   - Workers parse PDFs, extract OCR for diagrams, and chunk documents hierarchically.
   - Text chunks are embedded and indexed into Milvus/Qdrant alongside tenant IDs and User/Group ACL IDs.

2. **Serving Plane (Synchronous)**:
   - API Gateway verifies OAuth JWT tokens and tenant scope.
   - Semantic Cache checks Redis for identical or high-similarity recent queries.
   - Retrieval Engine executes **Hybrid Search** with pre-filtered ACL tags (\`tenant_id = X AND acl_groups IN (user_groups)\`).
   - Cross-Encoder reranks the top 30 candidates to top 5.
   - Guardrails check query and context for PII/prompt injection.
   - Streaming LLM inference over Server-Sent Events (SSE).`,
            architectureDiagram: `User ──> [ API Gateway & OAuth ] ──> [ Semantic Cache (Redis) ]
                     │ (Cache Miss)
                     ▼
         [ Hybrid Retriever (Milvus + OpenSearch) ]
                     │ With ACL Filters
                     ▼
             [ Cross-Encoder Reranker ]
                     │
                     ▼
           [ Guardrails & LLM Inference ] ──> SSE Stream to User`,
            codeSnippet: {
              title: "Milvus ACL Pre-Filtering Query Example",
              language: "python",
              code: `search_params = {"metric_type": "COSINE", "params": {"nprobe": 16}}
# Enforce zero data leakage across tenants and unauthorized groups
expr = 'tenant_id == "tenant_123" and acl_group in ["engineering", "all_staff"]'

results = collection.search(
    data=[query_embedding],
    anns_field="vector",
    param=search_params,
    limit=30,
    expr=expr,
    output_fields=["chunk_id", "parent_id", "text"]
)
`
            },
            tradeoffs: [
              "Pre-filtering vs Post-filtering in Vector Search: Post-filtering vector results by ACL can yield fewer than k results if top matches are unauthorized. Pre-filtering guarantees k authorized items but requires metadata indexing."
            ],
            commonMistakes: [
              "Failing to enforce ACLs at the vector query stage, allowing unauthorized document fragments to leak into LLM prompts."
            ],
            interviewQuestions: [
              {
                question: "How do you handle document permission updates in a RAG system without re-embedding thousands of chunks?",
                answer: "Decouple the ACL metadata from the embedding vectors. In vector DBs like Milvus or Qdrant, store metadata tags (e.g., document_id, access_roles). When permissions change, issue an in-place scalar metadata update on the document IDs without recalculating heavy embedding vectors."
              }
            ],
            quiz: [
              {
                id: "q-sys-1",
                question: "Why is metadata pre-filtering preferred over post-filtering in enterprise RAG security?",
                options: [
                  "It reduces GPU memory by 90%",
                  "Post-filtering can discard all top-k items if the user lacks permissions, returning empty or degraded results",
                  "Pre-filtering bypasses authentication",
                  "It eliminates vector indexes"
                ],
                correctIndex: 1,
                explanation: "Pre-filtering ensures that the vector search only considers candidate vectors belonging to the user's authorized ACL scope."
              }
            ]
          }
        ]
      }
    ]
  }
];
