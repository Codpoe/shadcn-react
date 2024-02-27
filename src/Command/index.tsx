import { DialogProps } from '@radix-ui/react-dialog';
import React, { ComponentProps } from 'react';
import {
  Command as UiCommand,
  CommandDialog,
  CommandInput,
  CommandList as UiCommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem as UiCommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@/ui/command';

export interface CommandDialogProps extends DialogProps {}

export interface CommandProps extends ComponentProps<typeof UiCommand> {}

export interface CommandInputProps
  extends ComponentProps<typeof CommandInput> {}

export interface CommandListProps extends ComponentProps<typeof UiCommandList> {
  empty?: React.ReactNode;
}

export interface CommandEmptyProps
  extends ComponentProps<typeof CommandEmpty> {}

export interface CommandGroupProps
  extends ComponentProps<typeof CommandGroup> {}

export interface CommandItemProps extends ComponentProps<typeof UiCommandItem> {
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
}

export interface CommandSeparatorProps
  extends ComponentProps<typeof CommandSeparator> {}

export interface CommandShortcutProps
  extends ComponentProps<typeof CommandShortcut> {}

export const CommandList = React.forwardRef<
  React.ElementRef<typeof UiCommandList>,
  CommandListProps
>((props, ref) => {
  const { empty, children, ...restProps } = props;
  return (
    <UiCommandList ref={ref} {...restProps}>
      {empty != null && <CommandEmpty>{empty}</CommandEmpty>}
      {children}
    </UiCommandList>
  );
});

CommandList.displayName = UiCommandList.displayName;

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof UiCommandItem>,
  CommandItemProps
>((props, ref) => {
  const { icon, shortcut, children, ...restProps } = props;
  return (
    <UiCommandItem ref={ref} {...restProps}>
      {icon != null && (
        <span className="sr-mr-2 [&>svg]:sr-w-4 [&>svg]:sr-h-4">{icon}</span>
      )}
      {children}
      {shortcut != null && <CommandShortcut>{shortcut}</CommandShortcut>}
    </UiCommandItem>
  );
});

CommandItem.displayName = UiCommandItem.displayName;

export const Command: typeof UiCommand & {
  Dialog: typeof CommandDialog;
  Input: typeof CommandInput;
  List: typeof CommandList;
  Empty: typeof CommandEmpty;
  Group: typeof CommandGroup;
  Item: typeof CommandItem;
  Separator: typeof CommandSeparator;
  Shortcut: typeof CommandShortcut;
} = UiCommand as any;

Command.Dialog = CommandDialog;
Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Item = CommandItem;
Command.Separator = CommandSeparator;
Command.Shortcut = CommandShortcut;
