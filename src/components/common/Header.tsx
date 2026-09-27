import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, Bell, Sun, Menu, Sparkles } from 'lucide-react';
import { profileMeta } from '../../content/profile/sambitProfile';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onToggleMobileNav }) => {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-slate-800/80 bg-dark-950/90 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle & Brand Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileNav}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-tight font-sans">
                AgenticHub
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block leading-none tracking-wide">
              Learn · Build · Stay Ahead
            </p>
          </div>
        </Link>
      </div>

      {/* Center: Search Bar with Ctrl + K */}
      <div className="flex-1 max-w-xl mx-6 hidden md:block">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-4 py-2 rounded-xl border border-slate-800/90 bg-dark-900/90 hover:bg-dark-850 hover:border-slate-700 text-xs text-slate-400 transition-all shadow-inner"
        >
          <span className="flex items-center gap-2.5 text-slate-400">
            <Search className="w-4 h-4 text-slate-500" />
            <span>Search topics, learning paths, papers, tools, frameworks...</span>
          </span>
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700/80 rounded shadow-sm">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right: Streak, Notifications, Theme & Profile */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Button */}
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* 14d Streak Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold shadow-sm">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>14d Streak</span>
        </div>

        {/* Notification Bell with Red Badge */}
        <button
          className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-dark-950 animate-pulse" />
        </button>

        {/* Theme Toggle Button */}
        <button
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Toggle Theme"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* Profile Avatar */}
        <Link
          to="/profile"
          className="relative group p-0.5 rounded-full hover:ring-2 hover:ring-blue-500/50 transition-all ml-1"
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
