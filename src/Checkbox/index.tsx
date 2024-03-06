import { CheckboxProps as UiCheckboxProps } from '@radix-ui/react-checkbox';
import { useMemo } from 'react';
import { Checkbox as UiCheckbox } from '../ui/checkbox';
import { cn } from '../utils';
import { Label } from '../Label';

export interface CheckboxProps extends UiCheckboxProps {}

let _checkboxId = 0;

export function Checkbox(props: CheckboxProps) {
  const { id, children, className, style, disabled, ...restProps } = props;
  const finalId = useMemo(() => id || `sr-checkbox-${++_checkboxId}`, [id]);

  if (children == null) {
    return (
      <UiCheckbox
        id={finalId}
        className={cn(className, 'disabled:sr-opacity-50')}
        style={style}
        disabled={disabled}
        {...restProps}
      />
    );
  }

  return (
    <div className={cn('sr-flex sr-items-center', className)} style={style}>
      <UiCheckbox
        id={finalId}
        className={cn(disabled && 'sr-opacity-50')}
        disabled={disabled}
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
}
