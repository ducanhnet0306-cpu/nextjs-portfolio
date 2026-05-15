import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SKILLS } from '@/constants/portfolio';

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Kỹ năng"
          title="Chuyên môn kỹ thuật"
          description="Bộ kỹ năng fullstack đa dạng từ frontend đến backend, database và AI tools."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category) => (
            <Card key={category.title} hover>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
