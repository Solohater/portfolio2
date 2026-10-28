'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import { User, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [showFullBio, setShowFullBio] = useState(false);

  const stats = [
    { value: '1/2+', label: 'Year Experience', href: '#experience' },
    { value: '12+', label: 'Projects Shipped', href: '#company-work' },
    { value: '15+', label: 'Technologies', href: '#skills' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
          Engineering Overview & Philosophy
        </h2>
      </div>

      {/* Main About Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6" style={{ borderColor: 'var(--card-border)' }}>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
          Full-Stack Software Engineer with professional production experience designing, building, and maintaining performant web applications using <strong>Java, Vert.x, Angular, React,</strong> and <strong>PostgreSQL</strong>. Passionate about clean microservice architecture, robust backend APIs, and building responsive, accessible user interfaces that deliver real-world institutional impact.
        </p>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              className="flex flex-col items-center justify-center p-4 rounded-2xl glass-card border transition-all duration-200 hover:-translate-y-1 hover:border-emerald-600/40 text-center group"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <span className="text-2xl sm:text-3xl font-bold font-display text-emerald-800 dark:text-emerald-400 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                {stat.label} ↓
              </span>
            </a>
          ))}
        </div>

        {/* Progressive Disclosure Toggle */}
        <div className="pt-2 text-center sm:text-left">
          <button
            type="button"
            onClick={() => setShowFullBio(!showFullBio)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{showFullBio ? 'Hide engineering background' : 'Read full background & engineering principles ↓'}</span>
            {showFullBio ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Collapsible Deeper Details */}
        <AnimatePresence>
          {showFullBio && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden pt-4 border-t space-y-4 text-sm leading-relaxed"
              style={{ borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--card-border)', background: 'var(--bg-subtle)' }}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
                    Backend & Reliability
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>
                    Specializing in reactive event-driven patterns with Java Vert.x, normalized PostgreSQL schemas, and strict transactional safety for clinical healthcare and cooperative financial ledgers.
                  </p>
                </div>

                <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--card-border)' }}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
                    Frontend Craftsmanship
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>
                    Committed to accessible, WCAG-compliant UI development across Angular, React, and Next.js, prioritizing fast paint times, intuitive keyboard navigation, and responsive ergonomics.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
