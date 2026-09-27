import React, { useState } from 'react';
import {
  FlaskConical,
  Scale,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  Bot
} from 'lucide-react';
import { featuredProjects } from '../content/profile/sambitProfile';
import { FeaturedProject } from '../types';

export const LabProjectsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(featuredProjects[0].id);
  const activeProject = featuredProjects.find((p) => p.id === selectedId) || featuredProjects[0];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 animate-fade-in">
      {/* Top Banner */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>III. Featured Engineering Lab & Works</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Production Systems & Architecture Case Studies
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Real production systems built and scaled across Walmart, Twilio, and enterprise data ecosystems. High-throughput distributed platforms, autonomous agents, and lakehouses.
        </p>
      </div>

      {/* Project Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {featuredProjects.map((p) => {
          const isSelected = p.id === selectedId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-emerald-500/50 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                  : 'border-slate-800 bg-dark-900/80 hover:bg-dark-850 text-slate-400 hover:text-white'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-dark-800 text-emerald-300 mb-2 inline-block">
                  {p.category}
                </span>
                <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {p.title.split(':')[0]}
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">{p.tagline}</p>
            </button>
          );
        })}
      </div>

      {/* Active Project Full Deep-Dive */}
      <div className="rounded-3xl border border-slate-800 bg-dark-900/90 p-6 sm:p-10 space-y-8 shadow-2xl">
        {/* Title Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {activeProject.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700">
              Role: {activeProject.myRole}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-dark-800 text-cyan-300 border border-cyan-800/40">
              Scale: {activeProject.scale}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {activeProject.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {activeProject.tagline}
          </p>
        </div>

        {/* Impact Callout */}
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 leading-relaxed font-sans shadow-inner">
          <span className="font-bold text-emerald-400 block mb-1">Measured Production Impact:</span>
          {activeProject.impact}
        </div>

        {/* Problem vs Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Problem */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-dark-850/60 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span>The Engineering Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.problem}
            </p>
          </div>

          {/* The Architecture */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-dark-850/60 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-400">
              <Layers className="w-4 h-4" />
              <span>Architecture & Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.architectureDescription}
            </p>
          </div>
        </div>

        {/* Key Design Decisions */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-brand-400" />
            <span>Key Architectural Decisions</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeProject.keyDecisions.map((dec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-800 bg-dark-850/50 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{dec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
            Technology Stack & Tools:
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeProject.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-dark-800 text-slate-200 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-3">
          <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            <span>Staff Engineering Lessons Learned</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {activeProject.lessonsLearned.map((l, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
