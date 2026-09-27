import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Bookmark,
  Award,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Scale,
  HelpCircle,
  Sparkles,
  Share2
} from 'lucide-react';
import { allTracks } from '../content/tracks/allTracks';
import { useProgress } from '../stores/useProgressStore';
import { CodeViewer } from '../components/learning/CodeViewer';
import { QuizModal } from '../components/learning/QuizModal';

export const LessonDetailPage: React.FC = () => {
  const { trackSlug, lessonId } = useParams<{ trackSlug: string; lessonId: string }>();
  const navigate = useNavigate();
  const {
    progress,
    toggleLessonCompleted,
    setLessonConfidence,
    recordQuizScore,
    toggleBookmark,
    isBookmarked,
  } = useProgress();

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [openQuestionIdx, setOpenQuestionIdx] = useState<number | null>(null);

  const track = allTracks.find((t) => t.slug === trackSlug);
  const allTrackLessons = track?.modules.flatMap((m) => m.lessons) || [];
  const currentIdx = allTrackLessons.findIndex((l) => l.id === lessonId);
  const lesson = allTrackLessons[currentIdx];

  const prevLesson = currentIdx > 0 ? allTrackLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < allTrackLessons.length - 1 ? allTrackLessons[currentIdx + 1] : null;

  if (!lesson || !track) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-xl font-bold text-white">Lesson Not Found</h2>
        <p className="text-sm text-slate-400">The requested curriculum path does not exist.</p>
        <Link
          to="/curriculum"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Curriculum</span>
        </Link>
      </div>
    );
  }

  const isCompleted = progress.completedLessons.includes(lesson.id);
  const bookmarked = isBookmarked(lesson.id);
  const userConfidence = progress.lessonConfidence[lesson.id] || 0;
  const previousQuiz = progress.quizScores[lesson.id];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 animate-fade-in">
      {/* Top Navigation Strip */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to={`/curriculum/${track.slug}`}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{track.title}</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              toggleBookmark({
                id: lesson.id,
                type: 'lesson',
                title: lesson.title,
                path: `/curriculum/${track.slug}/${lesson.id}`,
                category: track.title,
              })
            }
            className={`p-2 rounded-xl border transition-colors ${
              bookmarked
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'border-slate-800 bg-dark-900 text-slate-400 hover:text-white'
            }`}
            title="Bookmark Lesson"
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Lesson Header */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-dark-900 to-dark-950 p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono uppercase font-bold px-2.5 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
            {lesson.difficulty}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{lesson.durationMinutes} Minutes</span>
          </span>
          {previousQuiz && (
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Quiz: {previousQuiz.score}/{previousQuiz.total}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          {lesson.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lesson.overview}
        </p>

        {/* Prerequisites & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
          <div>
            <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-1.5">
              Prerequisites
            </span>
            <div className="flex flex-wrap gap-1.5">
              {lesson.prerequisites.map((p) => (
                <span
                  key={p}
                  className="text-xs px-2 py-0.5 rounded-md bg-dark-850 text-slate-300 border border-slate-700/60 font-mono"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-1.5">
              Learning Objectives
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {lesson.learningObjectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-brand-400 font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Technical Theory */}
      {lesson.resources && <section className="rounded-2xl border border-slate-800 bg-dark-900 p-6 space-y-3">
        <h2 className="font-bold text-white">Official learning resources</h2>
        {lesson.resources.map(resource => <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-cyan-300 hover:underline">{resource.title} ↗</a>)}
      </section>}
      <div className="rounded-2xl border border-slate-800 bg-dark-900/80 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Sparkles className="w-5 h-5 text-brand-400" />
          <span>In-Depth Architecture & Mechanics</span>
        </h2>

        <div className="prose prose-invert max-w-none text-sm text-slate-300 leading-relaxed space-y-4">
          {lesson.theory.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-base font-bold text-white mt-6 mb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} className="space-y-1.5 pl-4 list-disc text-slate-300">
                  {paragraph.split('\n- ').map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* Architecture Diagram */}
        {lesson.architectureDiagram && (
          <div className="space-y-2 mt-6">
            <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
              System Architecture Flow:
            </span>
            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto shadow-inner">
              <pre>{lesson.architectureDiagram}</pre>
            </div>
          </div>
        )}

        {/* Code Snippet */}
        {lesson.codeSnippet && (
          <div className="space-y-2 mt-6">
            <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
              Production Implementation:
            </span>
            <CodeViewer
              title={lesson.codeSnippet.title}
              language={lesson.codeSnippet.language}
              code={lesson.codeSnippet.code}
            />
          </div>
        )}
      </div>

      {/* Tradeoffs & Common Pitfalls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tradeoffs */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span>Architectural Tradeoffs</span>
          </div>
          <div className="space-y-2">
            {lesson.tradeoffs.map((t, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-dark-850 border border-slate-800/80 text-xs text-slate-300">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Common Anti-Patterns</span>
          </div>
          <div className="space-y-2">
            {lesson.commonMistakes.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-dark-850 border border-slate-800/80 text-xs text-slate-300">
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Senior Interview Questions with Reveal Answers */}
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-purple-400" />
          <span>Staff & Principal Interview Questions</span>
        </h2>

        <div className="space-y-3">
          {lesson.interviewQuestions.map((q, idx) => {
            const isOpen = openQuestionIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-dark-850/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenQuestionIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-dark-800/60 transition-colors"
                >
                  <span className="text-sm font-semibold text-white">{q.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 border-t border-slate-800 bg-dark-900/90 text-xs text-slate-300 leading-relaxed font-sans">
                    <span className="font-semibold text-brand-300 block mb-1">Architecture Answer:</span>
                    {q.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion & Action Bar */}
      <div className="sticky bottom-4 z-20 p-4 sm:p-5 rounded-2xl border border-slate-700 bg-dark-900/95 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Confidence Star Rating */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Confidence:</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setLessonConfidence(lesson.id, star)}
                className={`p-1 rounded text-sm transition-colors ${
                  star <= userConfidence ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'
                }`}
                title={`Rate confidence ${star}/5`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {lesson.quiz && lesson.quiz.length > 0 && (
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg shadow-purple-600/20"
            >
              <Award className="w-4 h-4" />
              <span>Take Quiz ({lesson.quiz.length})</span>
            </button>
          )}

          <button
            onClick={() => toggleLessonCompleted(lesson.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-brand-600 hover:bg-brand-500 text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
          </button>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
        {prevLesson ? (
          <Link
            to={`/curriculum/${track.slug}/${prevLesson.id}`}
            className="text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="truncate max-w-[150px] sm:max-w-xs">{prevLesson.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson && (
          <Link
            to={`/curriculum/${track.slug}/${nextLesson.id}`}
            className="text-brand-400 hover:text-brand-300 flex items-center gap-1.5 font-medium ml-auto"
          >
            <span className="truncate max-w-[150px] sm:max-w-xs">{nextLesson.title}</span>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
          </Link>
        )}
      </div>

      {/* Quiz Modal */}
      {lesson.quiz && (
        <QuizModal
          lessonId={lesson.id}
          lessonTitle={lesson.title}
          questions={lesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          onRecordScore={(score, total) => recordQuizScore(lesson.id, score, total)}
        />
      )}
    </div>
  );
};
