import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Bot,
  Layers,
  Cpu,
  Database,
  Network,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  Award
} from 'lucide-react';
import { allTracks } from '../content/tracks/allTracks';
import { useProgress } from '../stores/useProgressStore';

interface CareerPath {
  id: string;
  title: string;
  role: string;
  description: string;
  level: string;
  estimatedHours: number;
  icon: React.ReactNode;
  color: string;
  trackSlug: string;
  skills: string[];
}

const careerPaths: CareerPath[] = [
  {
    id: 'agentic-architect',
    title: 'Agentic AI & Multi-Agent Architect',
    role: 'Principal Agentic Engineer',
    description: 'Master autonomous reasoning loops, LangGraph stategraphs, Model Context Protocol (MCP), human-in-the-loop controls, and multi-agent supervisor hierarchies.',
    level: 'Advanced → Principal',
    estimatedHours: 45,
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-900/40 via-purple-800/10 to-transparent border-purple-500/30',
    trackSlug: 'agentic-ai',
    skills: ['ReAct Loops', 'LangGraph', 'MCP Protocol', 'Supervisor Multi-Agent', 'A2A Communication', 'Evaluation'],
  },
  {
    id: 'rag-specialist',
    title: 'Enterprise RAG Systems Architect',
    role: 'Senior AI / Retrieval Engineer',
    description: 'Build production-grade retrieval augmented generation: hybrid search, cross-encoder reranking, multivector dense retrieval, and layout-aware table extraction.',
    level: 'Intermediate → Advanced',
    estimatedHours: 35,
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-900/40 via-blue-800/10 to-transparent border-blue-500/30',
    trackSlug: 'rag',
    skills: ['Dense Retrieval', 'BM25 Sparse', 'Cross-Encoders', 'Milvus/Qdrant', 'RAG Triad Eval', 'Self-RAG'],
  },
  {
    id: 'llm-platform',
    title: 'LLM Platform & Foundation Engineer',
    role: 'Staff LLM Engineer',
    description: 'From Transformer attention mechanics and LoRA fine-tuning to KV cache management, speculative decoding, and high-throughput vLLM serving.',
    level: 'Beginner → Advanced',
    estimatedHours: 40,
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    color: 'from-amber-900/40 via-amber-800/10 to-transparent border-amber-500/30',
    trackSlug: 'llms',
    skills: ['Self-Attention', 'LoRA & QLoRA', 'vLLM Serving', 'Prompt Caching', 'Quantization', 'Model Gateways'],
  },
  {
    id: 'data-lakehouse',
    title: 'Modern Data & Streaming Engineer',
    role: 'Lead Data Engineer',
    description: 'Construct resilient data infrastructure: Apache Spark AQE, Delta Lake ACID transactions, Kafka streaming, and data lakehouse partitioning.',
    level: 'Beginner → Advanced',
    estimatedHours: 40,
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    color: 'from-emerald-900/40 via-emerald-800/10 to-transparent border-emerald-500/30',
    trackSlug: 'data-eng',
    skills: ['Apache Spark', 'Delta Lake', 'Kafka Streaming', 'Shuffle Skew', 'Z-Ordering', 'Feature Stores'],
  },
  {
    id: 'system-design',
    title: 'Distributed AI Systems Design',
    role: 'Enterprise Systems Architect',
    description: 'Design resilient, fault-tolerant distributed AI architectures handling 100k concurrency, multi-region failovers, and end-to-end OpenTelemetry tracing.',
    level: 'Advanced',
    estimatedHours: 30,
    icon: <Network className="w-6 h-6 text-rose-400" />,
    color: 'from-rose-900/40 via-rose-800/10 to-transparent border-rose-500/30',
    trackSlug: 'system-design',
    skills: ['100k Concurrency', 'Kubernetes KEDA', 'Circuit Breakers', 'Temporal Workflows', 'Disaster Recovery'],
  },
];

export const LearningPathsPage: React.FC = () => {
  const { progress } = useProgress();

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-16">
      {/* Hero Header */}
      <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-dark-900 to-dark-950 p-6 sm:p-8 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Career Roadmaps</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Curated Learning Paths
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Follow structured, role-based career paths from fundamental principles to production scale. Each path groups modules, hands-on labs, and system design challenges designed for continuous technical depth.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-dark-950/70 border border-slate-800/80">
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Available Paths</p>
              <p className="text-xl font-extrabold text-white mt-0.5">5 Specialized</p>
            </div>
            <div className="p-3 rounded-xl bg-dark-950/70 border border-slate-800/80">
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Lessons Completed</p>
              <p className="text-xl font-extrabold text-indigo-400 mt-0.5">{progress.completedLessons.length} Finished</p>
            </div>
            <div className="p-3 rounded-xl bg-dark-950/70 border border-slate-800/80">
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Active Streak</p>
              <p className="text-xl font-extrabold text-amber-400 mt-0.5">{progress.learningStreak} Days</p>
            </div>
            <div className="p-3 rounded-xl bg-dark-950/70 border border-slate-800/80">
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Interview Questions</p>
              <p className="text-xl font-extrabold text-cyan-400 mt-0.5">261 Verified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths List */}
      <div className="space-y-6">
        {careerPaths.map((path) => {
          const track = allTracks.find((t) => t.slug === path.trackSlug);
          const totalLessons = track ? track.modules.reduce((acc, m) => acc + m.lessons.length, 0) : 10;
          const completedInTrack = track
            ? track.modules.reduce((acc, m) => acc + m.lessons.filter((l) => progress.completedLessons.includes(l.id)).length, 0)
            : 0;
          const pct = Math.round((completedInTrack / (totalLessons || 1)) * 100);

          return (
            <div
              key={path.id}
              className={`rounded-2xl border bg-dark-900/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-slate-700 shadow-xl ${path.color}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-dark-950 border border-slate-800 shadow-md flex-shrink-0">
                    {path.icon}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {path.title}
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300 font-semibold border border-slate-700">
                        {path.level}
                      </span>
                    </div>
                    <p className="text-xs text-indigo-300 font-mono font-medium">Target Role: {path.role}</p>
                    <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 flex-shrink-0">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>~{path.estimatedHours} Hours</span>
                    <span>·</span>
                    <span>{totalLessons} Lessons</span>
                  </div>

                  <Link
                    to={path.trackSlug === 'system-design' ? '/system-design' : `/curriculum/${path.trackSlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30 group"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Skills:</span>
                  {path.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-dark-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-2 min-w-[160px]">
                  <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{pct}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
