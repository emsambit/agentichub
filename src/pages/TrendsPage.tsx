import React from 'react';
import { LearningPulse, LearningResources } from '../components/learning/LearningPulse';
export const TrendsPage: React.FC = () => <div className="space-y-8 max-w-6xl mx-auto pb-16 animate-fade-in">
  <header className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 to-dark-850 p-6 sm:p-8 space-y-3">
    <p className="text-xs font-mono uppercase tracking-widest text-cyan-300">Industry pulse / continuous learning</p>
    <h1 className="text-3xl font-extrabold text-white">Stay current. Build depth.</h1>
    <p className="text-sm text-slate-300 max-w-2xl">Follow new AI research, models and tools from their publishers. Turn an update into a learning goal: read the source, test an idea, and document what works.</p>
  </header>
  <LearningPulse />
  <LearningResources />
</div>;
