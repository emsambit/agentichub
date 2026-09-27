import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Code2, Network, BookMarked, Cpu, Sparkles, X } from 'lucide-react';
import { allTracks } from '../../content/tracks/allTracks';
import { dsaProblems } from '../../content/coding/dsaProblems';
import { systemDesignCases } from '../../content/system-design/systemDesignCases';
import { techJargonTerms } from '../../content/jargon/techJargon';
import { landmarkPapers } from '../../content/papers/researchPapers';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  type: 'lesson' | 'problem' | 'case' | 'jargon' | 'paper' | 'profile';
  path: string;
  subtitle: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Build searchable index
  const allItems: SearchItem[] = [
    // Lessons
    ...allTracks.flatMap((t) =>
      t.modules.flatMap((m) =>
        m.lessons.map((l) => ({
          id: l.id,
          title: l.title,
          category: t.title,
          type: 'lesson' as const,
          path: `/curriculum/${t.slug}/${l.id}`,
          subtitle: `${l.difficulty} · ${l.durationMinutes} min · ${l.overview.slice(0, 70)}...`,
        }))
      )
    ),
    // Coding problems
    ...dsaProblems.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      type: 'problem' as const,
      path: `/coding`,
      subtitle: `${p.difficulty} · ${p.timeComplexity}`,
    })),
    // System design cases
    ...systemDesignCases.map((c) => ({
      id: c.id,
      title: c.title,
      category: c.category,
      type: 'case' as const,
      path: `/system-design`,
      subtitle: c.scale,
    })),
    // Jargon terms
    ...techJargonTerms.map((j) => ({
      id: j.id,
      title: j.term,
      category: j.category,
      type: 'jargon' as const,
      path: `/jargon`,
      subtitle: j.plainEnglish.slice(0, 80) + '...',
    })),
    // Research papers
    ...landmarkPapers.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      type: 'paper' as const,
      path: `/research`,
      subtitle: `${p.authors} (${p.year})`,
    })),
    // Profile
    {
      id: 'profile-main',
      title: 'About Sambit Baliarsingh',
      category: 'Professional Profile',
      type: 'profile' as const,
      path: '/profile',
      subtitle: 'Staff Engineer at Walmart, Principal at Twilio, 17+ yrs distributed systems & AI',
    },
    {
      id: 'lab-projects',
      title: 'Lab & Featured Engineering Works',
      category: 'Production Projects',
      type: 'profile' as const,
      path: '/lab',
      subtitle: 'SparkPlug RCA Agent, Messaging NLP, Apache Iceberg Lakehouse, Agentic RAG',
    }
  ];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 8); // show initial top picks

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          navigate(filteredItems[selectedIndex].path);
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchItem['type']) => {
    switch (type) {
      case 'lesson':
        return <BookOpen className="w-4 h-4 text-purple-400" />;
      case 'problem':
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'case':
        return <Network className="w-4 h-4 text-blue-400" />;
      case 'jargon':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'paper':
        return <BookMarked className="w-4 h-4 text-rose-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-dark-900 shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-dark-850">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search lessons, DSA problems, system design, jargon, papers..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-500 hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-3 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No results found for "<span className="text-slate-300">{query}</span>"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id + idx}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-brand-600/20 border border-brand-500/40 text-white' : 'hover:bg-dark-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-dark-800 flex-shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate text-white">{item.title}</span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 flex-shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono flex-shrink-0 ml-4 hidden sm:block">
                    {isSelected ? 'Press ↵ to open' : item.type}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help bar */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-dark-950 text-[11px] text-slate-500 flex items-center justify-between font-mono">
          <div className="flex items-center gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-slate-400">AgenticHub Command Palette</span>
        </div>
      </div>
    </div>
  );
};
