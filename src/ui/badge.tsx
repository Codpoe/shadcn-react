import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const badgeVariants = cva(
  'sr-inline-flex sr-items-center sr-rounded-md sr-border sr-px-2.5 sr-py-0.5 sr-text-xs sr-font-semibold sr-transition-colors focus:sr-outline-none focus:sr-ring-2 focus:sr-ring-ring focus:sr-ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'sr-border-transparent sr-bg-primary sr-text-primary-foreground sr-shadow hover:sr-bg-primary/80',
        secondary:
          'sr-border-transparent sr-bg-secondary sr-text-secondary-foreground hover:sr-bg-secondary/80',
        destructive:
          'sr-border-transparent sr-bg-destructive sr-text-destructive-foreground sr-shadow hover:sr-bg-destructive/80',
        outline: 'sr-text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
