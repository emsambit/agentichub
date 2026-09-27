import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, FileText, Plus, Trash2, ExternalLink, Calendar, Tag } from 'lucide-react';
import { useProgress } from '../stores/useProgressStore';

export const NotesBookmarksPage: React.FC = () => {
  const { progress, addNote, deleteNote, toggleBookmark } = useProgress();

  const [activeTab, setActiveTab] = useState<'bookmarks' | 'notes'>('bookmarks');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('RAG');
  const [newContent, setNewContent] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    addNote({
      title: newTitle.trim(),
      category: newCategory.trim(),
      content: newContent.trim(),
    });

    setNewTitle('');
    setNewContent('');
    setIsAdding(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 animate-fade-in">
      {/* Header */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Personal Knowledge Base
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Your bookmarked curriculum lessons, architectural notes, and study highlights persisted locally.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-2 ${
              activeTab === 'bookmarks'
                ? 'bg-brand-500/20 border-brand-500 text-brand-300'
                : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarks ({progress.bookmarks.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-2 ${
              activeTab === 'notes'
                ? 'bg-brand-500/20 border-brand-500 text-brand-300'
                : 'bg-dark-800 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Notes ({progress.notes.length})</span>
          </button>
        </div>
      </div>

      {/* Bookmarks Tab */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-3">
          {progress.bookmarks.length === 0 ? (
            <div className="text-center py-16 p-6 rounded-2xl border border-slate-800 bg-dark-900/60 text-slate-400 text-sm">
              No bookmarks saved yet. Click the bookmark icon on any lesson or problem to save it here.
            </div>
          ) : (
            progress.bookmarks.map((bm) => (
              <div
                key={bm.id}
                className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-dark-900/80 hover:border-slate-700 transition-colors flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-300">
                      {bm.category}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-500">
                      {bm.type}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white truncate">{bm.title}</h3>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    to={bm.path}
                    className="p-2 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium flex items-center gap-1.5"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => toggleBookmark(bm)}
                    className="p-2 rounded-xl bg-dark-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Notes Tab */}
      {activeTab === 'notes' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white">Your Technical Notes</h2>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg shadow-brand-600/20"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isAdding ? 'Cancel' : 'New Note'}</span>
            </button>
          </div>

          {/* New Note Form */}
          {isAdding && (
            <form
              onSubmit={handleSaveNote}
              className="p-6 rounded-2xl border border-brand-500/40 bg-dark-900/90 space-y-4 shadow-xl"
            >
              <h3 className="text-sm font-bold text-white">Add Architecture Note</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Note Title..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="sm:col-span-2 px-3.5 py-2 rounded-xl bg-dark-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  required
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-brand-500"
                >
                  <option value="Agentic AI">Agentic AI</option>
                  <option value="RAG">RAG</option>
                  <option value="LLMs">LLMs</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="System Design">System Design</option>
                  <option value="Coding">Coding</option>
                </select>
              </div>

              <textarea
                rows={4}
                placeholder="Write your technical observations, formulas, trade-offs..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold"
                >
                  Save Note
                </button>
              </div>
            </form>
          )}

          {/* Notes List */}
          <div className="space-y-4">
            {progress.notes.length === 0 ? (
              <div className="text-center py-16 p-6 rounded-2xl border border-slate-800 bg-dark-900/60 text-slate-400 text-sm">
                No personal notes created yet. Use the "New Note" button above to document system insights.
              </div>
            ) : (
              progress.notes.map((note) => (
                <div
                  key={note.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-dark-900/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-500/10 text-brand-300">
                        {note.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {new Date(note.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      title="Delete Note"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white">{note.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">
                    {note.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
