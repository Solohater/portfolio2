'use client';

import { personalInfo } from '@/data/portfolioData';
import { User, Award, Layers, Code, GraduationCap, MapPin, Globe } from 'lucide-react';

export default function About() {
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
          Engineering Overview & Background
        </h2>
      </div>

      {/* Main About Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border shadow-xl mb-8 space-y-6" style={{ borderColor: 'var(--card-border)' }}>
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
      </div>

      {/* Fast Facts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl glass-card border" style={{ borderColor: 'var(--card-border)' }}>
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <p className="text-xs font-mono font-bold uppercase tracking-wider">Education</p>
          </div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
            BSc Computer Science
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            St. Mary&apos;s University (07/2023)
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card border" style={{ borderColor: 'var(--card-border)' }}>
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 mb-2">
            <MapPin className="w-4 h-4" />
            <p className="text-xs font-mono font-bold uppercase tracking-wider">Location</p>
          </div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
            Addis Ababa, Ethiopia
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Open to Remote & Hybrid Roles
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card border" style={{ borderColor: 'var(--card-border)' }}>
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 mb-2">
            <Globe className="w-4 h-4" />
            <p className="text-xs font-mono font-bold uppercase tracking-wider">Languages</p>
          </div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
            Amharic & English
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Amharic (Native) • English (Fluent)
          </p>
        </div>
      </div>
    </section>
  );
}
