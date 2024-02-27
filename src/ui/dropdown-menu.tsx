import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

import { cn } from '@/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'sr-flex sr-cursor-default sr-select-none sr-items-center sr-rounded-sm sr-px-2 sr-py-1.5 sr-text-sm sr-outline-none focus:sr-bg-accent data-[state=open]:sr-bg-accent',
      inset && 'sr-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="sr-ml-auto sr-h-4 sr-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'sr-z-50 sr-min-w-[8rem] sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-p-1 sr-text-popover-foreground sr-shadow-lg data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[side=bottom]:sr-slide-in-from-top-2 data-[side=left]:sr-slide-in-from-right-2 data-[side=right]:sr-slide-in-from-left-2 data-[side=top]:sr-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'sr-z-50 sr-min-w-[8rem] sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-p-1 sr-text-popover-foreground sr-shadow-md',
        'data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[side=bottom]:sr-slide-in-from-top-2 data-[side=left]:sr-slide-in-from-right-2 data-[side=right]:sr-slide-in-from-left-2 data-[side=top]:sr-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'sr-relative sr-flex sr-cursor-default sr-select-none sr-items-center sr-rounded-sm sr-px-2 sr-py-1.5 sr-text-sm sr-outline-none sr-transition-colors focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50',
      inset && 'sr-pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'sr-relative sr-flex sr-cursor-default sr-select-none sr-items-center sr-rounded-sm sr-py-1.5 sr-pl-8 sr-pr-2 sr-text-sm sr-outline-none sr-transition-colors focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="sr-absolute sr-left-2 sr-flex sr-h-3.5 sr-w-3.5 sr-items-center sr-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="sr-h-4 sr-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'sr-relative sr-flex sr-cursor-default sr-select-none sr-items-center sr-rounded-sm sr-py-1.5 sr-pl-8 sr-pr-2 sr-text-sm sr-outline-none sr-transition-colors focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="sr-absolute sr-left-2 sr-flex sr-h-3.5 sr-w-3.5 sr-items-center sr-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="sr-h-4 sr-w-4 sr-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'sr-px-2 sr-py-1.5 sr-text-sm sr-font-semibold',
      inset && 'sr-pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('sr--mx-1 sr-my-1 sr-h-px sr-bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'sr-ml-auto sr-text-xs sr-tracking-widest sr-opacity-60',
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
