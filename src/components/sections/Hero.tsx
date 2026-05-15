'use client';

import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HERO_DATA, CV_PATH, CV_FILENAME } from '@/constants/portfolio';

export function Hero() {
  function scrollToSection(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-700/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="mb-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-0.5 shadow-xl shadow-blue-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-600 dark:bg-slate-900 dark:text-blue-400">
              TĐA
            </div>
          </div>

          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 dark:border-green-800/50 dark:bg-green-900/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-green-700 dark:text-green-400">
              Đang làm việc tại Công ty Cổ phần Định Anh
            </span>
          </div>

          {/* Name & title */}
          <h1 className="mb-3 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            {HERO_DATA.name}
          </h1>
          <p className="mb-2 text-xl font-semibold text-blue-600 dark:text-blue-400 sm:text-2xl">
            {HERO_DATA.title}
          </p>
          <p className="mb-6 text-base font-medium text-slate-500 dark:text-slate-400">
            {HERO_DATA.subtitle}
          </p>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {HERO_DATA.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={() => scrollToSection(HERO_DATA.cta.primary.href)}
            >
              <ArrowDown className="h-4 w-4" />
              {HERO_DATA.cta.primary.label}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection(HERO_DATA.cta.secondary.href)}
            >
              <Mail className="h-4 w-4" />
              {HERO_DATA.cta.secondary.label}
            </Button>
            <a
              href={CV_PATH}
              download={CV_FILENAME}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 text-base font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400"
            >
              <Download className="h-4 w-4" />
              Tải CV
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '2+', label: 'Năm kinh nghiệm' },
              { value: '6+', label: 'Dự án production' },
              { value: '3', label: 'Nền tảng' },
              { value: 'AI', label: 'Driven workflow' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-blue-500 dark:text-slate-600 dark:hover:text-blue-400"
        aria-label="Cuộn xuống"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}
