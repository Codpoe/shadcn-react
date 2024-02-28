import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '../utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'sr-peer sr-inline-flex sr-h-5 sr-w-9 sr-shrink-0 sr-cursor-pointer sr-items-center sr-rounded-full sr-border-2 sr-border-transparent sr-shadow-sm sr-transition-colors focus-visible:sr-outline-none focus-visible:sr-ring-2 focus-visible:sr-ring-ring focus-visible:sr-ring-offset-2 focus-visible:sr-ring-offset-background disabled:sr-cursor-not-allowed disabled:sr-opacity-50 data-[state=checked]:sr-bg-primary data-[state=unchecked]:sr-bg-input',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'sr-pointer-events-none sr-block sr-h-4 sr-w-4 sr-rounded-full sr-bg-background sr-shadow-lg sr-ring-0 sr-transition-transform data-[state=checked]:sr-translate-x-4 data-[state=unchecked]:sr-translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
