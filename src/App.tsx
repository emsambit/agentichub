import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { CommandPalette } from './components/search/CommandPalette';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { CareerTimelinePage } from './pages/CareerTimelinePage';
import { CurriculumPage } from './pages/CurriculumPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { LabProjectsPage } from './pages/LabProjectsPage';
import { CodingPracticePage } from './pages/CodingPracticePage';
import { SystemDesignPage } from './pages/SystemDesignPage';
import { JargonDictionaryPage } from './pages/JargonDictionaryPage';
import { ResearchLibraryPage } from './pages/ResearchLibraryPage';
import { NotesBookmarksPage } from './pages/NotesBookmarksPage';
import { SettingsPage } from './pages/SettingsPage';
import { TrendsPage } from './pages/TrendsPage';
import { InterviewQuestionsPage } from './pages/InterviewQuestionsPage';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500/30 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileNav={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <Sidebar
          isMobileOpen={isMobileNavOpen}
          onCloseMobile={() => setIsMobileNavOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 md:pl-64 min-w-0 flex flex-col">
          <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/experience" element={<CareerTimelinePage />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/curriculum/:trackSlug" element={<CurriculumPage />} />
              <Route path="/curriculum/:trackSlug/:lessonId" element={<LessonDetailPage />} />
              <Route path="/interview-questions" element={<InterviewQuestionsPage />} />
              <Route path="/questions" element={<InterviewQuestionsPage />} />
              <Route path="/lab" element={<LabProjectsPage />} />
              <Route path="/coding" element={<CodingPracticePage />} />
              <Route path="/system-design" element={<SystemDesignPage />} />
              <Route path="/jargon" element={<JargonDictionaryPage />} />
              <Route path="/trends" element={<TrendsPage />} />
              <Route path="/research" element={<ResearchLibraryPage />} />
              <Route path="/notes" element={<NotesBookmarksPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Footer */}
          <footer className="border-t border-slate-800/80 bg-dark-950 py-6 px-6 text-center text-xs text-slate-500 font-mono">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
              <p>
                AgenticHub © {new Date().getFullYear()} Sambit Baliarsingh · Designed for Continuous Technical Depth.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <a
                  href="https://github.com/emsambit/agentichub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
                <span>·</span>
                <a
                  href="https://www.linkedin.com/in/sambit-baliarsingh-8322bbb1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};
