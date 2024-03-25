import {
  CheckedState,
  CheckboxProps as UiCheckboxProps,
} from '@radix-ui/react-checkbox';
import { createContext, forwardRef, useContext, useMemo } from 'react';
import { Checkbox as UiCheckbox } from '../ui/checkbox';
import { cn, mapFormProps } from '../utils';
import { Label } from '../Label';
import { useControl } from '../hooks/use-control';

interface CheckboxGroupContextValue {
  value: string[];
  disabled?: boolean;
  onChange: (value: string[]) => void;
}

const checkboxGroupContext = createContext<CheckboxGroupContextValue | null>(
  null,
);

export interface CheckboxProps extends UiCheckboxProps {}

let _checkboxId = 0;

const _Checkbox = forwardRef<
  React.ElementRef<typeof UiCheckbox>,
  CheckboxProps
>((props, ref) => {
  const groupContext = useContext(checkboxGroupContext);

  const {
    id,
    children,
    className,
    style,
    disabled = groupContext?.disabled,
    value,
    checked,
    onCheckedChange,
    ...restProps
  } = mapFormProps(props, 'checked', 'onCheckedChange');

  const finalId = useMemo(() => id || `sr-checkbox-${++_checkboxId}`, [id]);

  const finalChecked = groupContext
    ? groupContext.value.includes(value as any)
    : checked;

  const finalOnCheckedChange = (checked: CheckedState) => {
    if (groupContext) {
      const groupValue = new Set(groupContext.value);

      if (checked) {
        groupValue.add(value as any);
      } else {
        groupValue.delete(value as any);
      }

      groupContext.onChange([...groupValue]);
    } else {
      onCheckedChange?.(checked);
    }
  };

  if (groupContext && value === undefined) {
    // eslint-disable-next-line no-console
    console.error('[SR] Checkbox in group must have a value.');
    return null;
  }

  if (children == null) {
    return (
      <UiCheckbox
        ref={ref}
        id={finalId}
        className={cn(className, 'disabled:sr-opacity-50')}
        style={style}
        disabled={disabled}
        checked={finalChecked}
        onCheckedChange={finalOnCheckedChange}
        {...restProps}
      />
    );
  }

  return (
    <div
      className={cn(
        className,
        'sr-flex sr-items-center',
        !groupContext && 'group-data-[label-pos=left]:sr-py-2.5',
      )}
      style={style}
    >
      <UiCheckbox
        ref={ref}
        id={finalId}
        className={cn(disabled && 'sr-opacity-50')}
        disabled={disabled}
        checked={finalChecked}
        onCheckedChange={finalOnCheckedChange}
        {...restProps}
      />
      <Label
        htmlFor={finalId}
        className="sr-pl-2 sr-cursor-pointer peer-disabled:sr-cursor-not-allowed peer-disabled:!sr-opacity-50"
      >
        {children}
      </Label>
    </div>
  );
});

_Checkbox.displayName = 'Checkbox';

export const Checkbox: typeof _Checkbox & {
  Group: typeof CheckboxGroup;
} = _Checkbox as any;

export interface CheckboxGroupProps {
  disabled?: boolean;
  defaultValue?: string[];
  value?: string[];
  /**
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical';
  onChange?: (value: string[]) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      disabled,
      defaultValue = [],
      value: propValue,
      layout = 'horizontal',
      onChange: propOnChange,
      children,
      className,
      style,
    } = props;

    const [value, onChange] = useControl(defaultValue, propValue, propOnChange);

    return (
      <checkboxGroupContext.Provider value={{ disabled, value, onChange }}>
        <div
          ref={ref}
          className={cn(
            className,
            'sr-flex group-data-[label-pos=top]:sr-pt-1 group-data-[label-pos=left]:sr-py-2.5',
            layout === 'horizontal'
              ? 'sr-flex-row sr-gap-x-6 sr-gap-y-2.5 sr-items-center sr-flex-wrap'
              : 'sr-flex-col sr-gap-y-4 sr-justify-stretch',
          )}
          style={style}
        >
          {children}
        </div>
      </checkboxGroupContext.Provider>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';

Checkbox.Group = CheckboxGroup;
