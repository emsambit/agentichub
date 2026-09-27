import { ResearchPaper } from '../../types';

export const landmarkPapers: ResearchPaper[] = [
  {
    id: "attention-is-all-you-need",
    title: "Attention Is All You Need",
    authors: "Vaswani et al. (Google Brain & Google Research)",
    year: 2017,
    category: "Deep Learning & Transformers",
    summary: "Replaced recurrent neural networks and convolutions entirely with multi-head self-attention mechanisms, founding the modern generative AI era.",
    keyContributions: [
      "Introduced the Transformer encoder-decoder architecture.",
      "Replaced recurrent O(N) sequential computation with parallelizable O(1) step matrix operations.",
      "Proposed scaled dot-product attention and sinusoidal positional encodings."
    ],
    whyItMatters: "Every major modern LLM (GPT-4, Claude, Gemini, LLaMA) is directly derived from the transformer architecture pioneered in this paper.",
    arxivUrl: "https://arxiv.org/abs/1706.03762"
  },
  {
    id: "lora-adaptation",
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Hu et al. (Microsoft)",
    year: 2021,
    category: "LLM Fine-Tuning & Efficiency",
    summary: "Freezes pre-trained model weights and injects trainable rank decomposition matrices into each transformer layer, reducing trainable parameters by 10,000x.",
    keyContributions: [
      "Hypothesized that weight updates during adaptation have a low intrinsic dimension.",
      "Decomposed update matrix Delta W into W_0 + B * A where B and A have rank r << d.",
      "Enables training multi-gigabyte models on single consumer GPUs without inference latency overhead."
    ],
    whyItMatters: "Made enterprise custom fine-tuning economically viable and democratized open-source LLM specialization.",
    arxivUrl: "https://arxiv.org/abs/2106.09685"
  },
  {
    id: "react-reasoning-acting",
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    authors: "Yao et al. (Princeton & Google Research)",
    year: 2022,
    category: "Agentic AI",
    summary: "Introduced the paradigm of interleaving reasoning traces ('thoughts') and task-specific actions ('tools') to guide autonomous agent execution.",
    keyContributions: [
      "Showed that combining Chain-of-Thought reasoning with external tool observation eliminates hallucination and improves goal achievement.",
      "Outperformed pure reasoning and pure acting baselines across HotpotQA and ALFWorld.",
      "Established the foundation for modern agent frameworks like LangGraph and CrewAI."
    ],
    whyItMatters: "The conceptual blueprint for all tool-using AI agents in production today.",
    arxivUrl: "https://arxiv.org/abs/2210.03629"
  },
  {
    id: "self-rag",
    title: "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection",
    authors: "Asai et al. (University of Washington, Allen AI)",
    year: 2023,
    category: "RAG Systems",
    summary: "Trained an LLM to dynamically determine *when* to retrieve documents and critique its own generated responses using reflection tokens.",
    keyContributions: [
      "Introduced reflection tokens: [Retrieve], [IsRel], [IsSup], [IsUse].",
      "Eliminates redundant retrieval when the model already possesses parametric knowledge.",
      "Enforces strict attribution checking against retrieved context before presenting answers."
    ],
    whyItMatters: "Pioneered adaptive self-correcting RAG architectures, reducing hallucination by over 40% on open-domain QA.",
    arxivUrl: "https://arxiv.org/abs/2310.11511"
  }
];
