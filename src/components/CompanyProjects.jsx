'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ehealthProjects, saccoProjects } from '@/data/portfolioData';
import { Building2, Activity, Wallet, CheckCircle2, ShieldCheck, Database, Layers } from 'lucide-react';

export default function CompanyProjects() {
  const [activeTab, setActiveTab] = useState('all');

  const allProjects = [
    ...ehealthProjects.map((p) => ({ ...p, domain: 'eHealth' })),
    ...saccoProjects.map((p) => ({ ...p, domain: 'SACCO' })),
  ];

  const displayedProjects =
    activeTab === 'all'
      ? allProjects
      : activeTab === 'ehealth'
      ? ehealthProjects.map((p) => ({ ...p, domain: 'eHealth' }))
      : saccoProjects.map((p) => ({ ...p, domain: 'SACCO' }));

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
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
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
            onClick={() => setActiveTab('ehealth')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
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
            onClick={() => setActiveTab('sacco')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <div>
              {/* Header: Logo + Domain Badge */}
              <div className="flex items-center justify-between gap-3 mb-5">
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

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {project.description}
              </p>

              {/* Bullet Key Highlights */}
              <div className="space-y-2 mb-5">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
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
          </div>
        ))}
      </div>
    </section>
  );
}
