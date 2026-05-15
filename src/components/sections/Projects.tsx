import { ExternalLink, ChevronRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { PROJECTS } from '@/constants/portfolio';
import type { ProjectLink } from '@/types';

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-600 dark:hover:text-blue-400"
        >
          <ExternalLink className="h-3 w-3" />
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function Projects() {
  const featured = PROJECTS.slice(0, 3);
  const rest = PROJECTS.slice(3);

  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Dự án"
          title="Dự án tiêu biểu"
          description="Các sản phẩm thực tế đã và đang được vận hành trong môi trường production."
        />

        {/* Featured projects */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.title} hover className="flex flex-col">
              {/* Header */}
              <div className="mb-3">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {project.role} · {project.period}
                </p>
              </div>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-4 space-y-1.5">
                {project.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <ChevronRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
                    {hl}
                  </li>
                ))}
              </ul>

              {/* Footer: techs + links */}
              <div className="mt-auto border-t border-slate-100 pt-4 dark:border-slate-700">
                <div className="mb-2.5 flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <ProjectLinks links={project.links} />
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid gap-4 sm:grid-cols-3">
          {rest.map((project) => (
            <Card key={project.title} hover>
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {project.title}
                </h3>
              </div>
              <p className="mb-1 text-xs text-blue-600 dark:text-blue-400">{project.period}</p>
              <p className="mb-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mb-2.5 flex flex-wrap gap-1">
                {project.techs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.links && project.links.length > 0 && (
                <ProjectLinks links={project.links} />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
