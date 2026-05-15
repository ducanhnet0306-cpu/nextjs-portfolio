import { Briefcase, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { EXPERIENCES } from '@/constants/portfolio';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <section id="experience" className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Kinh nghiệm"
          title="Lịch sử làm việc"
          description="Hành trình phát triển từ Backend Developer đến Fullstack Developer với kinh nghiệm thực chiến tại các công ty sản phẩm."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-100 dark:bg-blue-900/40 sm:left-8" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white shadow-sm dark:bg-slate-900',
                      exp.current
                        ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-400'
                    )}
                  >
                    <Briefcase className="h-5 w-5" />
                  </div>
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-500" />
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/60">
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <span
                      className={cn(
                        'inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium',
                        exp.current
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                      )}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                        <span className="text-slate-600 dark:text-slate-300">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
