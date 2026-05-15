import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        {
          'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300': variant === 'primary',
          'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300': variant === 'secondary',
          'border border-blue-200 text-blue-600 dark:border-blue-700 dark:text-blue-400': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
