import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const alertVariants = cva(
  'sr-relative sr-w-full sr-rounded-lg sr-border sr-px-4 sr-py-3 sr-text-sm [&>svg+div]:sr-translate-y-[-3px] [&>svg]:sr-absolute [&>svg]:sr-left-4 [&>svg]:sr-top-4 [&>svg~*]:sr-pl-7',
  {
    variants: {
      variant: {
        default:
          'sr-bg-background sr-text-foreground [&>svg]:sr-text-foreground',
        destructive:
          'sr-border-destructive/50 sr-text-destructive dark:sr-border-destructive [&>svg]:sr-text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'sr-mb-1 sr-font-medium sr-leading-none sr-tracking-tight',
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('sr-text-sm [&_p]:sr-leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
