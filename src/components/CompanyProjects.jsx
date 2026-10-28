'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ehealthProjects, saccoProjects } from '@/data/portfolioData';
import { Building2, Activity, Wallet, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function CompanyProjects() {
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const allProjects = [
    ...ehealthProjects.map((p) => ({ ...p, domain: 'eHealth' })),
    ...saccoProjects.map((p) => ({ ...p, domain: 'SACCO' })),
  ];

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentCategoryProjects =
    activeTab === 'all'
      ? allProjects
      : activeTab === 'ehealth'
      ? ehealthProjects.map((p) => ({ ...p, domain: 'eHealth' }))
      : saccoProjects.map((p) => ({ ...p, domain: 'SACCO' }));

  const displayedProjects =
    activeTab === 'all' && !showAll
      ? currentCategoryProjects.slice(0, 3)
      : currentCategoryProjects;

  return (
    <section id="company-work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            <Building2 className="w-4 h-4" />
            <span>Enterprise Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            Company Work at eTech SC
          </h2>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            Mission-critical enterprise software engineered and deployed across healthcare networks and financial cooperatives using <strong>Java Vert.x, Angular, and PostgreSQL</strong>.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="inline-flex p-1.5 rounded-xl glass-card border self-start md:self-auto shrink-0" style={{ borderColor: 'var(--card-border)' }}>
          <button
            type="button"
            onClick={() => { setActiveTab('all'); }}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'hover:opacity-80'
            }`}
            style={{ color: activeTab === 'all' ? '#ffffff' : 'var(--text-muted)' }}
          >
            All Work ({allProjects.length})
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('ehealth'); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'ehealth'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'hover:opacity-80'
            }`}
            style={{ color: activeTab === 'ehealth' ? '#ffffff' : 'var(--text-muted)' }}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>eHealth ({ehealthProjects.length})</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('sacco'); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'sacco'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'hover:opacity-80'
            }`}
            style={{ color: activeTab === 'sacco' ? '#ffffff' : 'var(--text-muted)' }}
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>SACCOs ({saccoProjects.length})</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {displayedProjects.map((project) => {
          const isExpanded = !!expandedCards[project.id];

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 hover:shadow-xl group"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <div>
                {/* Header: Logo + Domain Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl p-2 bg-white dark:bg-slate-900 border flex items-center justify-center shrink-0 shadow-sm" style={{ borderColor: 'var(--card-border)' }}>
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={44}
                      height={44}
                      className="object-contain max-h-10 max-w-10"
                    />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                    style={{
                      borderColor: 'var(--accent-border)',
                      background: 'var(--accent-subtle)',
                      color: 'var(--accent-text)',
                    }}
                  >
                    {project.domain}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h3>
                <p className="text-xs font-mono mb-3 text-emerald-800 dark:text-emerald-400 font-medium">
                  {project.tagline}
                </p>

                {/* Concise 1-Line Description */}
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                {/* Progressive Disclosure Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(project.id)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all hover:bg-emerald-800/10 mb-4 cursor-pointer"
                  style={{
                    borderColor: 'var(--card-border)',
                    color: 'var(--accent-text)',
                    background: 'var(--bg-subtle)',
                  }}
                >
                  <span>{isExpanded ? 'Hide technical details' : 'See details & architecture'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Expandable Technical Highlights Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden space-y-2 mb-4 pt-1 border-t"
                      style={{ borderColor: 'var(--card-border)' }}
                    >
                      <span className="text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block pt-2">
                        Production Highlights:
                      </span>
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text)' }}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Tech Tags */}
              <div className="pt-4 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'var(--card-border)' }}>
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
            </motion.div>
          );
        })}
      </div>

      {/* Progressive Disclosure Drawer Toggle when tab is All */}
      {activeTab === 'all' && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent-text)',
              backgroundColor: 'var(--bg-subtle)',
            }}
          >
            <span>
              {showAll ? 'Show top 3 systems ▴' : `View all ${allProjects.length} enterprise systems (+3 more) ▾`}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
