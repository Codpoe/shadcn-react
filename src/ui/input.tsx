import * as React from 'react';

import { cn } from '../utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'sr-flex sr-h-9 sr-w-full sr-rounded-md sr-border sr-border-input sr-bg-transparent sr-px-3 sr-py-1 sr-text-sm sr-shadow-sm sr-transition-colors file:sr-border-0 file:sr-bg-transparent file:sr-text-sm file:sr-font-medium placeholder:sr-text-muted-foreground focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-cursor-not-allowed disabled:sr-opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
