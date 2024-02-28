import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../utils';
import { Dialog, DialogContent } from '../ui/dialog';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'sr-flex sr-h-full sr-w-full sr-flex-col sr-overflow-hidden sr-rounded-md sr-bg-popover sr-text-popover-foreground',
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="sr-overflow-hidden sr-p-0">
        <Command className="[&_[cmdk-group-heading]]:sr-px-2 [&_[cmdk-group-heading]]:sr-font-medium [&_[cmdk-group-heading]]:sr-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:sr-pt-0 [&_[cmdk-group]]:sr-px-2 [&_[cmdk-input-wrapper]_svg]:sr-h-5 [&_[cmdk-input-wrapper]_svg]:sr-w-5 [&_[cmdk-input]]:sr-h-12 [&_[cmdk-item]]:sr-px-2 [&_[cmdk-item]]:sr-py-3 [&_[cmdk-item]_svg]:sr-h-5 [&_[cmdk-item]_svg]:sr-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="sr-flex sr-items-center sr-border-b sr-px-3"
    cmdk-input-wrapper=""
  >
    <MagnifyingGlassIcon className="sr-mr-2 sr-h-4 sr-w-4 sr-shrink-0 sr-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'sr-flex sr-h-10 sr-w-full sr-rounded-md sr-bg-transparent sr-py-3 sr-text-sm sr-outline-none placeholder:sr-text-muted-foreground disabled:sr-cursor-not-allowed disabled:sr-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'sr-max-h-[300px] sr-overflow-y-auto sr-overflow-x-hidden',
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="sr-py-6 sr-text-center sr-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'sr-overflow-hidden sr-p-1 sr-text-foreground [&_[cmdk-group-heading]]:sr-px-2 [&_[cmdk-group-heading]]:sr-py-1.5 [&_[cmdk-group-heading]]:sr-text-xs [&_[cmdk-group-heading]]:sr-font-medium [&_[cmdk-group-heading]]:sr-text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('sr--mx-1 sr-h-px sr-bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'sr-relative sr-flex sr-cursor-default sr-select-none sr-items-center sr-rounded-sm sr-px-2 sr-py-1.5 sr-text-sm sr-outline-none aria-selected:sr-bg-accent aria-selected:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'sr-ml-auto sr-text-xs sr-tracking-widest sr-text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
