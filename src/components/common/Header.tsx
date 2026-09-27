import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, Bell, Sun, Moon, Menu, Sparkles } from 'lucide-react';
import { profileMeta } from '../../content/profile/sambitProfile';
import { useProgress } from '../../stores/useProgressStore';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onToggleMobileNav }) => {
  const { progress, toggleTheme } = useProgress();
  const isDark = progress.theme !== 'light';
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-dark-950/90 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle & Brand Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileNav}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-emerald-400 p-[1px] shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-500 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight font-sans">
                AgenticHub
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block leading-none tracking-wide">
              Learn · Build · Stay Ahead
            </p>
          </div>
        </Link>
      </div>

      {/* Center: Search Bar with Ctrl + K */}
      <div className="flex-1 max-w-xl mx-6 hidden md:block">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800/90 bg-slate-50 dark:bg-dark-900/90 hover:bg-slate-100 dark:hover:bg-dark-850 hover:border-brand-300 dark:hover:border-slate-700 text-xs text-slate-500 dark:text-slate-400 transition-all shadow-inner"
        >
          <span className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            <span>Search topics, learning paths, papers, tools, frameworks...</span>
          </span>
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded shadow-sm">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right: Streak, CTA Button, Notifications, Theme & Profile */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Button */}
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Nexcent Green CTA Button */}
        <Link
          to="/interview-questions"
          className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs transition-all shadow-sm shadow-brand-500/25 group"
        >
          <span>261 AI Q&As</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>

        {/* 14d Streak Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-brand-700 dark:text-brand-300 text-xs font-semibold shadow-sm">
          <Flame className="w-4 h-4 fill-brand-500 text-brand-500 animate-pulse" />
          <span>14d Streak</span>
        </div>

        {/* Notification Bell with Red Badge */}
        <button
          className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-dark-950 animate-pulse" />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all group"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon className="w-4 h-4 text-brand-600 group-hover:-rotate-12 transition-transform" />
          )}
        </button>

        {/* Profile Avatar */}
        <Link
          to="/profile"
          className="relative group p-0.5 rounded-full hover:ring-2 hover:ring-brand-500/50 transition-all ml-1"
          title="Sambit's Profile"
        >
          <img
            src={profileMeta.avatarUrl}
            alt={profileMeta.name}
            className="w-8 h-8 rounded-full object-cover border border-slate-700"
          />
        </Link>
      </div>
    </header>
  );
};
