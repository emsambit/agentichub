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
  ExternalLink,
  CheckCircle2,
  Newspaper
} from 'lucide-react';
import { useProgress } from '../stores/useProgressStore';

export const DashboardPage: React.FC = () => {
  const { progress } = useProgress();

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* ========================================================================= */}
      {/* 1. TOP ROW: HERO BANNER (2/3) + YOUR LEARNING JOURNEY (1/3)              */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Hero Card (8 Cols) */}
        <div className="lg:col-span-8 relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Welcome to AgenticHub</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Explore AI. Build depth.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Stay ahead.
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Curated learning paths, hands-on engineering topics, and the latest developments in AI, ML and data — all in one place.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/curriculum"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 group"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/trends"
                  className="px-4 py-2.5 rounded-xl border border-slate-700/80 bg-dark-800/80 hover:bg-dark-750 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  <span>Explore Trends</span>
                </Link>

                <Link
                  to="/curriculum"
                  className="px-4 py-2.5 rounded-xl border border-slate-700/80 bg-dark-800/80 hover:bg-dark-750 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Browse Topics</span>
                </Link>
              </div>
            </div>

            {/* Right Isometric AI Platform Illustration */}
            <div className="md:col-span-5 relative flex flex-col items-center justify-center">
              <div className="text-[11px] font-mono text-slate-400 italic text-right w-full mb-2">
                "Deeper learning for a more capable AI future."
              </div>

              {/* Isometric 3D Glowing Diagram */}
              <div className="relative w-full max-w-[280px] h-[220px] flex items-center justify-center">
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 220">
                  <defs>
                    <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <line x1="140" y1="110" x2="40" y2="50" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="110" x2="200" y2="40" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="110" x2="240" y2="90" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="110" x2="230" y2="170" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="110" x2="50" y2="170" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="110" x2="250" y2="135" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>

                {/* Floating Node Badges */}
                <span className="absolute top-6 left-2 px-2 py-0.5 rounded-md bg-dark-900/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 shadow-lg shadow-blue-500/10">
                  RAG
                </span>
                <span className="absolute top-3 right-16 px-2 py-0.5 rounded-md bg-dark-900/90 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 shadow-lg shadow-indigo-500/10">
                  LLMs
                </span>
                <span className="absolute top-16 right-2 px-2 py-0.5 rounded-md bg-dark-900/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 shadow-lg shadow-purple-500/10">
                  Agents
                </span>
                <span className="absolute bottom-8 left-2 px-2 py-0.5 rounded-md bg-dark-900/90 border border-amber-500/40 text-[10px] font-mono text-amber-300 shadow-lg shadow-amber-500/10">
                  Data Engineering
                </span>
                <span className="absolute top-28 right-0 px-2 py-0.5 rounded-md bg-dark-900/90 border border-rose-500/40 text-[10px] font-mono text-rose-300 shadow-lg shadow-rose-500/10">
                  System Design
                </span>
                <span className="absolute bottom-6 right-8 px-2 py-0.5 rounded-md bg-dark-900/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
                  Production
                </span>

                {/* Central Glowing AI Cube */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] shadow-2xl shadow-blue-500/40 animate-pulse-subtle">
                  <div className="w-full h-full bg-dark-950 rounded-[14px] flex flex-col items-center justify-center border border-blue-400/30">
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-wider">
                      AI
                    </span>
                    <span className="w-6 h-1 rounded-full bg-blue-500/60 mt-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Feature Value Props */}
          <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-start gap-2">
              <span className="p-1 rounded-md bg-blue-500/10 text-blue-400">🎓</span>
              <div>
                <p className="font-semibold text-white">Expert-curated content</p>
                <p className="text-[11px] text-slate-400">Depth over noise</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="p-1 rounded-md bg-indigo-500/10 text-indigo-400">🛠️</span>
              <div>
                <p className="font-semibold text-white">Hands-on learning</p>
                <p className="text-[11px] text-slate-400">From theory to production</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="p-1 rounded-md bg-cyan-500/10 text-cyan-400">⏱️</span>
              <div>
                <p className="font-semibold text-white">Latest industry trends</p>
                <p className="text-[11px] text-slate-400">Stay ahead of the curve</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400">🌐</span>
              <div>
                <p className="font-semibold text-white">Open & free</p>
                <p className="text-[11px] text-slate-400">For the global community</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Your Learning Journey (4 Cols) */}
        <div className="lg:col-span-4 rounded-3xl border border-slate-800/90 bg-dark-900/90 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">📘</span>
                <span>Your Learning Journey</span>
              </h2>
              <Link to="/notes" className="text-xs text-blue-400 hover:text-blue-300 font-medium">
                View All →
              </Link>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Flame className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">14</div>
                  <div className="text-[10px] text-slate-400">Day Streak</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">24</div>
                  <div className="text-[10px] text-slate-400">Lessons Completed</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">8</div>
                  <div className="text-[10px] text-slate-400">Papers Read</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">12</div>
                  <div className="text-[10px] text-slate-400">Coding Solved</div>
                </div>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Overall Progress</span>
                <span className="font-mono text-blue-400 font-bold">32%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm shadow-blue-500/50"
                  style={{ width: '32%' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 text-center font-medium">
            Keep going! You're building real expertise. 🚀
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CURATED LEARNING PATHS (6 Glowing Cards)                                */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Curated Learning Paths</span>
            </h2>
            <p className="text-xs text-slate-400">
              Structured paths to go from fundamentals to production. Choose a path and start building.
            </p>
          </div>
          <Link to="/curriculum" className="text-xs text-blue-400 hover:text-blue-300 font-medium">
            View All Paths →
          </Link>
        </div>

        {/* 6 Path Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
          {/* Card 1: LLM Engineering */}
          <Link
            to="/curriculum/llms"
            className="p-4 rounded-2xl border border-purple-500/20 bg-dark-900/90 hover:border-purple-500/50 hover:bg-dark-850 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                LLM Engineering
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                From foundations to fine-tuning and production.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              12 modules · Beginner → Advanced
            </div>
          </Link>

          {/* Card 2: RAG Systems */}
          <Link
            to="/curriculum/rag"
            className="p-4 rounded-2xl border border-blue-500/20 bg-dark-900/90 hover:border-blue-500/50 hover:bg-dark-850 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                RAG Systems
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                Build reliable RAG pipelines for real-world applications.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              10 modules · Intermediate
            </div>
          </Link>

          {/* Card 3: Agentic AI */}
          <Link
            to="/curriculum/agentic-ai"
            className="p-4 rounded-2xl border border-emerald-500/20 bg-dark-900/90 hover:border-emerald-500/50 hover:bg-dark-850 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Agentic AI
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                Design and build autonomous AI agents.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              11 modules · Intermediate
            </div>
          </Link>

          {/* Card 4: Data Engineering */}
          <Link
            to="/curriculum/data-eng"
            className="p-4 rounded-2xl border border-amber-500/20 bg-dark-900/90 hover:border-amber-500/50 hover:bg-dark-850 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Database className="w-5 h-5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                Data Engineering
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                Modern data stack, lakehouse and ML pipelines.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              12 modules · Beginner → Advanced
            </div>
          </Link>

          {/* Card 5: System Design */}
          <Link
            to="/system-design"
            className="p-4 rounded-2xl border border-rose-500/20 bg-dark-900/90 hover:border-rose-500/50 hover:bg-dark-850 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                  <Network className="w-5 h-5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center text-slate-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                System Design
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                Design scalable AI/ML systems for real-world use.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              9 modules · Advanced
            </div>
          </Link>

          {/* Card 6: Coding Practice */}
          <Link
            to="/coding"
            className="p-4 rounded-2xl border border-indigo-500/20 bg-dark-900/90 hover:border-indigo-500/50 hover:bg-dark-850 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                Coding Practice
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                Hands-on coding, DSA and AI engineering challenges.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              15 modules · All levels
            </div>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. TRENDING NOW + TOPIC OF THE DAY ROW                                   */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Trending Now (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Trending Now</span>
              </h2>
              <p className="text-xs text-slate-400">
                Popular topics, emerging trends and what the community is learning.
              </p>
            </div>
            <Link to="/trends" className="text-xs text-blue-400 hover:text-blue-300 font-medium">
              View All Trends →
            </Link>
          </div>

          {/* 5 Trending Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Trend 1 */}
            <div className="p-3.5 rounded-2xl border border-slate-800 bg-dark-900/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
                <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-purple-900/50 to-blue-900/30 flex items-center justify-center mb-2 overflow-hidden border border-purple-500/20">
                  <Bot className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xs font-bold text-white leading-snug">Agentic AI</h3>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  Autonomous agents, multi-agent systems and real-world use cases.
                </p>
              </div>
              <span className="self-start text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                🔥 HOT
              </span>
            </div>

            {/* Trend 2 */}
            <div className="p-3.5 rounded-2xl border border-slate-800 bg-dark-900/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
                <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-cyan-900/50 to-indigo-900/30 flex items-center justify-center mb-2 overflow-hidden border border-cyan-500/20">
                  <Sparkles className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xs font-bold text-white leading-snug">Multimodal Models</h3>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  Text, image, video, audio and beyond.
                </p>
              </div>
              <span className="self-start text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                TRENDING
              </span>
            </div>

            {/* Trend 3 */}
            <div className="p-3.5 rounded-2xl border border-slate-800 bg-dark-900/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-bold flex items-center justify-center">
                    3
                  </span>
                </div>
                <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-emerald-900/50 to-teal-900/30 flex items-center justify-center mb-2 overflow-hidden border border-emerald-500/20">
                  <Layers className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xs font-bold text-white leading-snug">RAG Evaluation</h3>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  Metrics, benchmarks and optimization techniques.
                </p>
              </div>
              <span className="self-start text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                RISING
              </span>
            </div>

            {/* Trend 4 */}
            <div className="p-3.5 rounded-2xl border border-slate-800 bg-dark-900/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-bold flex items-center justify-center">
                    4
                  </span>
                </div>
                <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-amber-900/50 to-orange-900/30 flex items-center justify-center mb-2 overflow-hidden border border-amber-500/20">
                  <Database className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xs font-bold text-white leading-snug">Data Lakehouse</h3>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  The next generation data architecture.
                </p>
              </div>
              <span className="self-start text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                TRENDING
              </span>
            </div>

            {/* Trend 5 */}
            <div className="p-3.5 rounded-2xl border border-slate-800 bg-dark-900/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-bold flex items-center justify-center">
                    5
                  </span>
                </div>
                <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-blue-900/50 to-indigo-900/30 flex items-center justify-center mb-2 overflow-hidden border border-blue-500/20">
                  <Code2 className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xs font-bold text-white leading-snug">AI Coding Agents</h3>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  From copilots to autonomous developers.
                </p>
              </div>
              <span className="self-start text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                🔥 HOT
              </span>
            </div>
          </div>
        </div>

        {/* Right: Topic of the Day (4 Cols) */}
        <div className="lg:col-span-4 rounded-3xl border border-slate-800/90 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Lightbulb className="w-4 h-4 fill-amber-400" />
                <span>Topic of the Day</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">Function Calling in LLMs</h3>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    INTERMEDIATE
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Learn how LLMs can interact with external tools and APIs to perform real-world tasks.
                </p>
              </div>

              {/* 3D Glowing Cube Graphic */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-blue-500/20 flex-shrink-0">
                <div className="w-full h-full bg-dark-950 rounded-[10px] flex flex-col items-center justify-center text-blue-400">
                  <span className="text-xs font-mono font-extrabold text-blue-300">LLM</span>
                  <div className="flex gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/curriculum/agentic-ai/intro-agentic-arch"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-600/30 w-fit"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM 3-COLUMN STRIP: NEWS + RESEARCH SPOTLIGHT + CONTINUE LEARNING  */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Col 1: Latest in AI/ML/Data World */}
        <div className="rounded-3xl border border-slate-800/90 bg-dark-900/80 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <Newspaper className="w-4 h-4 text-blue-400" />
              <span>Latest in AI/ML/Data World</span>
            </div>
            <Link to="/trends" className="text-[11px] text-blue-400 hover:text-blue-300 font-medium">
              View All News →
            </Link>
          </div>

          <div className="space-y-3">
            {/* News 1 */}
            <div className="p-3 rounded-xl bg-dark-850/80 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400 flex-shrink-0">
                AI
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-white truncate">
                  OpenAI releases GPT-4.5 with stronger reasoning and tool use
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  OpenAI · Mar 1, 2024
                </p>
              </div>
            </div>

            {/* News 2 */}
            <div className="p-3 rounded-xl bg-dark-850/80 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-xs font-bold text-amber-400 flex-shrink-0">
                A\
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-white truncate">
                  Anthropic introduces Claude 3 family with expanded capabilities
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Anthropic · Feb 28, 2024
                </p>
              </div>
            </div>

            {/* News 3 */}
            <div className="p-3 rounded-xl bg-dark-850/80 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-xs font-bold text-rose-400 flex-shrink-0">
                DB
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-white truncate">
                  Databricks unveils new lakehouse features for AI workloads
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Databricks · Feb 27, 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: Research & Papers Spotlight */}
        <div className="rounded-3xl border border-slate-800/90 bg-dark-900/80 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <BookMarked className="w-4 h-4 text-purple-400" />
              <span>Research & Papers Spotlight</span>
            </div>
            <Link to="/research" className="text-[11px] text-blue-400 hover:text-blue-300 font-medium">
              View All Papers →
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-dark-850/80 border border-slate-800/80 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-14 rounded-lg bg-dark-950 border border-slate-700/80 flex flex-col items-center justify-center p-1 flex-shrink-0 text-slate-400">
                <div className="w-full h-1 bg-slate-700 mb-1 rounded" />
                <div className="w-full h-1 bg-slate-700 mb-1 rounded" />
                <div className="w-4 h-1 bg-slate-700 rounded self-start" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white truncate">Attention Is All You Need</h4>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300">
                    Seminal
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Vaswani et al. (2017)
                </p>
                <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  The original Transformer architecture that revolutionized modern AI.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 text-slate-400 border border-slate-800">
                Transformers
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 text-slate-400 border border-slate-800">
                Foundation Models
              </span>
            </div>
          </div>
        </div>

        {/* Col 3: Continue Learning */}
        <div className="rounded-3xl border border-slate-800/90 bg-dark-900/80 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Continue Learning</span>
            </div>
            <Link to="/curriculum" className="text-[11px] text-blue-400 hover:text-blue-300 font-medium">
              View All →
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-dark-850/80 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-white truncate">
                  Building a RAG Pipeline with LangChain
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  4 of 7 lessons completed
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: '60%' }}
                />
              </div>
              <div className="flex justify-end text-[10px] font-mono text-slate-400">
                60%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
