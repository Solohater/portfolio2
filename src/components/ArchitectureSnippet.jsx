'use client';

import { useState } from 'react';
import { Terminal, Copy, Check, Code } from 'lucide-react';

const snippets = {
  vertx: {
    title: 'Java Vert.x Reactive Route (eHealth / SACCO)',
    filename: 'PatientRecordVerticle.java',
    lang: 'java',
    code: `package com.etech.ehealth.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.ext.web.Router;
import io.vertx.sqlclient.Pool;

public class PatientRecordVerticle extends AbstractVerticle {
    private final Pool pgPool;

    public PatientRecordVerticle(Pool pgPool) {
        this.pgPool = pgPool;
    }

    @Override
    public void start() {
        Router router = Router.router(vertx);

        // Reactive async dispatch with non-blocking PostgreSQL client
        router.get("/api/v1/patients/:id/records")
            .handler(ctx -> {
                String patientId = ctx.pathParam("id");
                pgPool.preparedQuery("SELECT * FROM patient_records WHERE id = $1")
                    .execute(Tuple.of(patientId))
                    .onSuccess(rows -> ctx.json(rows))
                    .onFailure(err -> ctx.fail(500, err));
            });
    }
}`,
  },
  nextjs: {
    title: 'Next.js & TypeScript API Architecture',
    filename: 'route.ts',
    lang: 'typescript',
    code: `import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyAuth } from '@/lib/auth';

export async function POST(req: Request) {
  const session = await verifyAuth(req);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, content, category } = await req.json();
  
  const doc = await prisma.document.create({
    data: {
      title,
      content,
      category,
      authorId: session.userId,
    },
  });

  return NextResponse.json({ success: true, document: doc }, { status: 201 });
}`,
  },
};

export default function ArchitectureSnippet() {
  const [activeTab, setActiveTab] = useState('vertx');
  const [copied, setCopied] = useState(false);

  const activeSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl border overflow-hidden shadow-xl" style={{ borderColor: 'var(--card-border)' }}>
        {/* Terminal Header */}
        <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--card-border)', background: 'var(--bg-subtle)' }}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono font-medium ml-2" style={{ color: 'var(--text-muted)' }}>
              {activeSnippet.filename}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-lg border text-xs font-mono" style={{ borderColor: 'var(--card-border)' }}>
              <button
                type="button"
                onClick={() => setActiveTab('vertx')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'vertx' ? 'bg-emerald-800 text-white font-bold' : 'opacity-70 hover:opacity-100'
                }`}
              >
                Java Vert.x
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('nextjs')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'nextjs' ? 'bg-emerald-800 text-white font-bold' : 'opacity-70 hover:opacity-100'
                }`}
              >
                Next.js / TS
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Copy snippet"
              aria-label="Copy code snippet"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 opacity-70" />}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto" style={{ background: 'var(--code-bg)' }}>
          <pre className="text-emerald-700 dark:text-emerald-300 leading-relaxed">
            <code>{activeSnippet.code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
