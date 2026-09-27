import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Home,
  Compass,
  BookOpen,
  TrendingUp,
  Database,
  Code2,
  Layers,
  Bot,
  Network,
  BookMarked,
  Radio,
  Box,
  FileText,
  Bookmark,
  BarChart2,
  Settings,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { profileMeta } from '../../content/profile/sambitProfile';

interface SidebarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onCloseMobile }) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
      isActive
        ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30'
        : 'text-slate-400 hover:text-slate-200 hover:bg-dark-850'
    }`;

  const regularLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
      isActive
        ? 'bg-blue-600/15 text-blue-400 font-semibold border border-blue-500/30'
        : 'text-slate-400 hover:text-slate-200 hover:bg-dark-850'
    }`;

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 border-r border-slate-800/80 bg-dark-950/95 backdrop-blur-md flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
          {/* Top Home Link */}
          <div>
            <NavLink to="/" onClick={onCloseMobile} className={linkClass} end>
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>
          </div>

          {/* Group 1: LEARN */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 mb-2 font-bold">
              Learn
            </div>
            <NavLink to="/curriculum" onClick={onCloseMobile} className={regularLinkClass} end>
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Explore Topics</span>
            </NavLink>
            <NavLink to="/learning-paths" onClick={onCloseMobile} className={regularLinkClass}>
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Learning Paths</span>
            </NavLink>
            <NavLink to="/trends" onClick={onCloseMobile} className={regularLinkClass}>
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>AI Trends</span>
            </NavLink>
            <NavLink to="/curriculum/data-eng" onClick={onCloseMobile} className={regularLinkClass}>
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Data & ML</span>
            </NavLink>
            <NavLink to="/coding" onClick={onCloseMobile} className={regularLinkClass}>
              <Code2 className="w-4 h-4 text-green-400" />
              <span>Coding Practice</span>
            </NavLink>
            <NavLink to="/curriculum/rag" onClick={onCloseMobile} className={regularLinkClass}>
              <Layers className="w-4 h-4 text-blue-400" />
              <span>RAG Systems</span>
            </NavLink>
            <NavLink to="/curriculum/agentic-ai" onClick={onCloseMobile} className={regularLinkClass}>
              <Bot className="w-4 h-4 text-purple-400" />
              <span>Agentic AI</span>
            </NavLink>
            <NavLink to="/system-design" onClick={onCloseMobile} className={regularLinkClass}>
              <Network className="w-4 h-4 text-rose-400" />
              <span>System Design</span>
            </NavLink>
            <NavLink to="/interview-questions" onClick={onCloseMobile} className={regularLinkClass}>
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Interview Bank (261 Qs)</span>
            </NavLink>
          </div>

          {/* Group 2: DISCOVER */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 mb-2 font-bold">
              Discover
            </div>
            <NavLink to="/research" onClick={onCloseMobile} className={regularLinkClass}>
              <BookMarked className="w-4 h-4 text-rose-400" />
              <span>Research & Papers</span>
            </NavLink>
            <NavLink to="/pulse" onClick={onCloseMobile} className={regularLinkClass}>
              <Radio className="w-4 h-4 text-cyan-400" />
              <span>Industry Pulse</span>
            </NavLink>
            <NavLink to="/jargon" onClick={onCloseMobile} className={regularLinkClass}>
              <Box className="w-4 h-4 text-purple-400" />
              <span>Tools & Frameworks</span>
            </NavLink>
            <NavLink to="/lab" onClick={onCloseMobile} className={regularLinkClass}>
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Case Studies</span>
            </NavLink>
          </div>

          {/* Group 3: MY SPACE */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 mb-2 font-bold">
              My Space
            </div>
            <NavLink to="/notes" onClick={onCloseMobile} className={regularLinkClass}>
              <Bookmark className="w-4 h-4 text-amber-400" />
              <span>Bookmarks</span>
            </NavLink>
            <NavLink to="/progress" onClick={onCloseMobile} className={regularLinkClass}>
              <BarChart2 className="w-4 h-4 text-blue-400" />
              <span>Progress</span>
            </NavLink>
            <NavLink to="/settings" onClick={onCloseMobile} className={regularLinkClass}>
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Settings</span>
            </NavLink>
          </div>
        </div>

        {/* Sidebar Footer Card: About Sambit */}
        <div className="p-3 border-t border-slate-800/80 bg-dark-900/80">
          <Link
            to="/profile"
            onClick={onCloseMobile}
            className="flex items-center justify-between p-2.5 rounded-xl border border-slate-800/90 bg-dark-850 hover:bg-dark-800 hover:border-slate-700 transition-all group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={profileMeta.avatarUrl}
                alt={profileMeta.name}
                className="w-8 h-8 rounded-full object-cover border border-slate-700 flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                  About Sambit
                </p>
                <p className="text-[10px] text-slate-400 truncate">Creator of AgenticHub</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </Link>
        </div>
      </aside>
    </>
  );
};
