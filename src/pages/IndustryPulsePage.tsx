import React from 'react';
import { Radio, Rss, ExternalLink } from 'lucide-react';
import { LearningPulse } from '../components/learning/LearningPulse';

export const IndustryPulsePage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-16 animate-fadeIn">
      <header className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-dark-900 via-cyan-950/20 to-dark-850 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>Live Verified Publisher Feeds</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Industry Pulse & Real-Time AI Updates
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Automated hourly sync of official engineering blogs and model release announcements from OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, and Databricks.
        </p>
      </header>

      {/* Live Feed Component */}
      <LearningPulse />
    </div>
  );
};
