import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GraduationCap, CheckCircle2, Clock, BarChart2, ArrowRight, Bot, Search, Cpu, Database, Network } from 'lucide-react';
import { allTracks } from '../content/tracks/allTracks';
import { useProgress } from '../stores/useProgressStore';

export const CurriculumPage: React.FC = () => {
  const { trackSlug } = useParams<{ trackSlug?: string }>();
  const [selectedTrackId, setSelectedTrackId] = useState<string>(trackSlug || 'all');
  const { progress } = useProgress();

  const activeTrack = allTracks.find((t) => t.slug === trackSlug) || allTracks[0];

  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'agentic-ai':
        return <Bot className="w-5 h-5 text-purple-400" />;
      case 'rag':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'llms':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'data-eng':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'system-design':
        return <Network className="w-5 h-5 text-blue-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    }
  };

  const displayedTracks = trackSlug
    ? allTracks.filter((t) => t.slug === trackSlug)
    : allTracks;

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Curriculum Directory & Track Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {trackSlug ? activeTrack.title : 'Engineering Knowledge Tracks'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {trackSlug
            ? activeTrack.description
            : 'Structured, principal-level engineering tracks designed to build continuous technical depth across AI, LLM systems, streaming platforms, and distributed architectures.'}
        </p>

        {/* Track Switcher Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            to="/curriculum"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              !trackSlug
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm'
                : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Tracks
          </Link>
          {allTracks.map((t) => (
            <Link
              key={t.id}
              to={`/curriculum/${t.slug}`}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                trackSlug === t.slug
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm'
                  : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>{t.title.split(':')[0]}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tracks & Modules List */}
      <div className="space-y-8">
        {displayedTracks.map((track) => (
          <div key={track.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-dark-850 border border-slate-800 shadow-md">
                {getTrackIcon(track.id)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">{track.title}</h2>
                <p className="text-xs text-slate-400">{track.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {track.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-slate-800 bg-dark-900/80 overflow-hidden"
                >
                  <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-dark-850/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{mod.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{mod.description}</p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-dark-800 text-slate-300 border border-slate-700/60 self-start sm:self-auto">
                      {mod.lessons.length} {mod.lessons.length === 1 ? 'Lesson' : 'Lessons'}
                    </span>
                  </div>

                  <div className="divide-y divide-slate-800/60">
                    {mod.lessons.map((lesson) => {
                      const isCompleted = progress.completedLessons.includes(lesson.id);
                      const confidence = progress.lessonConfidence[lesson.id];

                      return (
                        <Link
                          key={lesson.id}
                          to={`/curriculum/${track.slug}/${lesson.id}`}
                          className="p-4 sm:p-5 hover:bg-dark-850/70 transition-colors flex items-center justify-between gap-4 group"
                        >
                          <div className="flex items-start gap-3.5 min-w-0">
                            <div className="mt-1 flex-shrink-0">
                              {isCompleted ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-slate-600 group-hover:border-brand-400 transition-colors" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded ${
                                  lesson.difficulty === 'Principal'
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                    : lesson.difficulty === 'Advanced'
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                }`}>
                                  {lesson.difficulty}
                                </span>
                                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                                  <Clock className="w-3 h-3" />
                                  <span>{lesson.durationMinutes} min</span>
                                </span>
                                {confidence && (
                                  <span className="text-[10px] text-brand-300 font-mono">
                                    ★ {confidence}/5
                                  </span>
                                )}
                              </div>
                              <h4 className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors mt-1">
                                {lesson.title}
                              </h4>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {lesson.overview}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-brand-300 group-hover:translate-x-1 transition-all flex-shrink-0">
                            <span className="hidden sm:inline">Start Lesson</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
