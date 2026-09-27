import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Linkedin,
  Github,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import {
  profileMeta,
  experiences,
  skillCategories,
  educationList,
  patents
} from '../content/profile/sambitProfile';

export const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto pb-12">
      {/* Hero Section */}
      <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-950 p-6 sm:p-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative flex-shrink-0">
            <img
              src={profileMeta.avatarUrl}
              alt={profileMeta.name}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border-2 border-brand-500/40 shadow-2xl shadow-brand-500/20"
            />
            <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold flex items-center gap-1 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Advisory</span>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-medium mb-2">
                <Sparkles className="w-3 h-3" />
                <span>17+ Years of Engineering Leadership</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {profileMeta.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-brand-300 mt-1">
                {profileMeta.title}
              </p>
              <p className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{profileMeta.location}</span>
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {profileMeta.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={profileMeta.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-brand-600/30"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-700 bg-dark-800 hover:bg-dark-750 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profileMeta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-700 bg-dark-800 hover:bg-dark-750 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <Link
                to="/lab"
                className="px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Featured Engineering Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Career Evolution Visual Flow */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-dark-900/60 space-y-4">
        <h2 className="text-sm uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
          <Layers className="w-4 h-4 text-brand-400" />
          <span>Technical Evolution & Depth Path</span>
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium">
          {[
            'Software Engineering',
            'Distributed Systems',
            'Data Engineering & Lakehouses',
            'Machine Learning & NLP',
            'Generative AI & LLMs',
            'Agentic AI & Orchestration',
            'Enterprise AI Platform Architecture'
          ].map((stage, idx, arr) => (
            <React.Fragment key={stage}>
              <span className={`px-3 py-1.5 rounded-xl border font-mono ${
                idx === arr.length - 1
                  ? 'bg-brand-500/20 border-brand-500 text-brand-300 font-bold shadow-md shadow-brand-500/20'
                  : 'bg-dark-850 border-slate-800 text-slate-300'
              }`}>
                {stage}
              </span>
              {idx < arr.length - 1 && (
                <ChevronRight className="w-4 h-4 text-slate-600 hidden sm:inline-block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Engineering Philosophy */}
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>Core Engineering Principles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {profileMeta.philosophy.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-800/80 bg-dark-850/60 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills (Strict Categorization without fake percentage bars) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-brand-400" />
            <span>Technical Capabilities</span>
          </h2>
          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Core
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Strong
            </span>
            <span className="flex items-center gap-1 text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-indigo-400" /> Working Knowledge
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl border border-slate-800 bg-dark-900/70 space-y-3"
            >
              <h3 className="text-sm font-semibold text-white border-b border-slate-800/80 pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  let badge = "bg-slate-800 text-slate-300 border-slate-700";
                  if (skill.level === "Core") badge = "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
                  if (skill.level === "Strong") badge = "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
                  if (skill.level === "Working Knowledge") badge = "bg-indigo-500/10 text-indigo-300 border-indigo-500/30";

                  return (
                    <span
                      key={skill.name}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${badge}`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Career Experience Timeline (Highlights) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <span>Career Experience</span>
          </h2>
          <Link
            to="/profile/experience"
            className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
          >
            <span>View Complete 17-Year Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {experiences.slice(0, 3).map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 hover:border-slate-700 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-white">{exp.role}</h3>
                  <p className="text-xs font-medium text-brand-300">{exp.company} · {exp.location}</p>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {exp.period} ({exp.duration})
                </div>
              </div>

              <p className="text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
                <span className="font-semibold text-emerald-300">Key Impact: </span>
                {exp.impact}
              </p>

              <div className="space-y-1.5">
                {exp.responsibilities.slice(0, 2).map((r, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-400 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Patents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span>Education</span>
          </h2>
          <div className="space-y-3">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="p-5 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-1"
              >
                <div className="flex items-center justify-between text-xs text-cyan-400 font-mono">
                  <span>{edu.degree}</span>
                  <span className="text-slate-500">{edu.period}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{edu.institution}</h3>
                <p className="text-xs text-slate-300">{edu.field}</p>
                {edu.honors && (
                  <span className="inline-block text-[10px] font-semibold text-emerald-400 mt-1">
                    {edu.honors}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Patents & Innovation */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Patents & Innovation</span>
          </h2>
          <div className="space-y-3">
            {patents.map((pat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-2"
              >
                <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                  <span>{pat.organization}</span>
                  <span className="text-emerald-400 font-semibold">{pat.status}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{pat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pat.description}</p>
              </div>
            ))}

            <div className="p-4 rounded-xl border border-slate-800/80 bg-dark-850/60 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Recognition: </span>
              Walmart Copilot Champion, Six Sigma Green Belt, Individual Excellence Awards, VPD and Spot Awards across career.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
