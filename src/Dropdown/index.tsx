import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import { ComponentProps, forwardRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/ui/dropdown-menu';
import { cn } from '@/utils';

export interface DropdownLabelProps
  extends ComponentProps<typeof DropdownMenuLabel> {}

export interface DropdownSeparatorProps
  extends ComponentProps<typeof DropdownMenuSeparator> {}

export interface DropdownGroupProps
  extends ComponentProps<typeof DropdownMenuGroup> {}

export interface DropdownPortalProps
  extends ComponentProps<typeof DropdownMenuPortal> {}

export interface DropdownShortcutProps
  extends ComponentProps<typeof DropdownMenuShortcut> {}

export interface DropdownSubProps
  extends ComponentProps<typeof DropdownMenuSub>,
    Omit<DropdownSubContentProps, 'content'> {
  content?: React.ReactNode;
}

export interface DropdownSubTriggerProps
  extends ComponentProps<typeof DropdownMenuSubTrigger> {}

export interface DropdownSubContentProps
  extends ComponentProps<typeof DropdownMenuSubContent> {}

export interface DropdownCheckboxItemProps
  extends ComponentProps<typeof DropdownMenuCheckboxItem> {}

export interface DropdownRadioGroupProps
  extends ComponentProps<typeof DropdownMenuRadioGroup> {}

export interface DropdownRadioItemProps
  extends ComponentProps<typeof DropdownMenuRadioItem> {}

export interface DropdownItemProps
  extends ComponentProps<typeof DropdownMenuItem> {
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
}

export interface DropdownProps
  extends DropdownMenuProps,
    Omit<DropdownMenuContentProps, 'content'> {
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Dropdown(props: DropdownProps) {
  const {
    children,
    content,
    dir,
    open,
    defaultOpen,
    onOpenChange,
    modal,
    ...restProps
  } = props;

  return (
    <DropdownMenu
      dir={dir}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      {content != null && (
        <DropdownMenuContent {...restProps}>{content}</DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

const DropdownItem = forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  DropdownItemProps
>((props, ref) => {
  const { icon, shortcut, children, className, ...restProps } = props;
  return (
    <DropdownMenuItem
      ref={ref}
      className={cn('sr-cursor-pointer', className)}
      {...restProps}
    >
      {icon != null && (
        <span className="sr-mr-2 [&>svg]:sr-w-4 [&>svg]:sr-h-4">{icon}</span>
      )}
      {children}
      {shortcut != null && (
        <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
      )}
    </DropdownMenuItem>
  );
});

DropdownItem.displayName = DropdownMenuItem.displayName;

function DropdownSub(props: DropdownSubProps) {
  const { children, content, ...restProps } = props;

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="sr-cursor-pointer">
        {children}
      </DropdownMenuSubTrigger>
      {content != null && (
        <DropdownMenuPortal>
          <DropdownMenuSubContent {...restProps}>
            {content}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      )}
    </DropdownMenuSub>
  );
}

Dropdown.Label = DropdownMenuLabel;
Dropdown.Separator = DropdownMenuSeparator;
Dropdown.Group = DropdownMenuGroup;
Dropdown.Item = DropdownItem;
Dropdown.Portal = DropdownMenuPortal;
Dropdown.Shortcut = DropdownMenuShortcut;
Dropdown.Sub = DropdownSub;
Dropdown.SubTrigger = DropdownMenuSubTrigger;
Dropdown.SubContent = DropdownMenuSubContent;
Dropdown.CheckboxItem = DropdownMenuCheckboxItem;
Dropdown.RadioGroup = DropdownMenuRadioGroup;
Dropdown.RadioItem = DropdownMenuRadioItem;
