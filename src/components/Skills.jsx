'use client';

import { skillCategories } from '@/data/portfolioData';
import { Cpu, Terminal, Database, Layout, Wrench } from 'lucide-react';

const categoryIcons = {
  Languages: Terminal,
  'Backend & Architecture': Cpu,
  'Frontend Development': Layout,
  'Databases & Storage': Database,
  'Developer Tools & DevOps': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
          <Cpu className="w-4 h-4" />
          <span>Technical Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
          Tech Stack & Expertise
        </h2>
        <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          Core languages, frameworks, and tools applied daily in production enterprise environments.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.name] || Terminal;
          return (
            <div
              key={cat.name}
              className="glass-card rounded-2xl p-6 border flex flex-col justify-between"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 text-emerald-800 dark:text-emerald-400">
                  <Icon className="w-5 h-5" />
                  <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl border flex items-center justify-between text-xs transition-colors hover:border-emerald-600/40"
                      style={{
                        background: 'var(--bg-subtle)',
                        borderColor: 'var(--card-border)',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold" style={{ color: 'var(--text)' }}>
                          {skill.name}
                        </span>
                        <span className="text-[11px] opacity-70" style={{ color: 'var(--text-muted)' }}>
                          • {skill.tag}
                        </span>
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                          skill.level === 'Core'
                            ? 'bg-emerald-800/15 text-emerald-800 dark:text-emerald-300 border border-emerald-800/30'
                            : skill.level === 'Proficient'
                            ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            : 'bg-transparent text-slate-500'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
