import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'sr-inline-flex sr-h-9 sr-items-center sr-justify-center sr-rounded-lg sr-bg-muted sr-p-1 sr-text-muted-foreground',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'sr-inline-flex sr-items-center sr-justify-center sr-whitespace-nowrap sr-rounded-md sr-px-3 sr-py-1 sr-text-sm sr-font-medium sr-ring-offset-background sr-transition-all focus-visible:sr-outline-none focus-visible:sr-ring-2 focus-visible:sr-ring-ring focus-visible:sr-ring-offset-2 disabled:sr-pointer-events-none disabled:sr-opacity-50 data-[state=active]:sr-bg-background data-[state=active]:sr-text-foreground data-[state=active]:sr-shadow',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'sr-mt-2 sr-ring-offset-background focus-visible:sr-outline-none focus-visible:sr-ring-2 focus-visible:sr-ring-ring focus-visible:sr-ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
