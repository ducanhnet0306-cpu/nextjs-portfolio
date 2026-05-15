import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm shadow-blue-200 dark:shadow-blue-900/30': variant === 'primary',
      'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 dark:bg-slate-800 dark:text-blue-400 dark:border-slate-700 dark:hover:bg-slate-700': variant === 'secondary',
      'text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-800': variant === 'ghost',
    },
    {
      'h-8 px-3 text-sm': size === 'sm',
      'h-10 px-5 text-sm': size === 'md',
      'h-12 px-7 text-base': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={base} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
