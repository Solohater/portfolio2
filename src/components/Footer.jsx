'use client';

import { ArrowUp, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t py-12 px-4 sm:px-6 lg:px-8 mt-20" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
            {personalInfo.name} • {personalInfo.role}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Engineered with Next.js, Tailwind CSS, and eye-friendly forest green design tokens.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label="GitLab"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>
          </a>
          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Telegram"
          >
            <Send className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg border glass-card hover:scale-105 transition-all ml-2"
            style={{ borderColor: 'var(--card-border)', color: 'var(--text)' }}
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
