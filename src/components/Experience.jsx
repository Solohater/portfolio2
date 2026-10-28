'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '@/data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Globe, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [expandedTimeline, setExpandedTimeline] = useState(false);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
          <Briefcase className="w-4 h-4" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
          Work Experience & Education
        </h2>
        <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          Professional tenure engineering enterprise distributed systems and institutional software workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Timeline */}
        <div className="lg:col-span-8 space-y-6">
          {experienceData.map((exp, index) => {
            const initialPoints = exp.points.slice(0, 2);
            const remainingPoints = exp.points.slice(2);

            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-8 border relative overflow-hidden"
                style={{ borderColor: 'var(--card-border)' }}
              >
                {/* Top Accent Bar */}
                <div className="h-1 w-20 bg-emerald-700 dark:bg-emerald-500 rounded-full mb-6" />

                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-emerald-800 dark:text-emerald-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                      style={{
                        borderColor: 'var(--accent-border)',
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent-text)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Primary Highlights (Always Visible) */}
                <div className="space-y-3 pt-2">
                  {initialPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Progressive Disclosure Toggle */}
                {remainingPoints.length > 0 && (
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setExpandedTimeline(!expandedTimeline)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      <span>{expandedTimeline ? 'Show less' : `Show ${remainingPoints.length} more responsibilities`}</span>
                      {expandedTimeline ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <AnimatePresence>
                      {expandedTimeline && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden space-y-3 pt-3"
                        >
                          {remainingPoints.map((pt, j) => (
                            <div key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Education & Fast Facts */}
        <div className="lg:col-span-4 space-y-5">
          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6 border" style={{ borderColor: 'var(--card-border)' }}>
            <div className="flex items-center gap-2.5 text-emerald-800 dark:text-emerald-400 mb-3">
              <GraduationCap className="w-5 h-5" />
              <h4 className="font-bold text-base" style={{ color: 'var(--text)' }}>Education</h4>
            </div>
            <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>
              BSc in Computer Science
            </p>
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              St. Mary&apos;s University • Graduated 07/2023
            </p>
          </div>

          {/* Location & Languages */}
          <div className="glass-card rounded-2xl p-6 border space-y-4" style={{ borderColor: 'var(--card-border)' }}>
            <div>
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 mb-1.5">
                <MapPin className="w-4 h-4" />
                <h5 className="font-semibold text-xs font-mono uppercase tracking-wider">Location</h5>
              </div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                Addis Ababa, Ethiopia
              </p>
            </div>

            <div className="pt-3 border-t" style={{ borderColor: 'var(--card-border)' }}>
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 mb-1.5">
                <Globe className="w-4 h-4" />
                <h5 className="font-semibold text-xs font-mono uppercase tracking-wider">Languages</h5>
              </div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                English (Professional), Amharic (Native)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
