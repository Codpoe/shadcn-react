import cx from 'clsx';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  Checkbox as RadixCheckbox,
  CheckboxIndicator,
} from '../primitives/Checkbox';
import type { CheckedState } from '../primitives/Checkbox';
import { CheckIcon, MinusIcon } from '../icons';
import './index.css';

export interface CheckboxProps<T extends string | number> {
  checked?: boolean;
  defaultChecked?: boolean;
  value?: T;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Checkbox<T extends string | number>(props: CheckboxProps<T>) {
  const groupContext = useContext(checkboxGroupContext);

  const {
    checked,
    defaultChecked,
    indeterminate,
    value,
    disabled = groupContext?.disabled,
    onChange,
    children,
    className,
    ...restProps
  } = props;

  const checkState: CheckedState | undefined = indeterminate
    ? 'indeterminate'
    : groupContext
    ? groupContext.value.includes(value)
    : checked;

  const handleCheckedChange = (newCheckedState: boolean) => {
    onChange?.(newCheckedState);
    groupContext?.onChange(value);
  };

  return (
    <RadixCheckbox
      {...restProps}
      className={cx('sdn-checkbox', className)}
      checked={checkState}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onCheckedChange={handleCheckedChange}
    >
      <CheckboxIndicator className="sdn-checkbox-indicator" forceMount>
        <MinusIcon className="sdn-checkbox-minus-icon" />
        <CheckIcon className="sdn-checkbox-check-icon" />
      </CheckboxIndicator>
      {children && <label className="sdn-checkbox-label">{children}</label>}
    </RadixCheckbox>
  );
}

// -----------------------------------------------------
// CheckboxGroup

export interface CheckboxItem<T extends string | number> {
  label?: React.ReactNode;
  value: T;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface CheckboxGroupProps<T extends string | number> {
  value?: T[];
  defaultValue?: T[];
  disabled?: boolean;
  /**
   * Layout
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical';
  items?: CheckboxItem<T>[];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: T[]) => void;
}

interface CheckboxGroupContextValue {
  disabled?: boolean;
  value: any[];
  onChange: (value: any) => void;
}

const checkboxGroupContext = createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

function CheckboxGroup<T extends string | number>(
  props: CheckboxGroupProps<T>
) {
  const {
    value,
    defaultValue,
    disabled,
    layout = 'horizontal',
    items,
    children,
    className,
    onChange,
    ...restProps
  } = props;

  const [innerValue, setInnerValue] = useState(defaultValue);
  const isControlled = typeof value !== 'undefined';
  const finalValue = isControlled ? value : innerValue;

  const handleItemChange = useCallback(
    (itemValue: T) => {
      if (!isControlled) {
        let newValue: T[] = [];
        setInnerValue(prev => {
          return (newValue = toggleItemValue(prev || [], itemValue));
        });
        onChange?.(newValue);
        return;
      }

      onChange?.(toggleItemValue(value || [], itemValue));
    },
    [isControlled, value, onChange]
  );

  const contextValue = useMemo<CheckboxGroupContextValue>(
    () => ({
      disabled,
      value: finalValue || [],
      onChange: handleItemChange,
    }),
    [disabled, finalValue, handleItemChange]
  );

  return (
    <checkboxGroupContext.Provider value={contextValue}>
      <div
        {...restProps}
        className={cx(
          'sdn-checkbox-group',
          `sdn-checkbox-group--${layout}`,
          className
        )}
      >
        {children ??
          items?.map(({ value, label, ...rest }) => (
            <Checkbox key={value} value={value} {...rest}>
              {label ?? value}
            </Checkbox>
          ))}
      </div>
    </checkboxGroupContext.Provider>
  );
}

function toggleItemValue(value: any[], itemValue: any): any[] {
  const index = value.indexOf(itemValue);

  if (index >= 0) {
    const newValue = value.slice();
    newValue.splice(index, 1);
    return newValue;
  } else {
    return value.concat(itemValue);
  }
}

Checkbox.Group = CheckboxGroup;
