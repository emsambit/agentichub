import React, { useState } from 'react';
import { Cpu, Search, Sparkles, HelpCircle } from 'lucide-react';
import { techJargonTerms } from '../content/jargon/techJargon';

export const JargonDictionaryPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(techJargonTerms.map((t) => t.category)))];

  const filtered = techJargonTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.plainEnglish.toLowerCase().includes(search.toLowerCase()) ||
      term.deepDive.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 animate-fade-in">
      {/* Header */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
          <Cpu className="w-3.5 h-3.5" />
          <span>Engineering Precision</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Tech Jargon Dictionary
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          From KV Caches and Speculative Decoding to Idempotency and Data Skew: plain English intuition paired with deep mathematical and production realities.
        </p>

        {/* Search and Category Filters */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search concepts, algorithms, mechanics..."
              className="w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors capitalize ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 hover:border-slate-700 transition-colors space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {item.category}
                </span>
              </div>
              <h2 className="text-base font-bold text-white">{item.term}</h2>

              {/* Plain English */}
              <div className="p-3.5 rounded-xl bg-dark-850 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <span className="text-emerald-400 font-semibold text-[11px] uppercase font-mono block">
                  Plain English Intuition:
                </span>
                <p className="leading-relaxed">{item.plainEnglish}</p>
              </div>

              {/* Deep Dive */}
              <div className="text-xs text-slate-400 leading-relaxed font-sans space-y-1">
                <span className="text-slate-200 font-semibold text-[11px] uppercase font-mono block">
                  Technical Architecture:
                </span>
                <p>{item.deepDive}</p>
              </div>
            </div>

            {/* Real World Example */}
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              <span className="text-brand-300 font-semibold">Production Example: </span>
              {item.realWorldExample}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
