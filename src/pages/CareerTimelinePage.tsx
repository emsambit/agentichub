import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../content/profile/sambitProfile';

export const CareerTimelinePage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12 animate-fade-in">
      <div className="flex items-center gap-4">
        <Link
          to="/profile"
          className="p-2 rounded-xl border border-slate-800 bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Complete Career Timeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            17+ years of engineering leadership, scalable lakehouses, and production AI platforms.
          </p>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-brand-500 group-hover:scale-125 transition-transform" />

            <div className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 hover:border-slate-700 transition-colors space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-400 mt-0.5">
                    <span>{exp.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1 rounded-lg">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period} ({exp.duration})</span>
                </div>
              </div>

              {/* Impact Callout */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
                <span className="font-bold text-emerald-400">Primary Impact: </span>
                {exp.impact}
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-2">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                  Core Responsibilities:
                </p>
                {exp.responsibilities.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mt-0.5 flex-shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2">
                  Technologies & Frameworks:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
