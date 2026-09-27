import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Award,
  CheckCircle2,
  BookOpen,
  Code2,
  Bookmark,
  Calendar,
  ArrowRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { useProgress } from '../stores/useProgressStore';
import { allTracks } from '../content/tracks/allTracks';

export const ProgressDashboardPage: React.FC = () => {
  const { progress } = useProgress();

  const totalPossibleLessons = allTracks.reduce((acc, t) => acc + t.modules.reduce((mAcc, m) => mAcc + m.lessons.length, 0), 0);
  const completedLessonsCount = progress.completedLessons.length;
  const overallPercentage = Math.round((completedLessonsCount / (totalPossibleLessons || 1)) * 100);

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/60 via-dark-900 to-dark-950 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Learning OS Progress & Telemetry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Your Learning Journey
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Real-time tracking of completed engineering lessons, algorithmic challenges, bookmarked architectural patterns, and continuous study streaks.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">{progress.learningStreak} Days</p>
              <p className="text-[11px] text-slate-400 font-mono">Learning Streak</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">{completedLessonsCount}</p>
              <p className="text-[11px] text-slate-400 font-mono">Lessons Completed</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">
                {Object.values(progress.problemStatus || {}).filter((s) => s === 'mastered').length}
              </p>
              <p className="text-[11px] text-slate-400 font-mono">Problems Mastered</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">{progress.bookmarks.length}</p>
              <p className="text-[11px] text-slate-400 font-mono">Bookmarks Saved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress by Track */}
      <div className="rounded-2xl border border-slate-800 bg-dark-900/70 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Curriculum Track Progress</span>
          </h2>
          <span className="text-xs font-mono text-cyan-400 font-bold">{overallPercentage}% Overall</span>
        </div>

        <div className="space-y-4">
          {allTracks.map((track) => {
            const total = track.modules.reduce((acc, m) => acc + m.lessons.length, 0);
            const done = track.modules.reduce(
              (acc, m) => acc + m.lessons.filter((l) => progress.completedLessons.includes(l.id)).length,
              0
            );
            const pct = Math.round((done / (total || 1)) * 100);

            return (
              <div key={track.id} className="p-4 rounded-xl bg-dark-950/70 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{track.title}</span>
                    <span className="text-slate-500 font-mono">({done}/{total} Lessons)</span>
                  </div>
                  <span className="font-mono text-slate-300 font-bold">{pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/curriculum"
          className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
        >
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
              Continue Learning
            </h3>
            <p className="text-xs text-slate-400 mt-1">Browse topics and resume your next curriculum lesson.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/notes"
          className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
        >
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
              View Bookmarks & Notes
            </h3>
            <p className="text-xs text-slate-400 mt-1">Access saved lesson highlights and personal study notes.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
};
