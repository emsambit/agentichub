import React, { useState } from 'react';
import { Settings, Download, Upload, RotateCcw, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useProgress } from '../stores/useProgressStore';

export const SettingsPage: React.FC = () => {
  const { progress, exportData, importData, resetAllProgress } = useProgress();
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importData(content);
      if (success) {
        setImportStatus('Successfully imported progress data!');
      } else {
        setImportStatus('Failed to import: Invalid JSON schema.');
      }
      setTimeout(() => setImportStatus(null), 3000);
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-16 animate-fade-in">
      {/* Header */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
          <Settings className="w-3.5 h-3.5" />
          <span>System Settings</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Preferences & Data Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Manage your local learning progress, export offline backups, or import previous progress files.
        </p>
      </div>

      {/* Persistence Info Card */}
      <div className="p-5 rounded-2xl border border-slate-800 bg-dark-900/80 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 space-y-1">
          <span className="font-semibold text-white block">Offline-First Local Persistence:</span>
          <p>
            Your curriculum completions, quiz scores, DSA status, bookmarks, and notes are stored strictly in your browser's LocalStorage. No confidential data is shared or transmitted to external servers.
          </p>
        </div>
      </div>

      {/* Export & Import Section */}
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-dark-900/90 space-y-6">
        <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
          Backup & Portability
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Export */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-dark-850/60 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-brand-400" />
                <span>Export Progress</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Download a complete JSON snapshot of all completed lessons, quiz scores, and bookmarks.
              </p>
            </div>
            <button
              onClick={exportData}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON Backup</span>
            </button>
          </div>

          {/* Import */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-dark-850/60 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>Import Progress</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Restore learning progress from a previously downloaded backup file.
              </p>
            </div>
            <label className="mt-4 px-4 py-2 rounded-xl border border-slate-700 bg-dark-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span>Select Backup File</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {importStatus && (
          <div className="p-3 rounded-xl bg-dark-850 border border-brand-500/40 text-xs text-brand-300 font-mono text-center">
            {importStatus}
          </div>
        )}
      </div>

      {/* Danger Zone: Reset */}
      <div className="p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-red-500/5 space-y-4">
        <h2 className="text-lg font-bold text-red-400 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <span>Reset Learning Progress</span>
        </h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Clear all saved progress, quiz results, and problem statuses and restore the initial curriculum state.
        </p>

        {!showConfirmReset ? (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="px-4 py-2 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-semibold transition-colors"
          >
            Reset All Data...
          </button>
        ) : (
          <div className="p-4 rounded-xl bg-dark-900 border border-red-500/40 space-y-3">
            <p className="text-xs text-red-300 font-semibold">
              Are you sure? This action cannot be undone.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  resetAllProgress();
                  setShowConfirmReset(false);
                }}
                className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-4 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
