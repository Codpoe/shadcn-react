import { ComponentPropsWithoutRef } from 'react';
import {
  Select as UiSelect,
  SelectGroup as UiSelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem as UiSelectItem,
  SelectSeparator,
} from '../ui/select';
import { cn } from '../utils';

export interface SelectProps extends ComponentPropsWithoutRef<typeof UiSelect> {
  placeholder?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}

export interface SelectGroupProps
  extends ComponentPropsWithoutRef<typeof UiSelectGroup> {
  label?: React.ReactNode;
}

export interface SelectItemProps
  extends ComponentPropsWithoutRef<typeof UiSelectItem> {}

export interface SelectSeparatorProps
  extends ComponentPropsWithoutRef<typeof SelectSeparator> {}

export function Select(props: SelectProps) {
  const {
    placeholder,
    className,
    style,
    children,
    contentClassName,
    contentStyle,
    ...restProps
  } = props;
  return (
    <UiSelect {...restProps}>
      <SelectTrigger className={className} style={style}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClassName} style={contentStyle}>
        {children}
      </SelectContent>
    </UiSelect>
  );
}

function SelectGroup(props: SelectGroupProps) {
  const { label, children, ...restProps } = props;
  return (
    <UiSelectGroup {...restProps}>
      {label != null && <SelectLabel>{label}</SelectLabel>}
      {children}
    </UiSelectGroup>
  );
}

function SelectItem(props: SelectItemProps) {
  const { className, ...restProps } = props;
  return (
    <UiSelectItem
      className={cn(
        className,
        '!sr-pointer-events-auto sr-cursor-pointer data-[disabled]:sr-cursor-not-allowed',
      )}
      {...restProps}
    />
  );
}

Select.Group = SelectGroup;
Select.Item = SelectItem;
Select.Separator = SelectSeparator;
