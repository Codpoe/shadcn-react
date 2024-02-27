import { ComponentProps } from 'react';

import {
  ContextMenu as UiContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '@/ui/context-menu';

export interface ContextMenuProps extends ComponentProps<typeof ContextMenu> {}

export interface ContextMenuTriggerProps
  extends ComponentProps<typeof ContextMenuTrigger> {}

export interface ContextMenuContentProps
  extends ComponentProps<typeof ContextMenuContent> {}

export interface ContextMenuItemProps
  extends ComponentProps<typeof ContextMenuItem> {}

export interface ContextMenuCheckboxItemProps
  extends ComponentProps<typeof ContextMenuCheckboxItem> {}

export interface ContextMenuRadioItemProps
  extends ComponentProps<typeof ContextMenuRadioItem> {}

export interface ContextMenuLabelProps
  extends ComponentProps<typeof ContextMenuLabel> {}

export interface ContextMenuSeparatorProps
  extends ComponentProps<typeof ContextMenuSeparator> {}

export interface ContextMenuShortcutProps
  extends ComponentProps<typeof ContextMenuShortcut> {}

export interface ContextMenuGroupProps
  extends ComponentProps<typeof ContextMenuGroup> {}

export interface ContextMenuPortalProps
  extends ComponentProps<typeof ContextMenuPortal> {}

export interface ContextMenuSubProps
  extends ComponentProps<typeof ContextMenuSub> {}

export interface ContextMenuSubContentProps
  extends ComponentProps<typeof ContextMenuSubContent> {}

export interface ContextMenuSubTriggerProps
  extends ComponentProps<typeof ContextMenuSubTrigger> {}

export interface ContextMenuRadioGroupProps
  extends ComponentProps<typeof ContextMenuRadioGroup> {}

export const ContextMenu: typeof UiContextMenu & {
  Trigger: typeof ContextMenuTrigger;
  Content: typeof ContextMenuContent;
  Item: typeof ContextMenuItem;
  CheckboxItem: typeof ContextMenuCheckboxItem;
  RadioItem: typeof ContextMenuRadioItem;
  Label: typeof ContextMenuLabel;
  Separator: typeof ContextMenuSeparator;
  Shortcut: typeof ContextMenuShortcut;
  Group: typeof ContextMenuGroup;
  Portal: typeof ContextMenuPortal;
  Sub: typeof ContextMenuSub;
  SubContent: typeof ContextMenuSubContent;
  SubTrigger: typeof ContextMenuSubTrigger;
  RadioGroup: typeof ContextMenuRadioGroup;
} = UiContextMenu as any;

ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Content = ContextMenuContent;
ContextMenu.Item = ContextMenuItem;
ContextMenu.CheckboxItem = ContextMenuCheckboxItem;
ContextMenu.RadioItem = ContextMenuRadioItem;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Separator = ContextMenuSeparator;
ContextMenu.Shortcut = ContextMenuShortcut;
ContextMenu.Group = ContextMenuGroup;
ContextMenu.Portal = ContextMenuPortal;
ContextMenu.Sub = ContextMenuSub;
ContextMenu.SubContent = ContextMenuSubContent;
ContextMenu.SubTrigger = ContextMenuSubTrigger;
ContextMenu.RadioGroup = ContextMenuRadioGroup;
