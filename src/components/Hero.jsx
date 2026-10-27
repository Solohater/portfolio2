'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { personalInfo } from '@/data/portfolioData';

const floatingTags = [
  "Java", "Vert.x", "Angular", "React", "Next.js",
  "PostgreSQL", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js"
];

export default function Hero() {
  const { theme, mounted } = useTheme();
  const profileAreaRef = useRef(null);
  const [radius, setRadius] = useState(132);

  useEffect(() => {
    const compute = () => {
      const area = profileAreaRef.current;
      if (!area) return;
      const areaWidth = area.offsetWidth;
      // Align floating tags directly around the single profile circle
      const computedRadius = Math.min(
        140,
        Math.max(115, (areaWidth * 0.32))
      );
      setRadius(computedRadius);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (profileAreaRef.current) ro.observe(profileAreaRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const currentHeroImage = mounted && theme === 'light' 
    ? '/images/lightimg.png' 
    : '/images/darkimg.png';

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Primary Hero Container Box */}
      <div className="max-w-5xl xl:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 z-10 glass-card rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
        
        {/* Left Intro / Text Content */}
        <div className="flex flex-col gap-4 sm:gap-5 text-center lg:text-left justify-center w-full max-w-lg mx-auto lg:mx-0">

          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 font-mono"
          >
            HELLO, I&apos;M
          </motion.p>

          {/* Large Heading in Serif Playfair Display font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: 'var(--text)' }}
          >
            Yoseph<br />Ayalew
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-display text-xl sm:text-2xl font-bold text-emerald-800 dark:text-emerald-400"
          >
            Software Engineer
          </motion.p>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            I specialize in developing full-stack web applications using Java, Vert.x,
            Angular, React, and PostgreSQL. Currently working at eTech SC, I build and
            maintain software features across the stack — from responsive frontends to
            robust backend APIs.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-1 items-center"
          >
            <a
              href="#company-work"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl font-semibold transition text-sm sm:text-base hover:opacity-90 shadow-md"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
              }}
            >
              View My Work
            </a>
            <a
              href="/cv.pdf"
              download="Yoseph_Ayalew_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl font-semibold transition text-sm sm:text-base hover:opacity-90 border glass-card"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent-text)',
              }}
              title="Download Yoseph Ayalew CV (PDF)"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl font-semibold transition text-sm sm:text-base hover:opacity-90 border glass-card"
              style={{
                borderColor: 'var(--card-border)',
                color: 'var(--text)',
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex gap-4 justify-center lg:justify-start pt-2 items-center"
          >
            <Link href={personalInfo.github} target="_blank" className="transition hover:scale-110" style={{ color: 'var(--text)' }} aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </Link>
            <Link href={personalInfo.linkedin} target="_blank" className="transition hover:scale-110" style={{ color: 'var(--text)' }} aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link href={`mailto:${personalInfo.email}`} className="transition hover:scale-110" style={{ color: 'var(--text)' }} aria-label="Email">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </Link>
            <Link href={personalInfo.gitlab} target="_blank" className="transition hover:scale-110" style={{ color: 'var(--text)' }} aria-label="GitLab">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>
            </Link>
            <Link href={personalInfo.telegram} target="_blank" className="transition hover:scale-110" style={{ color: 'var(--text)' }} aria-label="Telegram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Single Clean Circle Avatar with Floating Skill Badges (NO DOUBLE CIRCLE) */}
        <div
          className="flex items-center justify-center relative w-full h-[360px] sm:h-[400px] lg:h-[430px] max-w-[430px] mx-auto select-none"
          ref={profileAreaRef}
        >
          {/* The Single Profile Circle — zero extra outer rings, zero shadow rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-68 lg:h-68 rounded-full overflow-hidden z-10 border-2"
            style={{
              borderColor: 'var(--card-border-hover)',
            }}
          >
            <Image
              src={currentHeroImage}
              alt="Yoseph Ayalew"
              fill
              className="object-cover object-[50%_0%] scale-100"
              priority
            />
          </motion.div>

          {/* Floating Skill Tags directly around the single circle */}
          {floatingTags.map((tag, i) => {
            const angle = (i / floatingTags.length) * 360 - 90;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            return (
              <motion.div
                key={tag}
                className="absolute top-1/2 left-1/2 pointer-events-none z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <motion.div
                  className="absolute w-0 h-0"
                  animate={{
                    x: [x, x + (i % 2 === 0 ? 3 : -3), x],
                    y: [y, y + (i % 2 === 0 ? -4 : 4), y]
                  }}
                  transition={{
                    duration: 3.5 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <span
                    className="absolute left-0 top-0 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-card whitespace-nowrap transition-all duration-300 pointer-events-auto hover:scale-110 shadow-md border cursor-default"
                    style={{
                      transform: `translate(-50%, -50%)`,
                      borderColor: 'var(--card-border)',
                      color: 'var(--text)',
                      background: 'var(--card-bg)',
                    }}
                  >
                    {tag}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
