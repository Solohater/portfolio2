'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/portfolioData';
import { Cpu, Terminal, Database, Layout, Wrench, ChevronDown, ChevronUp, Star, Sparkles } from 'lucide-react';

const categoryIcons = {
  Languages: Terminal,
  'Backend & Architecture': Cpu,
  'Frontend Development': Layout,
  'Databases & Storage': Database,
  'Developer Tools & DevOps': Wrench,
};

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (catName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

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
            Core Tech Stack & Tools
          </h2>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            High-demand production technologies applied daily in enterprise microservices, financial platforms, and web apps.
          </p>
        </div>

        {/* Global Toggle for Extended Stack */}
        <button
          type="button"
          onClick={() => setShowAllSkills(!showAllSkills)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 hover:scale-105 self-start md:self-auto cursor-pointer shadow-sm"
          style={{
            borderColor: 'var(--accent)',
            color: 'var(--accent-text)',
            background: 'var(--bg-subtle)',
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>{showAllSkills ? 'Show only core/most-wanted stack' : 'Show full extended stack & secondary tools ▾'}</span>
          {showAllSkills ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Grid: Clean Category Cards with 'Most Wanted' by Default */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.name] || Terminal;
          const coreSkills = cat.skills.filter((s) => s.level === 'Core');
          const secondarySkills = cat.skills.filter((s) => s.level !== 'Core');
          const isCategoryExpanded = showAllSkills || !!expandedCategories[cat.name];

          return (
            <div
              key={cat.name}
              className="glass-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
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
                    {coreSkills.length} Core
                  </span>
                </div>

                {/* 'Most Wanted' Core Skills (Always Visible) */}
                <div className="flex flex-wrap gap-2 pt-1 mb-3">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-transform hover:scale-105 cursor-default bg-emerald-800/15 text-emerald-800 dark:text-emerald-300 border-emerald-800/30"
                    >
                      <span>{skill.name}</span>
                      <Star className="w-2.5 h-2.5 fill-emerald-600 text-emerald-600 opacity-70" />
                    </span>
                  ))}
                </div>

                {/* Secondary & Detailed Stack (Under Progressive Disclosure) */}
                {secondarySkills.length > 0 && (
                  <div>
                    {!showAllSkills && (
                      <button
                        type="button"
                        onClick={() => toggleCategory(cat.name)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer pt-1"
                      >
                        <span>{isCategoryExpanded ? 'Hide additional tools' : `+ ${secondarySkills.length} more (${secondarySkills.map(s => s.name).join(', ')})`}</span>
                        {isCategoryExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    )}

                    <AnimatePresence>
                      {isCategoryExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pt-3 border-t mt-3 space-y-2"
                          style={{ borderColor: 'var(--card-border)' }}
                        >
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                            Additional Tools & Domains:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {secondarySkills.map((skill) => (
                              <span
                                key={skill.name}
                                className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                                style={{
                                  background: 'var(--bg-subtle)',
                                  borderColor: 'var(--card-border)',
                                  color: 'var(--text-muted)',
                                }}
                                title={`${skill.name} • ${skill.tag}`}
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
