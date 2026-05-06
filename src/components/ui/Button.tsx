'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-widest transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-champagne-500 text-espresso-900 hover:bg-champagne-600 hover:shadow-lg',
        secondary:
          'border border-espresso-800 text-espresso-800 hover:bg-espresso-800 hover:text-sand-50',
        ghost:
          'border border-sand-50/40 text-sand-50 hover:border-champagne-400 hover:text-champagne-400',
        outlineGold:
          'border border-champagne-500 text-champagne-500 hover:bg-champagne-500 hover:text-espresso-900',
      },
      size: {
        sm: 'px-5 py-2.5 text-xs',
        md: 'px-8 py-3.5 text-sm',
        lg: 'px-10 py-4 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  withArrow?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
      </button>
    );
  }
);

Button.displayName = 'Button';
