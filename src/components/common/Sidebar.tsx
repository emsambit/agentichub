import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  GraduationCap,
  Code2,
  Network,
  Cpu,
  BookMarked,
  FlaskConical,
  Bookmark,
  Settings,
  Sparkles,
  Bot,
  Search,
  Database,
  Briefcase
} from 'lucide-react';
import { allTracks } from '../../content/tracks/allTracks';
import { profileMeta } from '../../content/profile/sambitProfile';

interface SidebarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onCloseMobile }) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
      isActive
        ? 'bg-brand-600/20 text-brand-300 border border-brand-500/30 shadow-sm'
        : 'text-slate-400 hover:text-slate-200 hover:bg-dark-850'
    }`;

  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'agentic-ai':
        return <Bot className="w-4 h-4 text-purple-400" />;
      case 'rag':
        return <Search className="w-4 h-4 text-cyan-400" />;
      case 'llms':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'data-eng':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'system-design':
        return <Network className="w-4 h-4 text-blue-400" />;
      default:
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
    }
  };

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
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 border-r border-slate-800 bg-dark-950/95 backdrop-blur-md flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {/* Section: Main Dashboard */}
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 mb-2 font-semibold">
              Overview
            </div>
            <div className="space-y-1">
              <NavLink to="/" onClick={onCloseMobile} className={linkClass} end>
                <LayoutDashboard className="w-4 h-4 text-slate-400" />
                <span>Daily OS Dashboard</span>
              </NavLink>
            </div>
          </div>

          {/* Identity 1: About Me */}
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-brand-400/80 px-3 mb-2 font-semibold flex items-center justify-between">
              <span>I. Executive Profile</span>
              <span className="text-[9px] px-1 rounded bg-brand-500/20 text-brand-300">Staff/Principal</span>
            </div>
            <div className="space-y-1">
              <NavLink to="/profile" onClick={onCloseMobile} className={linkClass}>
                <User className="w-4 h-4 text-indigo-400" />
                <span>About Sambit</span>
              </NavLink>
              <NavLink to="/profile/experience" onClick={onCloseMobile} className={linkClass}>
                <Briefcase className="w-4 h-4 text-slate-400" />
                <span>Career Timeline (17+ yrs)</span>
              </NavLink>
            </div>
          </div>

          {/* Identity 2: Learning OS Tracks */}
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/80 px-3 mb-2 font-semibold flex items-center justify-between">
              <span>II. Learning OS</span>
              <span className="text-[9px] px-1 rounded bg-cyan-500/20 text-cyan-300">Tracks</span>
            </div>
            <div className="space-y-1">
              <NavLink to="/curriculum" onClick={onCloseMobile} className={linkClass} end>
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Curriculum Directory</span>
              </NavLink>

              {allTracks.map((track) => (
                <NavLink
                  key={track.id}
                  to={`/curriculum/${track.slug}`}
                  onClick={onCloseMobile}
                  className={linkClass}
                >
                  {getTrackIcon(track.id)}
                  <span className="truncate">{track.title}</span>
                </NavLink>
              ))}

              <div className="pt-2 border-t border-slate-800/60 my-2"></div>

              <NavLink to="/coding" onClick={onCloseMobile} className={linkClass}>
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Coding Academy (DSA)</span>
              </NavLink>
              <NavLink to="/system-design" onClick={onCloseMobile} className={linkClass}>
                <Network className="w-4 h-4 text-blue-400" />
                <span>System Design Blueprints</span>
              </NavLink>
              <NavLink to="/jargon" onClick={onCloseMobile} className={linkClass}>
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Tech Jargon Dictionary</span>
              </NavLink>
              <NavLink to="/research" onClick={onCloseMobile} className={linkClass}>
                <BookMarked className="w-4 h-4 text-rose-400" />
                <span>Landmark AI Papers</span>
              </NavLink>
            </div>
          </div>

          {/* Identity 3: Lab / Featured Works */}
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-emerald-400/80 px-3 mb-2 font-semibold flex items-center justify-between">
              <span>III. Lab & Systems</span>
              <span className="text-[9px] px-1 rounded bg-emerald-500/20 text-emerald-300">Real Scale</span>
            </div>
            <div className="space-y-1">
              <NavLink to="/lab" onClick={onCloseMobile} className={linkClass}>
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>Featured Engineering Works</span>
              </NavLink>
            </div>
          </div>

          {/* Workspace Utilities */}
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 mb-2 font-semibold">
              Personal Tools
            </div>
            <div className="space-y-1">
              <NavLink to="/notes" onClick={onCloseMobile} className={linkClass}>
                <Bookmark className="w-4 h-4 text-slate-400" />
                <span>Notes & Bookmarks</span>
              </NavLink>
              <NavLink to="/settings" onClick={onCloseMobile} className={linkClass}>
                <Settings className="w-4 h-4 text-slate-400" />
                <span>Settings & Data Export</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* User Mini Profile in Sidebar Footer */}
        <div className="p-3 border-t border-slate-800 bg-dark-900/60 flex items-center gap-3">
          <img
            src={profileMeta.avatarUrl}
            alt="Sambit"
            className="w-8 h-8 rounded-full object-cover border border-slate-700"
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-white truncate">{profileMeta.name}</p>
            <p className="text-[10px] text-slate-400 truncate">Staff Engineer @ Walmart</p>
          </div>
        </div>
      </aside>
    </>
  );
};
