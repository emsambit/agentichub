import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  CheckCircle2,
  BookOpen,
  Code2,
  Network,
  Cpu,
  ArrowRight,
  TrendingUp,
  Brain,
  FlaskConical,
  Award,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useProgress } from '../stores/useProgressStore';
import { profileMeta } from '../content/profile/sambitProfile';
import { allTracks } from '../content/tracks/allTracks';
import { dsaProblems } from '../content/coding/dsaProblems';
import { techJargonTerms } from '../content/jargon/techJargon';
import { systemDesignCases } from '../content/system-design/systemDesignCases';

export const DashboardPage: React.FC = () => {
  const { progress } = useProgress();

  const totalLessons = allTracks.reduce(
    (acc, track) => acc + track.modules.reduce((mAcc, mod) => mAcc + mod.lessons.length, 0),
    0
  );
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const masteredProblems = Object.values(progress.problemStatus).filter((s) => s === 'mastered').length;

  const todayJargon = techJargonTerms[0];
  const todayProblem = dsaProblems[1]; // LRU Cache
  const todayDesign = systemDesignCases[0]; // URL Shortener

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner: Greeting & Engineering Focus */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Engineering OS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Good morning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">Sambit</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              "Build depth. Build systems. Build intelligence." Your personal continuous-learning operating system designed to master Agentic AI, LLM systems, and distributed platforms.
            </p>
          </div>

          {/* Quick Profile Summary Badge */}
          <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/80 backdrop-blur-md flex items-center gap-4 flex-shrink-0">
            <img
              src={profileMeta.avatarUrl}
              alt="Sambit Baliarsingh"
              className="w-14 h-14 rounded-xl object-cover border border-slate-700 shadow-md"
            />
            <div>
              <h2 className="text-sm font-semibold text-white">{profileMeta.name}</h2>
              <p className="text-xs text-brand-300 font-medium">{profileMeta.title.split('|')[0]}</p>
              <div className="flex items-center gap-2 mt-2">
                <Link
                  to="/profile"
                  className="text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <Link
                  to="/lab"
                  className="text-[11px] font-medium text-cyan-300 hover:text-white bg-cyan-950/60 border border-cyan-800/40 hover:bg-cyan-900/60 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Lab Works</span>
                  <FlaskConical className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Three Pillars (Identities) Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1 */}
        <Link
          to="/profile"
          className="group p-5 rounded-2xl border border-slate-800 hover:border-brand-500/40 bg-dark-900/60 hover:bg-dark-850/80 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-brand-400 font-bold">
                I. Executive Profile
              </span>
              <Award className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
              Staff & Principal Engineer
            </h2>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              17+ years at Walmart, Twilio, BT & Honeywell. Patents, education (BITS Pilani, IIM Vizag), and track record scaling petabyte AI systems.
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-medium text-brand-400 group-hover:translate-x-1 transition-transform gap-1">
            <span>View Full Timeline & Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* Pillar 2 */}
        <Link
          to="/curriculum"
          className="group p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 bg-dark-900/60 hover:bg-dark-850/80 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold">
                II. Learning OS
              </span>
              <Brain className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              Curriculum Tracks & Practice
            </h2>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Deep tracks in Agentic AI, RAG University, Transformers, Apache Spark, System Design cases, and algorithmic problem solving.
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-medium text-cyan-400 group-hover:translate-x-1 transition-transform gap-1">
            <span>Explore 5 Engineering Tracks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* Pillar 3 */}
        <Link
          to="/lab"
          className="group p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 bg-dark-900/60 hover:bg-dark-850/80 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold">
                III. Lab & Systems
              </span>
              <FlaskConical className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Featured Production Works
            </h2>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Deep dives into SparkPlug Autonomous Agents, Real-Time Messaging NLP at billions/day scale, and Apache Iceberg Lakehouses.
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-medium text-emerald-400 group-hover:translate-x-1 transition-transform gap-1">
            <span>Explore Production Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>

      {/* Progress & Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Streak</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{progress.learningStreak}</span>
            <span className="text-xs text-slate-400 font-mono">days active</span>
          </div>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Consistency compounding</span>
          </p>
        </div>

        <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Curriculum</span>
            <BookOpen className="w-4 h-4 text-brand-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{completedCount}</span>
            <span className="text-xs text-slate-400 font-mono">/ {totalLessons} lessons</span>
          </div>
          <div className="mt-2 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-brand-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>DSA Mastery</span>
            <Code2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{masteredProblems}</span>
            <span className="text-xs text-slate-400 font-mono">/ {dsaProblems.length} mastered</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Python implementations</p>
        </div>

        <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Bookmarks & Notes</span>
            <Award className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">
              {progress.bookmarks.length + progress.notes.length}
            </span>
            <span className="text-xs text-slate-400 font-mono">items saved</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Personal knowledge base</p>
        </div>
      </div>

      {/* Daily Learning Plan & Next Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Today's Actionable Agenda */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-400" />
              <span>Today's Engineering Plan</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">Target: 2 hours</span>
          </div>

          <div className="space-y-3">
            {/* Action Item 1: RAG Lesson */}
            <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/90 hover:border-slate-700 transition-colors flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      RAG Architecture
                    </span>
                    <span className="text-xs text-slate-400">35 min</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate mt-0.5">
                    Hybrid Search & Cross-Encoder Reranking
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Combine Dense & Sparse BM25 with Reciprocal Rank Fusion
                  </p>
                </div>
              </div>
              <Link
                to="/curriculum/rag/reranking-cross-encoders"
                className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors flex-shrink-0 shadow-lg shadow-cyan-600/20"
              >
                <span>Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Action Item 2: Coding Problem */}
            <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/90 hover:border-slate-700 transition-colors flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      Coding DSA
                    </span>
                    <span className="text-xs text-slate-400">{todayProblem.difficulty} · 30 min</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate mt-0.5">
                    {todayProblem.title}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {todayProblem.category} — {todayProblem.timeComplexity}
                  </p>
                </div>
              </div>
              <Link
                to="/coding"
                className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors flex-shrink-0 shadow-lg shadow-amber-600/20"
              >
                <span>Solve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Action Item 3: System Design Case */}
            <div className="p-4 rounded-2xl border border-slate-800 bg-dark-900/90 hover:border-slate-700 transition-colors flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Network className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      System Design
                    </span>
                    <span className="text-xs text-slate-400">25 min</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate mt-0.5">
                    {todayDesign.title}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {todayDesign.scale}
                  </p>
                </div>
              </div>
              <Link
                to="/system-design"
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors flex-shrink-0 shadow-lg shadow-blue-600/20"
              >
                <span>Design</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Col: Today's Tech Jargon & Philosophy */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span>Jargon of the Day</span>
          </h2>

          <div className="p-5 rounded-2xl border border-slate-800 bg-dark-900/90 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                {todayJargon.category}
              </span>
              <Link to="/jargon" className="text-xs text-slate-400 hover:text-white transition-colors">
                View All Jargon
              </Link>
            </div>
            <h3 className="text-base font-bold text-white">{todayJargon.term}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {todayJargon.plainEnglish}
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              <span className="text-slate-300 font-semibold">Production Example: </span>
              {todayJargon.realWorldExample}
            </div>
          </div>

          {/* Philosophy / Mindset Box */}
          <div className="p-5 rounded-2xl border border-brand-500/20 bg-brand-500/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-300">
              <Sparkles className="w-4 h-4" />
              <span>Engineering Principle</span>
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "AI systems are software and distributed systems first. Understand the failure modes, network boundaries, and state consistency before reaching for the next trendy framework."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
