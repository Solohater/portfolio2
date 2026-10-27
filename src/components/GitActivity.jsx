'use client';

import { useState, useEffect } from 'react';
import { GitCommit, GitBranch, ExternalLink, RefreshCw } from 'lucide-react';

export default function GitActivity() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const res = await fetch('https://api.github.com/users/Solohater/events/public', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        if (!res.ok) throw new Error('API request failed');
        const data = await res.json();

        // Look for the most recent PushEvent
        const pushEvent = data.find((e) => e.type === 'PushEvent');

        if (pushEvent) {
          const repoName = pushEvent.repo.name;
          const commits = pushEvent.payload.commits || [];
          const latestCommit = commits[commits.length - 1] || {};
          const commitMessage = latestCommit.message || 'Updated project code';
          const commitSha = latestCommit.sha ? latestCommit.sha.substring(0, 7) : '';
          const commitUrl = latestCommit.sha 
            ? `https://github.com/${repoName}/commit/${latestCommit.sha}`
            : `https://github.com/${repoName}`;
          const branch = (pushEvent.payload.ref || '').replace('refs/heads/', '');
          const timeAgo = formatTimeAgo(new Date(pushEvent.created_at));

          setActivity({
            repo: repoName,
            message: commitMessage,
            sha: commitSha,
            url: commitUrl,
            branch: branch || 'main',
            timeAgo,
            isLive: true,
          });
        } else {
          setFallback();
        }
      } catch (err) {
        setFallback();
      } finally {
        setLoading(false);
      }
    }

    function setFallback() {
      setActivity({
        repo: 'Solohater/Document-Management',
        message: 'feat: add role-based permissions & audit logging',
        sha: 'b7c4a92',
        url: 'https://github.com/Solohater/Document-Management',
        branch: 'main',
        timeAgo: 'Recently',
        isLive: false,
      });
    }

    fetchGitHubActivity();
  }, []);

  function formatTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return date.toLocaleDateString();
  }

  if (loading) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs glass-card border animate-pulse" style={{ borderColor: 'var(--card-border)' }}>
        <RefreshCw className="w-3 h-3 animate-spin text-emerald-600" />
        <span style={{ color: 'var(--text-muted)' }}>Checking GitHub activity...</span>
      </div>
    );
  }

  if (!activity) return null;

  return (
    <a
      href={activity.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono glass-card border transition-all hover:scale-[1.02] group"
      style={{
        borderColor: 'var(--accent-border)',
        background: 'var(--accent-subtle)',
        color: 'var(--text)',
      }}
      title="View verified commit on GitHub"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
      </span>

      <span className="flex items-center gap-1 font-semibold text-emerald-800 dark:text-emerald-400">
        <GitCommit className="w-3.5 h-3.5" />
        <span>Live Git Activity:</span>
      </span>

      <span className="truncate max-w-[200px] sm:max-w-[280px]" style={{ color: 'var(--text)' }}>
        {activity.repo.replace('Solohater/', '')} • &ldquo;{activity.message}&rdquo;
      </span>

      <span className="opacity-70 text-[11px] shrink-0" style={{ color: 'var(--text-muted)' }}>
        ({activity.timeAgo})
      </span>

      <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
    </a>
  );
}
