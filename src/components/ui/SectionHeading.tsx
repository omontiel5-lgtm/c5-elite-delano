import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'eyebrow mb-4',
            light && 'text-champagne-400'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'heading-editorial text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.1]',
          light ? 'text-sand-50' : 'text-espresso-800'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-lg text-pretty leading-relaxed',
            light ? 'text-sand-100/80' : 'text-espresso-700/80'
          )}
        >
          {subtitle}
        </p>
      )}
      {align === 'center' && (
        <div className={cn('divider-gold mt-8', light && 'bg-champagne-400')} />
      )}
    </div>
  );
}
