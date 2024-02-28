import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const buttonVariants = cva(
  'sr-inline-flex sr-items-center sr-justify-center sr-whitespace-nowrap sr-rounded-md sr-text-sm sr-font-medium sr-transition-colors focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-pointer-events-none disabled:sr-opacity-50',
  {
    variants: {
      variant: {
        default:
          'sr-bg-primary sr-text-primary-foreground sr-shadow hover:sr-bg-primary/90',
        destructive:
          'sr-bg-destructive sr-text-destructive-foreground sr-shadow-sm hover:sr-bg-destructive/90',
        outline:
          'sr-border sr-border-input sr-bg-background sr-shadow-sm hover:sr-bg-accent hover:sr-text-accent-foreground',
        secondary:
          'sr-bg-secondary sr-text-secondary-foreground sr-shadow-sm hover:sr-bg-secondary/80',
        ghost: 'hover:sr-bg-accent hover:sr-text-accent-foreground',
        link: 'sr-text-primary sr-underline-offset-4 hover:sr-underline',
      },
      size: {
        default: 'sr-h-9 sr-px-4 sr-py-2',
        sm: 'sr-h-8 sr-rounded-md sr-px-3 sr-text-xs',
        lg: 'sr-h-10 sr-rounded-md sr-px-8',
        icon: 'sr-h-9 sr-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
