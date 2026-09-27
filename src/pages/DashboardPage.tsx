import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Compass,
  Flame,
  BookOpen,
  BookMarked,
  Code2,
  Cpu,
  Layers,
  Bot,
  Database,
  Network,
  Lightbulb,
  CheckCircle2,
  Users,
  Building2,
  Award,
  ChevronRight,
  FileText,
  ExternalLink,
  ShieldCheck,
  Zap,
  Terminal
} from 'lucide-react';
import { useProgress } from '../stores/useProgressStore';
import { LearningPulse, LearningResources } from '../components/learning/LearningPulse';

export const DashboardPage: React.FC = () => {
  const { progress } = useProgress();

  return (
    <div className="space-y-12 animate-fade-in pb-20 max-w-7xl mx-auto">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Nexcent Figma Hero)                             */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900 p-8 sm:p-12 shadow-figma-card">
        {/* Soft background ambient gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/60 dark:bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-500/15 border border-brand-200 dark:border-brand-500/30 text-brand-800 dark:text-brand-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>The Premier Platform for AI Engineers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight leading-[1.15]">
              Lessons and insights <br />
              <span className="text-brand-500">from 8 years of AI</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Where to master production AI engineering: architectures, systems, or LLMs? Curated roadmaps, production blueprints, and 261 verified Staff/Principal Q&As.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/curriculum"
                className="btn-nexcent inline-flex items-center gap-2 text-sm"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/interview-questions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-300 dark:border-brand-500/40 bg-brand-50 dark:bg-brand-500/10 hover:bg-brand-100 dark:hover:bg-brand-500/20 text-brand-800 dark:text-brand-300 text-sm font-semibold transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-brand-500" />
                <span>261 AI Q&As</span>
              </Link>

              <Link
                to="/learning-paths"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-750 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Explore Paths</span>
              </Link>
            </div>
          </div>

          {/* Right: Isometric AI Engineering Illustration */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] h-[260px] flex items-center justify-center">
              {/* SVG Flowchart & Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 260">
                <defs>
                  <linearGradient id="figmaGreenLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4CAF4F" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#81C784" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <line x1="170" y1="130" x2="50" y2="60" stroke="url(#figmaGreenLine)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="170" y1="130" x2="260" y2="50" stroke="url(#figmaGreenLine)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="170" y1="130" x2="290" y2="140" stroke="url(#figmaGreenLine)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="170" y1="130" x2="270" y2="210" stroke="url(#figmaGreenLine)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="170" y1="130" x2="60" y2="200" stroke="url(#figmaGreenLine)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="170" y1="130" x2="40" y2="130" stroke="url(#figmaGreenLine)" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Floating Tech Badges */}
              <span className="absolute top-4 left-6 px-3 py-1 rounded-lg bg-white dark:bg-dark-900 border border-brand-200 dark:border-brand-500/40 text-xs font-mono text-brand-800 dark:text-brand-300 shadow-md">
                RAG Systems
              </span>
              <span className="absolute top-2 right-10 px-3 py-1 rounded-lg bg-white dark:bg-dark-900 border border-brand-200 dark:border-brand-500/40 text-xs font-mono text-brand-800 dark:text-brand-300 shadow-md">
                LLM Serving
              </span>
              <span className="absolute top-24 right-2 px-3 py-1 rounded-lg bg-white dark:bg-dark-900 border border-brand-200 dark:border-brand-500/40 text-xs font-mono text-brand-800 dark:text-brand-300 shadow-md">
                Agentic Loops
              </span>
              <span className="absolute bottom-6 left-6 px-3 py-1 rounded-lg bg-white dark:bg-dark-900 border border-brand-200 dark:border-brand-500/40 text-xs font-mono text-brand-800 dark:text-brand-300 shadow-md">
                Data Lakehouse
              </span>
              <span className="absolute bottom-4 right-12 px-3 py-1 rounded-lg bg-white dark:bg-dark-900 border border-brand-200 dark:border-brand-500/40 text-xs font-mono text-brand-800 dark:text-brand-300 shadow-md">
                100k Concurrency
              </span>

              {/* Central Glowing Green Cube / Monitor */}
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-brand-600 via-brand-500 to-emerald-400 p-[2.5px] shadow-figma-green">
                <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[14px] flex flex-col items-center justify-center border border-brand-300/40">
                  <Bot className="w-8 h-8 text-brand-500 mb-1" />
                  <span className="text-xs font-mono font-bold text-brand-700 dark:text-brand-400">
                    AgenticHub
                  </span>
                </div>
              </div>
            </div>

            {/* Figma Carousel Indicators */}
            <div className="flex items-center gap-1.5 mt-4">
              <span className="w-6 h-2 rounded-full bg-brand-500 transition-all" />
              <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OUR CLIENTS & TECH ECOSYSTEM (Matching Nexcent "Our Clients" Row)      */}
      {/* ========================================================================= */}
      <div className="text-center space-y-4 py-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-nexcent-charcoal dark:text-white">
            Our Enterprise AI Tech Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Built on production architectures, evaluations, and toolchains from industry leaders
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2">
          {['OpenAI', 'Anthropic Claude', 'Databricks', 'Meta Llama', 'LangGraph / MCP', 'Apache Spark', 'Kubernetes', 'Qdrant / Milvus'].map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 rounded-xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-400 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MANAGE YOUR ENTIRE COMMUNITY IN A SINGLE SYSTEM (3 Nexcent Cards)     */}
      {/* ========================================================================= */}
      <div className="text-center space-y-8">
        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight">
            Manage your entire AI engineering journey in a single system
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Who is AgenticHub tailored for?
          </p>
        </div>

        {/* 3 Figma Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="figma-card p-8 flex flex-col items-center justify-between space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-2">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-nexcent-charcoal dark:text-white">
              AI Architects & Leads
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Design distributed multi-agent systems, evaluate latency decomposition, enforce enterprise safety guardrails, and plan 100k concurrency architectures.
            </p>
            <Link
              to="/curriculum/agentic-ai"
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 flex items-center gap-1 pt-2"
            >
              <span>Explore Architect Tracks</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="figma-card p-8 flex flex-col items-center justify-between space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-2">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-nexcent-charcoal dark:text-white">
              Retrieval & RAG Specialists
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Build zero-hallucination pipelines with hybrid dense-sparse search, cross-encoder rerankers, contextual chunking, and automated RAG Triad evaluations.
            </p>
            <Link
              to="/curriculum/rag"
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 flex items-center gap-1 pt-2"
            >
              <span>Explore RAG Systems</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="figma-card p-8 flex flex-col items-center justify-between space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-2">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-nexcent-charcoal dark:text-white">
              Hands-On Practitioners
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Master 261 Staff & Principal AI interview questions, real-world troubleshooting scenarios, code implementation challenges, and live coding exercises.
            </p>
            <Link
              to="/interview-questions"
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 flex items-center gap-1 pt-2"
            >
              <span>Explore 261 Q&As</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. FEATURE 1 SHOWCASE (The unseen of spending 3 years at Pixelgrade)     */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4">
        {/* Left Graphic */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-brand-50 dark:bg-dark-900 border border-brand-200 dark:border-slate-800 shadow-sm flex flex-col justify-center space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-brand-700 dark:text-brand-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Production AI Evaluation Engine</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-500 text-white font-bold">
              v2.4
            </span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Context Faithfulness:</span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">0.96 / 1.00</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">P99 Time to First Token:</span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">142 ms</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Agent Tool Execution Success:</span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">99.4%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Structured Schema Adherence:</span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">100.0%</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight leading-tight">
            The unseen depth of production-grade AI systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Building reliable AI is vastly different from demoing a prompt. True production readiness demands deterministic validation schemas, circuit-breakers against looping agents, multi-tenant vector isolation, and resilient fallback routing.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore 48 comprehensive modules spanning foundation models, agentic state machines, distributed streaming pipelines, and high-scale system designs.
          </p>
          <div className="pt-2">
            <Link
              to="/curriculum"
              className="btn-nexcent inline-flex items-center gap-2 text-sm"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. STATS SECTION (Helping engineers reinvent production AI)              */}
      {/* ========================================================================= */}
      <div className="py-10 px-6 sm:px-12 rounded-3xl bg-nexcent-canvas dark:bg-dark-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight leading-tight">
              Helping engineers <br />
              <span className="text-brand-500">reinvent production AI</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We reached here with deep systems research, hands-on code labs, and real-world production engineering architectures.
            </p>
          </div>

          {/* Right 2x2 Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-500/15 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <Sparkles className="w-6 h-6 text-brand-500" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white">261</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Verified Q&As</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-500/15 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <Flame className="w-6 h-6 text-brand-500 fill-brand-500" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white">14 Days</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Learning Streak</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-500/15 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <BookOpen className="w-6 h-6 text-brand-500" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white">48</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Modules & Labs</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-500/15 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <Network className="w-6 h-6 text-brand-500" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white">100k</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Concurrency Scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. FEATURE 2 SHOWCASE (How to design your site footer like we did)       */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4">
        {/* Left Visual Illustration */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 shadow-figma-card space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-slate-400 ml-2">rag_pipeline.py</span>
          </div>

          <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto p-2">
{`# Multi-Stage Hybrid RAG Architecture
async def retrieve_and_rerank(query: str):
    dense_vecs = await embedder.encode(query)
    bm25_hits = sparse_index.query(query, k=50)
    dense_hits = vector_db.search(dense_vecs, k=50)
    
    # Reciprocal Rank Fusion + Cross-Encoder
    fused_docs = rrf([bm25_hits, dense_hits])
    ranked = await cross_encoder.rerank(query, fused_docs)
    return ranked[:5]`}
          </pre>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 text-brand-600 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Zero-Hallucination Verified
            </span>
            <span className="font-mono">P99 &lt; 85ms</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight leading-tight">
            How to design production RAG pipelines with zero hallucination
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Standard naive RAG breaks down when documents have complex tables, ambiguous queries, or contradictory facts. Our production guides walk through real-world reciprocal rank fusion, late chunking, multi-representation indexing, and automated RAG Triad evaluations.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Gain immediate practical knowledge on tuning HNSW vector parameters, managing sparse BM25 indices in Milvus and Qdrant, and deploying GPU-accelerated cross-encoders.
          </p>
          <div className="pt-2">
            <Link
              to="/curriculum/rag"
              className="btn-nexcent inline-flex items-center gap-2 text-sm"
            >
              <span>Read Architecture Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. CURATED LEARNING PATHS (6 Crisp Figma Cards)                           */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-nexcent-charcoal dark:text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-brand-500" />
              <span>Curated Learning Paths</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Structured paths to go from fundamentals to production. Choose a path and start building.
            </p>
          </div>
          <Link
            to="/learning-paths"
            className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 flex items-center gap-1"
          >
            <span>View All Paths</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Path Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Card 1 */}
          <Link
            to="/curriculum/llms"
            className="figma-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white group-hover:text-brand-600 transition-colors">
                LLM Engineering
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Foundations, attention mechanics, LoRA, and serving.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-brand-600 flex items-center justify-between">
              <span>12 modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/curriculum/rag"
            className="figma-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white group-hover:text-brand-600 transition-colors">
                RAG Systems
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Hybrid retrieval, cross-encoders, and evaluation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-brand-600 flex items-center justify-between">
              <span>10 modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/curriculum/agentic-ai"
            className="figma-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white group-hover:text-brand-600 transition-colors">
                Agentic AI
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Autonomous agents, LangGraph, and supervisor routing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-brand-600 flex items-center justify-between">
              <span>11 modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/curriculum/data-eng"
            className="figma-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white group-hover:text-brand-600 transition-colors">
                Data Engineering
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Apache Spark, Delta Lake, and modern streaming.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-brand-600 flex items-center justify-between">
              <span>12 modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            to="/system-design"
            className="figma-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white group-hover:text-brand-600 transition-colors">
                System Design
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Scalable AI architectures, 100k concurrency, and failover.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-brand-600 flex items-center justify-between">
              <span>9 modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            to="/coding"
            className="figma-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white group-hover:text-brand-600 transition-colors">
                Coding Practice
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Hands-on coding, algorithms, and AI challenges.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-brand-600 flex items-center justify-between">
              <span>15 modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. TESTIMONIAL SECTION (Matching Tesla Testimonial from Nexcent Mockup)   */}
      {/* ========================================================================= */}
      <div className="p-8 sm:p-10 rounded-3xl bg-nexcent-canvas dark:bg-dark-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Emblem */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-44 h-44 rounded-2xl bg-nexcent-charcoal dark:bg-dark-950 flex flex-col items-center justify-center p-6 shadow-xl border border-slate-700/50">
              <Bot className="w-16 h-16 text-brand-400 mb-2" />
              <span className="font-extrabold text-white text-base tracking-widest font-mono">
                AGENTICHUB
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">261 Q&A BANK</span>
            </div>
          </div>

          {/* Right Quote */}
          <div className="lg:col-span-8 space-y-4">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
              "The 261 AI engineering interview questions and architecture guides bridge the gap between academic research and high-scale production systems. It has transformed our team's engineering velocity, eliminating months of trial-and-error in multi-agent routing and RAG evaluation."
            </p>

            <div>
              <p className="font-bold text-base text-brand-600 dark:text-brand-400">
                Sambit Baliarsingh
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Staff AI Systems Architect · Creator of AgenticHub
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span>Enterprise Verified</span>
                <span>·</span>
                <span>Production Tested</span>
                <span>·</span>
                <span>Staff / Principal Depth</span>
              </div>

              <Link
                to="/interview-questions"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700"
              >
                <span>Meet all 261 Questions & Answers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 9. CARING IS THE NEW MARKETING (3 Nexcent Blog / Insight Cards)          */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight">
            Caring for Engineering Excellence
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            The AgenticHub knowledge base is the best place to read about the latest production AI breakthroughs, evaluations, and architecture guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="figma-card p-6 flex flex-col justify-between space-y-4">
            <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-brand-600/20 via-brand-500/10 to-emerald-400/20 flex items-center justify-center border border-brand-200/50 dark:border-brand-500/20">
              <Sparkles className="w-10 h-10 text-brand-500" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-100 text-brand-700">
                SYSTEM DESIGN
              </span>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white mt-2 leading-snug">
                Creating Streamlined Safe-Guarding for Enterprise LLMs
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Deterministic regex rules, semantic embeddings, and LLM-as-a-judge classifiers.
              </p>
            </div>
            <Link
              to="/system-design"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 pt-2"
            >
              <span>Read more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="figma-card p-6 flex flex-col justify-between space-y-4">
            <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-cyan-400/20 flex items-center justify-center border border-blue-200/50 dark:border-blue-500/20">
              <Bot className="w-10 h-10 text-blue-500" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                AGENTIC AI
              </span>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white mt-2 leading-snug">
                What are your safeguarding responsibilities and how do you manage them?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Handling non-deterministic agent tool execution with human-in-the-loop approvals.
              </p>
            </div>
            <Link
              to="/curriculum/agentic-ai"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 pt-2"
            >
              <span>Read more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="figma-card p-6 flex flex-col justify-between space-y-4">
            <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-amber-600/20 via-orange-500/10 to-amber-400/20 flex items-center justify-center border border-amber-200/50 dark:border-amber-500/20">
              <Layers className="w-10 h-10 text-amber-500" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                RAG BENCHMARKS
              </span>
              <h3 className="text-sm font-bold text-nexcent-charcoal dark:text-white mt-2 leading-snug">
                Revamping the Membership Retrieval Model with Trie Indices
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Benchmarking hybrid dense-sparse pipelines across 50,000 queries per second.
              </p>
            </div>
            <Link
              to="/curriculum/rag"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 pt-2"
            >
              <span>Read more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 10. PRE-FOOTER CALL TO ACTION (Pellentesque suscipit...)                  */}
      {/* ========================================================================= */}
      <div className="py-12 px-6 sm:px-12 rounded-3xl bg-nexcent-canvas dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-center space-y-6 shadow-sm">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nexcent-charcoal dark:text-white tracking-tight max-w-2xl mx-auto leading-tight">
          Ready to elevate your production AI engineering depth?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Explore structured curricula, master 261 Staff & Principal questions, and build systems with confidence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/curriculum"
            className="btn-nexcent inline-flex items-center gap-2 text-base px-8 py-3"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/interview-questions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-750 text-slate-700 dark:text-slate-200 text-base font-semibold transition-colors shadow-sm"
          >
            <span>Browse 261 Q&As</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
