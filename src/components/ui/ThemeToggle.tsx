'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      onClick={toggleTheme}
      className={cn('relative flex-shrink-0 overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2', className)}
      style={{
        width: 68,
        height: 34,
        border: isDark ? '2px solid #334155' : '2px solid #7dd3fc',
        transition: 'border-color 0.4s',
      }}
    >
      {/* ─── LIGHT MODE ─────────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isDark ? 0 : 1,
          transition: 'opacity 0.4s',
          pointerEvents: isDark ? 'none' : 'auto',
        }}
      >
        {/* Sky gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #38bdf8 0%, #7dd3fc 55%, #bae6fd 100%)',
          }}
        />

        {/* Cloud — stacked circles forming a fluffy cloud */}
        <div style={{ position: 'absolute', bottom: 2, left: 5 }}>
          {/* Base bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 30, height: 8, background: 'white', borderRadius: 8 }} />
          {/* Left bump */}
          <div style={{ position: 'absolute', bottom: 5, left: 2, width: 11, height: 11, background: 'white', borderRadius: '50%' }} />
          {/* Center bump (tallest) */}
          <div style={{ position: 'absolute', bottom: 5, left: 8, width: 14, height: 14, background: 'white', borderRadius: '50%' }} />
          {/* Right bump */}
          <div style={{ position: 'absolute', bottom: 5, left: 18, width: 10, height: 10, background: 'white', borderRadius: '50%' }} />
        </div>

        {/* Sun */}
        <div style={{ position: 'absolute', right: 7, top: '50%', transform: 'translateY(-50%)' }}>
          {/* Glow halo */}
          <div style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            background: 'rgba(251,191,36,0.35)',
            filter: 'blur(5px)',
          }} />
          {/* Sun body */}
          <div style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 36%, #fef08a 0%, #fbbf24 55%, #f59e0b 100%)',
            boxShadow: '0 0 6px 2px rgba(251,191,36,0.5)',
          }} />
        </div>
      </div>

      {/* ─── DARK MODE ──────────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isDark ? 1 : 0,
          transition: 'opacity 0.4s',
          pointerEvents: isDark ? 'auto' : 'none',
        }}
      >
        {/* Night sky */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
          }}
        />

        {/* Stars */}
        <div style={{ position: 'absolute', top: 6,  left: 7,  width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.95)' }} />
        <div style={{ position: 'absolute', top: 11, left: 17, width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.75)' }} />
        <div style={{ position: 'absolute', top: 20, left: 9,  width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.65)' }} />
        <div style={{ position: 'absolute', top: 5,  left: 26, width: 2, height: 2, borderRadius: '50%', background: 'rgba(253,224,71,0.80)' }} />
        <div style={{ position: 'absolute', top: 22, left: 21, width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.55)' }} />

        {/* Crescent moon */}
        <div style={{
          position: 'absolute',
          right: 7,
          top: '50%',
          transform: 'translateY(-50%)',
          filter: 'drop-shadow(0 0 5px rgba(253,224,71,0.7))',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="#fde047"
              stroke="#fbbf24"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
