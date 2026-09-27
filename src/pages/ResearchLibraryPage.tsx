import React from 'react';
import { BookMarked, ExternalLink, Calendar, Users, Award, Sparkles } from 'lucide-react';
import { landmarkPapers } from '../content/papers/researchPapers';

export const ResearchLibraryPage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 animate-fade-in">
      {/* Header */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Primary Literature</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Landmark AI Research Papers
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          The seminal papers that defined modern Transformers, Parameter-Efficient Fine-Tuning (LoRA), ReAct Agent Loops, and Self-Reflective RAG.
        </p>
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {landmarkPapers.map((paper) => (
          <div
            key={paper.id}
            className="p-6 sm:p-7 rounded-3xl border border-slate-800 bg-dark-900/90 hover:border-slate-700 transition-colors space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  {paper.category}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{paper.year}</span>
                </span>
              </div>

              <h2 className="text-lg font-bold text-white leading-snug">
                {paper.title}
              </h2>

              <p className="text-xs text-brand-300 flex items-center gap-1.5 font-medium">
                <Users className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>{paper.authors}</span>
              </p>

              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                {paper.summary}
              </p>

              {/* Key Contributions */}
              <div className="p-4 rounded-xl bg-dark-850/80 border border-slate-800/80 space-y-1.5">
                <span className="text-[11px] font-mono uppercase font-semibold text-slate-300 block mb-1">
                  Core Innovations:
                </span>
                {paper.keyContributions.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters Callout & arXiv link */}
            <div className="pt-3 border-t border-slate-800 space-y-3">
              <p className="text-xs text-amber-300 font-sans italic">
                <span className="font-semibold text-amber-400 not-italic">Why it matters: </span>
                {paper.whyItMatters}
              </p>

              {paper.arxivUrl && (
                <a
                  href={paper.arxivUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>Read on arXiv</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
