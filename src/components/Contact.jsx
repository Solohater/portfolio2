'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, CheckCircle2, AlertCircle, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
                <span className="text-xs sm:text-sm font-mono truncate font-medium" style={{ color: 'var(--text)' }}>
                  {personalInfo.email}
                </span>
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
          </div>

          {/* Social Profiles */}
          <div className="glass-card rounded-2xl p-6 border space-y-3" style={{ borderColor: 'var(--card-border)' }}>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              Online Profiles
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
                  <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold text-[10px]">GL</span>
                  <span>GitLab (@yosephh)</span>
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
