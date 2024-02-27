import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const toggleVariants = cva(
  'sr-inline-flex sr-items-center sr-justify-center sr-rounded-md sr-text-sm sr-font-medium sr-transition-colors hover:sr-bg-muted hover:sr-text-muted-foreground focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-pointer-events-none disabled:sr-opacity-50 data-[state=on]:sr-bg-accent data-[state=on]:sr-text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'sr-bg-transparent',
        outline:
          'sr-border sr-border-input sr-bg-transparent sr-shadow-sm hover:sr-bg-accent hover:sr-text-accent-foreground',
      },
      size: {
        default: 'sr-h-9 sr-px-3',
        sm: 'sr-h-8 sr-px-2',
        lg: 'sr-h-10 sr-px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
