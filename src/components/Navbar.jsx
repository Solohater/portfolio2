'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, Github, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

const navItems = [
  { label: 'Overview', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Company Work', href: '#company-work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'company-work', 'projects', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all">
      <div className="max-w-5xl mx-auto rounded-full glass-nav px-5 py-2.5 shadow-2xl flex items-center justify-between">
        {/* Brand Logo matching Mockup YA.dev */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="font-bold text-sm tracking-tight text-emerald-800 dark:text-emerald-400">
            YA<span className="text-slate-400 dark:text-slate-500">.dev</span>
          </span>
        </Link>

        {/* Center Pill Menu matching Mockup */}
        <nav className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-800 text-white font-semibold shadow-md'
                    : 'hover:text-emerald-700 dark:hover:text-emerald-300'
                }`}
                style={{
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Download CV + GitHub + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/cv.pdf"
            download="Yoseph_Ayalew_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition hover:opacity-90 shadow-sm"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent-text)',
              backgroundColor: 'var(--bg-subtle)',
            }}
            title="Download Yoseph Ayalew CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            style={{ color: 'var(--text)' }}
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            style={{ color: 'var(--text)' }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-800" />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden"
            style={{ color: 'var(--text)' }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto glass-nav rounded-2xl p-4 shadow-xl flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-emerald-800/10"
              style={{ color: 'var(--text)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download="Yoseph_Ayalew_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between border"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent-text)',
              backgroundColor: 'var(--bg-subtle)',
            }}
          >
            <span>Download CV (PDF)</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
