import React, { useState } from 'react';
import { Network, Server, Database, Scale, CheckCircle2, ShieldAlert } from 'lucide-react';
import { systemDesignCases } from '../content/system-design/systemDesignCases';

export const SystemDesignPage: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(systemDesignCases[0].id);
  const activeCase = systemDesignCases.find((c) => c.id === selectedCaseId) || systemDesignCases[0];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
          <Network className="w-3.5 h-3.5" />
          <span>Distributed Architecture Blueprints</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          System Design University
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Production case studies: scale estimation, functional and non-functional requirements, data flows, storage partitioning, and architectural trade-offs.
        </p>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {systemDesignCases.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                c.id === activeCase.id
                  ? 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-sm'
                  : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {c.title.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Case Study Details */}
      <div className="rounded-3xl border border-slate-800 bg-dark-900/90 p-6 sm:p-10 space-y-8 shadow-2xl">
        <div className="space-y-2 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {activeCase.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-dark-800 text-cyan-300 border border-slate-700">
              Scale: {activeCase.scale}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">{activeCase.title}</h2>
          <p className="text-sm text-slate-300 leading-relaxed font-sans pt-1">
            {activeCase.architectureSummary}
          </p>
        </div>

        {/* Requirements: Functional & Non-Functional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl border border-slate-800 bg-dark-850/60 space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Functional Requirements</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCase.requirements.functional.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl border border-slate-800 bg-dark-850/60 space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Non-Functional Requirements (SLAs)</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCase.requirements.nonFunctional.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key System Components */}
        <div className="space-y-3">
          <h3 className="text-sm uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Server className="w-4 h-4 text-brand-400" />
            <span>Key Microservices & Infrastructure</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeCase.keyComponents.map((comp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-800 bg-dark-850/50 text-xs text-slate-300 font-sans"
              >
                {comp}
              </div>
            ))}
          </div>
        </div>

        {/* Storage & Data Flow */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-dark-850/70 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            <span>Storage Engine & Data Flow Execution</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {activeCase.storageAndDataFlow}
          </p>
        </div>

        {/* Architectural Trade-offs */}
        <div className="space-y-3">
          <h3 className="text-sm uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Scale className="w-4 h-4 text-purple-400" />
            <span>Staff Engineering Trade-offs</span>
          </h3>
          <div className="space-y-2">
            {activeCase.tradeoffs.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-800 bg-dark-850/50 text-xs text-slate-300 leading-relaxed"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
