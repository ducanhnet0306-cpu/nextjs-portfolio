import { cn } from '@/lib/utils';

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 space-y-3',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
