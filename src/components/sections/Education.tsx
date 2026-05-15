import { GraduationCap, Award, Star } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { EDUCATION, CERTS } from '@/constants/portfolio';

export function Education() {
  return (
    <section id="education" className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Học vấn" title="Học vấn & Chứng chỉ" />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Education cards */}
          <div className="space-y-4 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Học vấn
            </p>
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-500"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600 dark:bg-blue-900/40 dark:group-hover:bg-blue-600">
                    <GraduationCap className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-white dark:text-blue-400 dark:group-hover:text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {edu.institution}
                      </h3>
                      <span className="inline-flex w-fit flex-shrink-0 items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {edu.major}
                    </p>

                    {edu.note && (
                      <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                        {edu.note}
                      </p>
                    )}

                    {edu.gpa && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          <Star className="h-3 w-3 fill-current" />
                          GPA {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Chứng chỉ
            </p>
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-500"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600 dark:bg-blue-900/40 dark:group-hover:bg-blue-600">
                    <Award className="h-5 w-5 text-blue-600 transition-colors duration-300 group-hover:text-white dark:text-blue-400 dark:group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
