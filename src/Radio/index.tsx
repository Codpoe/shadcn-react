import {
  RadioGroupProps as UiRadioGroupProps,
  RadioGroupItemProps as UiRadioGroupItemProps,
} from '@radix-ui/react-radio-group';
import { useMemo } from 'react';
import {
  RadioGroup as UiRadioGroup,
  RadioGroupItem as UiRadioGroupItem,
} from '../ui/radio-group';
import { cn } from '../utils';
import { Label } from '../Label';

export interface RadioGroupProps extends UiRadioGroupProps {}
export interface RadioProps extends UiRadioGroupItemProps {}

let _radioId = 0;

export function Radio(props: RadioProps) {
  const { id, children, className, style, disabled, ...restProps } = props;
  const finalId = useMemo(() => id || `sr-radio-${++_radioId}`, [id]);

  if (children == null) {
    return (
      <UiRadioGroupItem
        id={finalId}
        className={className}
        style={style}
        {...restProps}
      />
    );
  }

  return (
    <div className={cn('sr-flex sr-items-center ', className)} style={style}>
      <UiRadioGroupItem id={finalId} disabled={disabled} {...restProps} />
      <Label
        className={cn(
          'sr-pl-2 sr-cursor-pointer',
          disabled && 'sr-cursor-not-allowed sr-opacity-50',
        )}
        htmlFor={finalId}
      >
        {children}
      </Label>
    </div>
  );
}

function RadioGroup(props: RadioGroupProps) {
  return <UiRadioGroup {...props} />;
}

Radio.Group = RadioGroup;
