import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'sr-relative sr-flex sr-w-full sr-touch-none sr-select-none sr-items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="sr-relative sr-h-1.5 sr-w-full sr-grow sr-overflow-hidden sr-rounded-full sr-bg-primary/20">
      <SliderPrimitive.Range className="sr-absolute sr-h-full sr-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="sr-block sr-h-4 sr-w-4 sr-rounded-full sr-border sr-border-primary/50 sr-bg-background sr-shadow sr-transition-colors focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-pointer-events-none disabled:sr-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
