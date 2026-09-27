import React, { useState } from 'react';
import { Code2, CheckCircle2, RotateCcw, Award, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { dsaProblems } from '../content/coding/dsaProblems';
import { useProgress } from '../stores/useProgressStore';
import { CodeViewer } from '../components/learning/CodeViewer';

export const CodingPracticePage: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeProblemId, setActiveProblemId] = useState<string>(dsaProblems[0].id);
  const { progress, updateProblemStatus } = useProgress();

  const filteredProblems = selectedDifficulty === 'all'
    ? dsaProblems
    : dsaProblems.filter((p) => p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());

  const activeProblem = dsaProblems.find((p) => p.id === activeProblemId) || dsaProblems[0];
  const problemStatus = progress.problemStatus[activeProblem.id] || 'not_started';

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
          <Code2 className="w-3.5 h-3.5" />
          <span>Continuous DSA Practice</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Coding Academy & Algorithms
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          High-frequency data structures, graphs, design patterns, and dynamic programming with optimal Python implementations and complexity proofs.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-2">
          {['all', 'Easy', 'Medium', 'Hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors capitalize ${
                selectedDifficulty.toLowerCase() === diff.toLowerCase()
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                  : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Problem Selector & Problem View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Problem List */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-2">
            Problems ({filteredProblems.length})
          </h2>
          <div className="space-y-2">
            {filteredProblems.map((p) => {
              const isSelected = p.id === activeProblem.id;
              const status = progress.problemStatus[p.id] || 'not_started';

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProblemId(p.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-amber-500/50 bg-amber-500/10 shadow-lg shadow-amber-500/10 text-white'
                      : 'border-slate-800 bg-dark-900/80 hover:bg-dark-850 text-slate-300'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded ${
                        p.difficulty === 'Easy'
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : p.difficulty === 'Medium'
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-rose-400 bg-rose-500/10'
                      }`}>
                        {p.difficulty}
                      </span>
                      <span className="text-xs font-semibold truncate text-white">{p.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-1">{p.category}</p>
                  </div>

                  <div className="flex-shrink-0">
                    {status === 'mastered' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : status === 'attempted' ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full border border-slate-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 2 Columns: Active Problem Workspace */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-dark-900/90 space-y-6 shadow-xl">
            {/* Title & Status Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    activeProblem.difficulty === 'Easy'
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                      : activeProblem.difficulty === 'Medium'
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-rose-400 bg-rose-500/10 border border-rose-500/30'
                  }`}>
                    {activeProblem.difficulty}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{activeProblem.category}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeProblem.title}
                </h2>
              </div>

              {/* Status Action Buttons */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  onClick={() => updateProblemStatus(activeProblem.id, 'not_started')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                    problemStatus === 'not_started'
                      ? 'bg-slate-700 border-slate-600 text-white'
                      : 'bg-dark-850 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Unsolved
                </button>
                <button
                  onClick={() => updateProblemStatus(activeProblem.id, 'attempted')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                    problemStatus === 'attempted'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-dark-850 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Attempted
                </button>
                <button
                  onClick={() => updateProblemStatus(activeProblem.id, 'mastered')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1 ${
                    problemStatus === 'mastered'
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : 'bg-dark-850 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mastered</span>
                </button>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="text-sm text-slate-200 leading-relaxed font-sans">
              {activeProblem.description}
            </div>

            {/* Examples */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Examples:
              </h3>
              {activeProblem.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-800 bg-dark-950 font-mono text-xs space-y-1"
                >
                  <div className="text-slate-300"><span className="text-slate-500">Input: </span>{ex.input}</div>
                  <div className="text-slate-300"><span className="text-slate-500">Output: </span>{ex.output}</div>
                  {ex.explanation && (
                    <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-800/80">
                      <span className="text-slate-500">Explanation: </span>{ex.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Constraints:
              </h3>
              <ul className="space-y-1 text-xs text-slate-400 font-mono list-disc pl-4">
                {activeProblem.constraints.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Optimal Python Solution */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Optimal Python Solution:
              </h3>
              <CodeViewer
                title={`${activeProblem.title} — Python Solution`}
                language="python"
                code={activeProblem.pythonSolution}
              />
            </div>

            {/* Complexity Proof */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-dark-850 border border-slate-800 text-xs">
                <span className="font-mono uppercase text-slate-400 font-semibold block mb-0.5">
                  Time Complexity:
                </span>
                <span className="text-emerald-400 font-mono font-medium">
                  {activeProblem.timeComplexity}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-850 border border-slate-800 text-xs">
                <span className="font-mono uppercase text-slate-400 font-semibold block mb-0.5">
                  Space Complexity:
                </span>
                <span className="text-cyan-400 font-mono font-medium">
                  {activeProblem.spaceComplexity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
