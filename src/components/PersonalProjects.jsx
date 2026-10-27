'use client';

import { useState } from 'react';
import { personalProjects } from '@/data/portfolioData';
import { Code2, ExternalLink, Github, Copy, Check, Key } from 'lucide-react';

export default function PersonalProjects() {
  const [copiedDemo, setCopiedDemo] = useState(null);

  const copyCredentials = (demoText, id) => {
    navigator.clipboard.writeText(demoText);
    setCopiedDemo(id);
    setTimeout(() => setCopiedDemo(null), 2500);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
          <Code2 className="w-4 h-4" />
          <span>Independent Full-Stack Platforms</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
          Personal & Showcase Projects
        </h2>
        <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          Fully deployed web applications with live demos, open-source repositories, and preconfigured credentials for instant evaluation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <div>
              {/* Title & Featured Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h3>
                {project.featured && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border"
                    style={{
                      borderColor: 'var(--accent-border)',
                      background: 'var(--accent-subtle)',
                      color: 'var(--accent-text)',
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {project.description}
              </p>

              {/* Demo Login Pill / One-Click Copy */}
              {project.demo && (
                <div
                  className="mb-4 p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs font-mono"
                  style={{
                    background: 'var(--bg-subtle)',
                    borderColor: 'var(--card-border)',
                  }}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <Key className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">
                      <span className="font-semibold text-emerald-800 dark:text-emerald-400">Demo:</span> {project.demo}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyCredentials(project.demo, project.id)}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                    title="Copy demo login credentials"
                    aria-label="Copy demo credentials"
                  >
                    {copiedDemo === project.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-60" />
                    )}
                  </button>
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium"
                    style={{
                      background: 'var(--tag-bg)',
                      color: 'var(--tag-text)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t flex items-center gap-2.5" style={{ borderColor: 'var(--card-border)' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all hover:scale-[1.02]"
                  style={{
                    borderColor: 'var(--card-border)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text)',
                  }}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                }}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
