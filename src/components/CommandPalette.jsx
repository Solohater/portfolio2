'use client';

import { useState, useEffect } from 'react';
import { Search, Command, Building2, Code2, Briefcase, FileText, Mail, Sun, Moon, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { personalInfo } from '@/data/portfolioData';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const actions = [
    {
      id: 'company-work',
      label: 'eTech SC Company Work (eHealth & SACCO)',
      icon: Building2,
      action: () => {
        window.location.hash = '#company-work';
        setOpen(false);
      },
    },
    {
      id: 'projects',
      label: 'Personal Full-Stack Projects',
      icon: Code2,
      action: () => {
        window.location.hash = '#projects';
        setOpen(false);
      },
    },
    {
      id: 'experience',
      label: 'Career Experience & Timeline',
      icon: Briefcase,
      action: () => {
        window.location.hash = '#experience';
        setOpen(false);
      },
    },
    {
      id: 'resume',
      label: 'Download Resume (PDF)',
      icon: FileText,
      action: () => {
        window.open('/cv.pdf', '_blank');
        setOpen(false);
      },
    },
    {
      id: 'email',
      label: `Copy Email (${personalInfo.email})`,
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        alert('Email copied to clipboard!');
        setOpen(false);
      },
    },
    {
      id: 'theme',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        setOpen(false);
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Shortcut Pill (Bottom Right) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border shadow-lg text-xs font-mono transition-transform hover:scale-105 cursor-pointer"
        style={{ borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}
        title="Open Command Palette"
      >
        <Command className="w-3.5 h-3.5 text-emerald-700" />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold">⌘K</kbd>
      </button>

      {/* Modal Backdrop & Palette */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-lg glass-card rounded-2xl border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            style={{ borderColor: 'var(--card-border)', background: 'var(--card-bg)' }}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: 'var(--card-border)' }}>
              <Search className="w-4 h-4 text-emerald-700" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                style={{ color: 'var(--text)' }}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="p-2 max-h-72 overflow-y-auto space-y-1">
              {filtered.length === 0 ? (
                <div className="py-6 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                  No matching actions found.
                </div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors hover:bg-emerald-800/10 cursor-pointer group"
                      style={{ color: 'var(--text)' }}
                    >
                      <Icon className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="flex-1 truncate">{item.label}</span>
                      <span className="text-xs opacity-50 font-mono">Jump ↵</span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
