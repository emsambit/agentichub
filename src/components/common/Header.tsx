import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, Github, Linkedin, FileText, Menu, Sparkles } from 'lucide-react';
import { useProgress } from '../../stores/useProgressStore';
import { profileMeta } from '../../content/profile/sambitProfile';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onToggleMobileNav }) => {
  const { progress } = useProgress();

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-slate-800 bg-dark-950/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileNav}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-base tracking-tight">AgenticHub</span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block leading-none">
              Sambit's AI Academy & OS
            </p>
          </div>
        </Link>
      </div>

      {/* Middle: Search Trigger Button */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-xl border border-slate-800 bg-dark-900 hover:bg-dark-850 hover:border-slate-700 text-xs text-slate-400 transition-all shadow-inner"
        >
          <span className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span>Search courses, algorithms, papers, jargon...</span>
          </span>
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded shadow-sm">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right: Streak & Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search icon for mobile */}
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>{progress.learningStreak}d Streak</span>
        </div>

        {/* Resume Button */}
        <a
          href={profileMeta.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-dark-900 hover:bg-dark-850 text-xs font-medium text-slate-300 hover:text-white transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-slate-400" />
          <span>Resume</span>
        </a>

        {/* LinkedIn */}
        <a
          href={profileMeta.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        {/* GitHub */}
        <a
          href={profileMeta.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="GitHub Repository"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};
