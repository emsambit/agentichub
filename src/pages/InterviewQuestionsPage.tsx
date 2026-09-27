import React, { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Layers,
  Filter
} from 'lucide-react';
import rawSections from '../content/advancedAiQuestions.json';

interface QuestionItem {
  id: number;
  question: string;
  answer: string;
}

interface SectionItem {
  title: string;
  questions: QuestionItem[];
}

const sectionsData = rawSections as SectionItem[];

export const InterviewQuestionsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('ALL');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([1, 2, 16, 20, 42, 52, 61, 73, 81, 147, 236, 261]));
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filter sections and questions
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return sectionsData
      .map((sec) => {
        if (selectedSection !== 'ALL' && sec.title !== selectedSection) {
          return null;
        }

        const filteredQuestions = sec.questions.filter((item) => {
          if (!q) return true;
          const matchId = `q${item.id}` === q || `${item.id}` === q;
          const matchQuestion = item.question.toLowerCase().includes(q);
          const matchAnswer = item.answer.toLowerCase().includes(q);
          const matchSec = sec.title.toLowerCase().includes(q);
          return matchId || matchQuestion || matchAnswer || matchSec;
        });

        if (filteredQuestions.length === 0) return null;

        return {
          ...sec,
          questions: filteredQuestions,
        };
      })
      .filter(Boolean) as SectionItem[];
  }, [searchQuery, selectedSection]);

  const totalQuestionsCount = useMemo(() => {
    return filteredData.reduce((acc, s) => acc + s.questions.length, 0);
  }, [filteredData]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    const allIds = new Set<number>();
    filteredData.forEach((s) => s.questions.forEach((q) => allIds.add(q.id)));
    setExpandedIds(allIds);
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  const copyToClipboard = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Simple Markdown-to-HTML parser for code blocks, bold, math, and lists
  const renderFormattedAnswer = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Code block lines or ASCII trees
      if (line.startsWith('```') || line.startsWith('|') || line.startsWith('   +') || line.startsWith('   |') || line.startsWith('    [')) {
        return (
          <div key={idx} className="font-mono text-xs text-cyan-300 dark:text-cyan-300 bg-slate-900/90 dark:bg-slate-950 p-2 my-1 rounded border border-slate-800 overflow-x-auto whitespace-pre">
            {line}
          </div>
        );
      }

      // Headers within answers
      if (line.startsWith('#### ')) {
        return (
          <h5 key={idx} className="text-sm font-bold text-slate-900 dark:text-white mt-3 mb-1">
            {line.replace('#### ', '')}
          </h5>
        );
      }

      // Bullet points
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const content = line.substring(2);
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="text-blue-500 font-bold mt-0.5">•</span>
            <span>{renderInlineMarkdown(content)}</span>
          </div>
        );
      }

      // Numbered lists
      const numMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold text-[11px] min-w-[20px]">{numMatch[1]}.</span>
            <span>{renderInlineMarkdown(numMatch[2])}</span>
          </div>
        );
      }

      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="my-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          {renderInlineMarkdown(line)}
        </p>
      );
    });
  };

  const renderInlineMarkdown = (content: string) => {
    // Simple inline bold formatting
    const parts = content.split(/(\*\*.*?\*\*|`.*?`|\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 font-mono text-[11px]">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('$') && part.endsWith('$')) {
        return (
          <span key={i} className="font-mono text-amber-600 dark:text-amber-300 text-[11px] px-1 bg-amber-500/10 rounded">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="relative rounded-2xl bg-gradient-to-br from-blue-900/40 via-dark-900 to-slate-900/60 p-6 sm:p-8 border border-blue-500/20 backdrop-blur-xl overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master AI Interview & Architecture Knowledge Base</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                261 Advanced Agentic AI Questions & Answers
              </h1>
              <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
                Staff & Principal AI Architect questions covering Agentic Design Patterns, Supervisor & A2A Protocols, Latency Decomposition, Observability, Memory Retentions, Multi-Model Routing, 100k Concurrency Scaling, and 6-Month Production Troubleshooting.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/emsambit/agentichub/blob/main/docs/advanced_ai_questions.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30"
              >
                <span>View Raw Markdown on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80">
              <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Total Questions</p>
              <p className="text-xl font-extrabold text-white mt-0.5">261 Q&As</p>
            </div>
            <div className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80">
              <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Core Sections</p>
              <p className="text-xl font-extrabold text-cyan-400 mt-0.5">29 Domains</p>
            </div>
            <div className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80">
              <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Target Seniority</p>
              <p className="text-xl font-extrabold text-purple-400 mt-0.5">Staff / Principal</p>
            </div>
            <div className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80">
              <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Production Depth</p>
              <p className="text-xl font-extrabold text-emerald-400 mt-0.5">100% Elaborate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search, Filter & Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-dark-900/70 border border-slate-800/80 backdrop-blur-md">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, numbers (e.g. Q52), topics, or keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Section Filter Dropdown */}
        <div className="flex items-center gap-2">
          <div className="relative min-w-[220px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full pl-8 pr-8 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
            >
              <option value="ALL">All 29 Sections (261 Qs)</option>
              {sectionsData.map((sec) => (
                <option key={sec.title} value={sec.title}>
                  {sec.title} ({sec.questions.length})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* Expand / Collapse All */}
          <button
            onClick={handleExpandAll}
            className="px-3 py-2.5 rounded-xl bg-dark-950 hover:bg-dark-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors whitespace-nowrap"
            title="Expand All"
          >
            Expand All
          </button>
          <button
            onClick={handleCollapseAll}
            className="px-3 py-2.5 rounded-xl bg-dark-950 hover:bg-dark-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors whitespace-nowrap"
            title="Collapse All"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Results Header Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
        <span>
          Showing <strong className="text-white">{totalQuestionsCount}</strong> questions across{' '}
          <strong className="text-white">{filteredData.length}</strong> sections
        </span>
        {searchQuery && (
          <span>
            Filtering by: <span className="text-cyan-400">"{searchQuery}"</span>
          </span>
        )}
      </div>

      {/* Sections and Accordion Questions */}
      <div className="space-y-8">
        {filteredData.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-dark-900/50 border border-slate-800/80">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No questions matched your search</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              Try searching for terms like "supervisor", "MCP", "redis", "latency", "eval", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSection('ALL');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredData.map((sec) => (
            <div
              key={sec.title}
              className="rounded-2xl bg-dark-900/60 border border-slate-800/90 overflow-hidden shadow-xl"
            >
              {/* Section Header */}
              <div className="px-6 py-4 bg-dark-950/80 border-b border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                      {sec.title}
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      {sec.questions.length} Questions & Production Answers
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300 font-semibold">
                  {sec.questions.length} Qs
                </span>
              </div>

              {/* Questions List */}
              <div className="divide-y divide-slate-800/50">
                {sec.questions.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  const isCopied = copiedId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="group transition-colors hover:bg-dark-850/40"
                    >
                      {/* Question Summary Bar */}
                      <div
                        onClick={() => toggleExpand(item.id)}
                        className="px-6 py-4 flex items-start justify-between gap-4 cursor-pointer select-none"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold mt-0.5">
                            #{item.id}
                          </span>
                          <h3 className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors leading-snug">
                            {item.question}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(item.id, `Question ${item.id}: ${item.question}\n\nAnswer:\n${item.answer}`);
                            }}
                            className="p-1.5 rounded-lg bg-dark-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                            title="Copy Question & Answer"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <div className="p-1.5 text-slate-400 group-hover:text-white transition-colors">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-blue-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Answer Content */}
                      {isExpanded && (
                        <div className="px-6 pb-5 pt-1 border-t border-slate-800/40 bg-dark-950/40 animate-fadeIn">
                          <div className="p-4 rounded-xl bg-dark-900/90 border border-slate-800/80 shadow-inner">
                            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/60">
                              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                Staff Engineering Architecture Answer
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">
                                Markdown / High-Precision Format
                              </span>
                            </div>

                            <div className="space-y-1">
                              {renderFormattedAnswer(item.answer)}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
