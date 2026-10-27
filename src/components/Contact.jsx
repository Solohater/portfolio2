'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { Mail, Phone, Copy, Check, Send, CheckCircle2, AlertCircle, Github, Linkedin, MessageSquare, Download } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xoevqgye', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-3 mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
          <MessageSquare className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
          Let&apos;s Build Together
        </h2>
        <p className="text-base max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          Interested in discussing full-stack engineering opportunities, enterprise architecture, or potential collaborations? Send a direct note below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Copy Email */}
        <div className="md:col-span-5 space-y-4">
          <div className="glass-card rounded-2xl p-6 border space-y-4" style={{ borderColor: 'var(--card-border)' }}>
            <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>
              Direct Contact
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I monitor inquiries actively and typically reply within 24 hours.
            </p>

            {/* Email Box */}
            <div
              className="p-3.5 rounded-xl border flex items-center justify-between gap-3"
              style={{
                background: 'var(--bg-subtle)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-mono truncate font-medium hover:underline" style={{ color: 'var(--text)' }}>
                  {personalInfo.email}
                </a>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 shrink-0 transition-all hover:scale-105 cursor-pointer"
                style={{
                  borderColor: 'var(--card-border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text)',
                }}
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Box */}
            <div
              className="p-3.5 rounded-xl border flex items-center justify-between gap-3"
              style={{
                background: 'var(--bg-subtle)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-mono truncate font-medium hover:underline" style={{ color: 'var(--text)' }}>
                  {personalInfo.phoneDisplay}
                </a>
              </div>

              <button
                type="button"
                onClick={copyPhone}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 shrink-0 transition-all hover:scale-105 cursor-pointer"
                style={{
                  borderColor: 'var(--card-border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text)',
                }}
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Download CV Action */}
            <a
              href="/cv.pdf"
              download="Yoseph_Ayalew_CV.pdf"
              className="w-full p-3 rounded-xl border flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition hover:opacity-90 shadow-sm"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent-text)',
                background: 'var(--bg-subtle)',
              }}
              title="Download Yoseph Ayalew CV (PDF)"
            >
              <Download className="w-4 h-4" />
              <span>Download Yoseph Ayalew CV (PDF)</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="glass-card rounded-2xl p-6 border space-y-3" style={{ borderColor: 'var(--card-border)' }}>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              Online Profiles & Messaging
            </h4>
            <div className="flex flex-col gap-2 text-sm font-medium">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                style={{ color: 'var(--text)' }}
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-emerald-700" />
                  <span>GitHub (@Solohater)</span>
                </div>
                <span className="text-xs opacity-50">↗</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                style={{ color: 'var(--text)' }}
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-emerald-700" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-xs opacity-50">↗</span>
              </a>

              <a
                href={personalInfo.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                style={{ color: 'var(--text)' }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-600 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>
                  <span>GitLab (@yosephh)</span>
                </div>
                <span className="text-xs opacity-50">↗</span>
              </a>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                style={{ color: 'var(--text)' }}
              >
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-emerald-700" />
                  <span>Telegram ({personalInfo.telegramHandle})</span>
                </div>
                <span className="text-xs opacity-50">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Formspree Interactive Form */}
        <div className="md:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border" style={{ borderColor: 'var(--card-border)' }}>
            {formStatus === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-emerald-800/15 text-emerald-700 dark:text-emerald-400 border border-emerald-800/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                  Message Delivered!
                </h3>
                <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
                  Thank you for reaching out. Your note has landed safely in my inbox, and I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:scale-105 cursor-pointer"
                  style={{
                    borderColor: 'var(--card-border)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text)',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    disabled={formStatus === 'submitting'}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    disabled={formStatus === 'submitting'}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
                    disabled={formStatus === 'submitting'}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                  style={{
                    background: 'var(--accent)',
                    color: '#ffffff',
                  }}
                >
                  {formStatus === 'submitting' ? (
                    <span>Delivering note...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {formStatus === 'error' && (
                  <div className="p-3 rounded-xl text-xs flex items-center gap-2 bg-rose-500/10 text-rose-600 border border-rose-500/20">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong. Please email directly at yosefayalew56@gmail.com</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
