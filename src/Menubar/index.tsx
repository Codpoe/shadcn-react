import {
  MenubarCheckboxItemProps,
  MenubarContentProps,
  MenubarLabelProps,
  MenubarMenuProps as UiMenubarMenuProps,
  MenubarProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarSeparatorProps,
  MenubarItemProps as UiMenubarItemProps,
  MenubarSubProps as UiMenubarSubProps,
  MenubarSubContentProps,
  MenuPortalProps,
  MenubarGroupProps,
} from '@radix-ui/react-menubar';
import { ComponentPropsWithoutRef } from 'react';
import {
  Menubar as UiMenubar,
  MenubarMenu as UiMenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem as UiMenubarItem,
  MenubarLabel,
  MenubarPortal,
  MenubarGroup,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub as UiMenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/ui/menubar';
import { cn } from '@/utils';

export type {
  MenubarProps,
  MenubarLabelProps,
  MenubarSeparatorProps,
  MenuPortalProps,
  MenubarGroupProps,
  MenubarCheckboxItemProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
};

export interface MenubarShortcutProps
  extends ComponentPropsWithoutRef<typeof MenubarShortcut> {}

export interface MenubarMenuProps
  extends UiMenubarMenuProps,
    Omit<MenubarContentProps, 'content'> {
  content?: React.ReactNode;
}

export interface MenubarItemProps extends UiMenubarItemProps {
  inset?: boolean;
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
}

export interface MenubarSubProps
  extends UiMenubarSubProps,
    Omit<MenubarSubContentProps, 'content'> {
  content?: React.ReactNode;
}

function MenubarMenu(props: MenubarMenuProps) {
  const { value, children, content, ...restProps } = props;

  return (
    <UiMenubarMenu value={value}>
      <MenubarTrigger className="sr-cursor-pointer">{children}</MenubarTrigger>
      {content != null && (
        <MenubarContent {...restProps}>{content}</MenubarContent>
      )}
    </UiMenubarMenu>
  );
}

function MenubarItem(props: MenubarItemProps) {
  const { icon, shortcut, children, className, ...restProps } = props;

  return (
    <UiMenubarItem
      className={cn('sr-cursor-pointer', className)}
      {...restProps}
    >
      {icon != null && (
        <span className="sr-mr-2 [&>svg]:sr-w-4 [&>svg]:sr-h-4">{icon}</span>
      )}
      {children}
      {shortcut != null && <MenubarShortcut>{shortcut}</MenubarShortcut>}
    </UiMenubarItem>
  );
}

function MenubarSub(props: MenubarSubProps) {
  const { children, open, defaultOpen, onOpenChange, content, ...restProps } =
    props;

  return (
    <UiMenubarSub
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <MenubarSubTrigger className="sr-cursor-pointer">
        {children}
      </MenubarSubTrigger>
      {content != null && (
        <MenubarSubContent {...restProps}>{content}</MenubarSubContent>
      )}
    </UiMenubarSub>
  );
}

export const Menubar: typeof UiMenubar & {
  Menu: typeof MenubarMenu;
  Item: typeof MenubarItem;
  Sub: typeof MenubarSub;
  Label: typeof MenubarLabel;
  Separator: typeof MenubarSeparator;
  Portal: typeof MenubarPortal;
  Group: typeof MenubarGroup;
  Shortcut: typeof MenubarShortcut;
  CheckboxItem: typeof MenubarCheckboxItem;
  RadioGroup: typeof MenubarRadioGroup;
  RadioItem: typeof MenubarRadioItem;
} = UiMenubar as any;

Menubar.Menu = MenubarMenu;
Menubar.Item = MenubarItem;
Menubar.Sub = MenubarSub;
Menubar.Label = MenubarLabel;
Menubar.Separator = MenubarSeparator;
Menubar.Portal = MenubarPortal;
Menubar.Group = MenubarGroup;
Menubar.Shortcut = MenubarShortcut;
Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
