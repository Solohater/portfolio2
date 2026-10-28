'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { personalProjects } from '@/data/portfolioData';
import { Code2, ExternalLink, Github, Copy, Check, Key, ChevronDown, ChevronUp, Eye, X } from 'lucide-react';

export default function PersonalProjects() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [copiedDemo, setCopiedDemo] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyCredentials = (demoText, id, e) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(demoText);
    setCopiedDemo(id);
    setTimeout(() => setCopiedDemo(null), 2500);
  };

  const displayedProjects = showAll ? personalProjects : personalProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            <Code2 className="w-4 h-4" />
            <span>Independent Full-Stack Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            Personal & Showcase Projects
          </h2>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            Fully deployed production-grade applications with real-world authentication, live APIs, and open-source codebases.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="self-start md:self-auto">
          <span
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border"
            style={{
              borderColor: 'var(--accent-border)',
              background: 'var(--accent-subtle)',
              color: 'var(--accent-text)',
            }}
          >
            Showing {displayedProjects.length} of {personalProjects.length} Projects
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {displayedProjects.map((project) => {
          const isExpanded = !!expandedCards[project.id];

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 hover:shadow-xl group"
              style={{ borderColor: 'var(--card-border)' }}
            >
              {/* Project Device Banner Header */}
              {project.banner && (
                <div
                  className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden cursor-pointer group/img"
                  onClick={() => setActiveLightbox(project.screenshots?.[0] || project.banner)}
                  title="Click to view full screenshot"
                >
                  <Image
                    src={project.banner}
                    alt={`${project.title} device preview`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-3">
                    <span className="text-[11px] text-white/90 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                      <Eye className="w-3 h-3 text-emerald-400" />
                      Preview UI
                    </span>
                    {project.screenshots && project.screenshots.length > 1 && (
                      <span className="text-[10px] text-white/90 font-mono bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded">
                        {project.screenshots.length} Screens
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Featured Badge */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xl font-bold group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors" style={{ color: 'var(--text)' }}>
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border shrink-0"
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

                  {project.tagline && (
                    <p className="text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 mb-3">
                      {project.tagline}
                    </p>
                  )}

                  {/* Concise 1-Line Description */}
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>

                  {/* Primary Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
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
                    <span>{isExpanded ? 'Hide details' : 'See details & demo'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Expandable Content Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden space-y-3 pt-1 mb-4 border-t"
                        style={{ borderColor: 'var(--card-border)' }}
                      >
                        {/* Full Description if expanded */}
                        <p className="text-xs leading-relaxed pt-2" style={{ color: 'var(--text)' }}>
                          {project.description}
                        </p>

                        {/* Demo Login Credentials Pill */}
                        {project.demo && (
                          <div
                            className="p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs font-mono"
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
                              onClick={(e) => copyCredentials(project.demo, project.id, e)}
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

                        {/* Screenshot gallery thumbnails if multiple */}
                        {project.screenshots && project.screenshots.length > 1 && (
                          <div className="pt-2">
                            <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-400 font-semibold block mb-2">
                              Project Screens ({project.screenshots.length}):
                            </span>
                            <div className="flex gap-2 overflow-x-auto pb-1">
                              {project.screenshots.map((s, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => setActiveLightbox(s)}
                                  className="relative w-16 h-28 rounded-lg overflow-hidden border cursor-pointer shrink-0 hover:scale-105 transition-transform"
                                  style={{ borderColor: 'var(--card-border)' }}
                                >
                                  <Image src={s} alt="screenshot" fill className="object-cover" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Permanent Action Row */}
                <div className="pt-3 border-t flex items-center gap-2.5" style={{ borderColor: 'var(--card-border)' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all hover:scale-[1.02]"
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all hover:scale-[1.02] shadow-sm"
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
            </motion.div>
          );
        })}
      </div>

      {/* Progressive Disclosure: View All Projects Button */}
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
            {showAll ? 'Show top 3 featured projects ▴' : `View all ${personalProjects.length} projects (+3 more) ▾`}
          </span>
        </button>
      </div>

      {/* Lightbox Modal for Full Screenshot Viewing */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <div
              className="relative max-w-sm sm:max-w-md w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white p-1 rounded-full bg-black/40 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-[78vh] rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl bg-slate-900">
                <Image
                  src={activeLightbox}
                  alt="Full-resolution screenshot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
