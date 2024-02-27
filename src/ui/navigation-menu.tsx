import * as React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'sr-relative sr-z-10 sr-flex sr-max-w-max sr-flex-1 sr-items-center sr-justify-center',
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'sr-group sr-flex sr-flex-1 sr-list-none sr-items-center sr-justify-center sr-space-x-1',
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'sr-group sr-inline-flex sr-h-9 sr-w-max sr-items-center sr-justify-center sr-rounded-md sr-bg-background sr-px-4 sr-py-2 sr-text-sm sr-font-medium sr-transition-colors hover:sr-bg-accent hover:sr-text-accent-foreground focus:sr-bg-accent focus:sr-text-accent-foreground focus:sr-outline-none disabled:sr-pointer-events-none disabled:sr-opacity-50 data-[active]:sr-bg-accent/50 data-[state=open]:sr-bg-accent/50',
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'sr-group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDownIcon
      className="sr-relative sr-top-[1px] sr-ml-1 sr-h-3 sr-w-3 sr-transition sr-duration-300 group-data-[state=open]:sr-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'sr-left-0 sr-top-0 sr-w-full data-[motion^=from-]:sr-animate-in data-[motion^=to-]:sr-animate-out data-[motion^=from-]:sr-fade-in data-[motion^=to-]:sr-fade-out data-[motion=from-end]:sr-slide-in-from-right-52 data-[motion=from-start]:sr-slide-in-from-left-52 data-[motion=to-end]:sr-slide-out-to-right-52 data-[motion=to-start]:sr-slide-out-to-left-52 md:sr-absolute md:sr-w-auto sr-',
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      'sr-absolute sr-left-0 sr-top-full sr-flex sr-justify-center',
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'sr-origin-top-center sr-relative sr-mt-1.5 sr-h-[var(--radix-navigation-menu-viewport-height)] sr-w-full sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-text-popover-foreground sr-shadow data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-90 md:sr-w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'sr-top-full sr-z-[1] sr-flex sr-h-1.5 sr-items-end sr-justify-center sr-overflow-hidden data-[state=visible]:sr-animate-in data-[state=hidden]:sr-animate-out data-[state=hidden]:sr-fade-out data-[state=visible]:sr-fade-in',
      className,
    )}
    {...props}
  >
    <div className="sr-relative sr-top-[60%] sr-h-2 sr-w-2 sr-rotate-45 sr-rounded-tl-sm sr-bg-border sr-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
