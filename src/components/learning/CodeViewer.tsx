import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeViewerProps {
  title?: string;
  language: string;
  code: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ title, language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-dark-900/90 overflow-hidden my-4 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-dark-850 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span className="ml-2 font-mono text-slate-300 font-medium">{title || language}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="uppercase text-[10px] tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-slate-200">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
};
