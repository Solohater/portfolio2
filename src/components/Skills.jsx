'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/portfolioData';
import { Cpu, Terminal, Database, Layout, Wrench, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const categoryIcons = {
  Languages: Terminal,
  'Backend & Architecture': Cpu,
  'Frontend Development': Layout,
  'Databases & Storage': Database,
  'Developer Tools & DevOps': Wrench,
};

export default function Skills() {
  const [showDetailedProficiency, setShowDetailedProficiency] = useState(false);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            Tech Stack & Core Technologies
          </h2>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            Production-tested stack applied daily building high-concurrency microservices and responsive web platforms.
          </p>
        </div>

        {/* Toggle details button */}
        <button
          type="button"
          onClick={() => setShowDetailedProficiency(!showDetailedProficiency)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all hover:bg-emerald-800/10 self-start md:self-auto cursor-pointer"
          style={{
            borderColor: 'var(--card-border)',
            color: 'var(--accent-text)',
            background: 'var(--bg-subtle)',
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>{showDetailedProficiency ? 'Hide detailed tags' : 'Show domain tags & levels'}</span>
          {showDetailedProficiency ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Grid: Clean Category Cards with Compact Chips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.name] || Terminal;
          return (
            <div
              key={cat.name}
              className="glass-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-200 hover:border-emerald-600/30 shadow-sm"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400">
                    <Icon className="w-4 h-4" />
                    <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-800/10">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Streamlined Clean Skill Chips */}
                {!showDetailedProficiency ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => {
                      const isCore = skill.level === 'Core';
                      return (
                        <span
                          key={skill.name}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-transform hover:scale-105 cursor-default ${
                            isCore
                              ? 'bg-emerald-800/15 text-emerald-800 dark:text-emerald-300 border-emerald-800/30'
                              : 'bg-black/5 dark:bg-white/5 border-transparent'
                          }`}
                          style={{
                            color: isCore ? undefined : 'var(--text)',
                          }}
                        >
                          {skill.name}
                          {isCore && <span className="ml-1 text-[10px] opacity-75 font-mono">★</span>}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  /* Expanded Detailed View (On Demand) */
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 pt-1"
                    >
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2 rounded-xl border flex items-center justify-between text-xs"
                          style={{
                            background: 'var(--bg-subtle)',
                            borderColor: 'var(--card-border)',
                          }}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="font-semibold truncate" style={{ color: 'var(--text)' }}>
                              {skill.name}
                            </span>
                            <span className="text-[10px] opacity-70 truncate" style={{ color: 'var(--text-muted)' }}>
                              • {skill.tag}
                            </span>
                          </div>

                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider shrink-0 ${
                              skill.level === 'Core'
                                ? 'bg-emerald-800/20 text-emerald-800 dark:text-emerald-300 border border-emerald-800/30'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
