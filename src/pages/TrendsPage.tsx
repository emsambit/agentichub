import React from 'react';
import { TrendingUp, Bot, Sparkles, Layers, Database, Code2, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrendsPage: React.FC = () => {
  const trends = [
    {
      id: 'agentic-ai',
      rank: 1,
      title: 'Agentic AI & Multi-Agent Swarms',
      category: 'Autonomous Systems',
      badge: '🔥 HOT',
      description: 'Moving beyond single LLM calls to long-running, autonomous agents orchestrated with LangGraph, Model Context Protocol (MCP), and self-healing verification loops.',
      technologies: ['LangGraph', 'MCP', 'CrewAI', 'AutoGen', 'Tool Calling'],
      actionPath: '/curriculum/agentic-ai',
    },
    {
      id: 'multimodal',
      rank: 2,
      title: 'Frontier Multimodal Reasoning',
      category: 'Foundation Models',
      badge: 'TRENDING',
      description: 'Native audio-visual understanding and cross-attention architectures enabling models to watch video feeds, inspect blueprints, and parse complex document layouts directly.',
      technologies: ['Gemini 1.5 Pro', 'GPT-4o', 'Claude 3.5 Sonnet', 'Vision Transformers'],
      actionPath: '/curriculum/llms',
    },
    {
      id: 'rag-eval',
      rank: 3,
      title: 'Advanced RAG & Evaluation Frameworks',
      category: 'Retrieval Systems',
      badge: 'RISING',
      description: 'Replacing naive chunking with Parent-Child indexing, Late Chunking, and Cross-Encoder reranking backed by continuous Ragas and TruLens automated evaluation harnesses.',
      technologies: ['Milvus', 'Qdrant', 'Ragas', 'Cohere Rerank', 'BM25'],
      actionPath: '/curriculum/rag',
    },
    {
      id: 'lakehouse',
      rank: 4,
      title: 'Next-Gen Lakehouse Architecture (Iceberg / Delta)',
      category: 'Big Data & ML Platforms',
      badge: 'TRENDING',
      description: 'Unifying streaming data lakes with ACID transactions, schema evolution, and serverless compute using Apache Iceberg, Spark 3.x AQE, and AWS EMR Serverless.',
      technologies: ['Apache Iceberg', 'Apache Spark', 'Kafka', 'Airflow', 'Trino'],
      actionPath: '/curriculum/data-eng',
    },
    {
      id: 'coding-agents',
      rank: 5,
      title: 'Autonomous AI Software Engineers',
      category: 'Developer Tooling',
      badge: '🔥 HOT',
      description: 'Agentic coding assistants with sandboxed execution, terminal interaction, repository-wide static analysis, and automated test-driven repair.',
      technologies: ['Copilot Workspace', 'Devin', 'SWE-bench', 'Docker Sandboxes'],
      actionPath: '/coding',
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 animate-fade-in">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Industry Pulse & Frontiers</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Trending AI & Engineering Shifts
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Curated analysis of the technological disruptions and architectural paradigms actively reshaping enterprise AI and data platforms.
        </p>
      </div>

      <div className="space-y-4">
        {trends.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 hover:border-slate-700 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center">
                  #{t.rank}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-400 border border-slate-700">
                  {t.category}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {t.badge}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white">{t.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{t.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {t.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-850 text-slate-400 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={t.actionPath}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors self-start md:self-auto flex-shrink-0 shadow-lg shadow-blue-600/20"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
