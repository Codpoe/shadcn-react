import { forwardRef } from 'react';
import { InputProps as UiInputProps, Input as UiInput } from '../ui/input';

export interface InputProps extends UiInputProps {}

export const Input = forwardRef<HTMLInputElement, UiInputProps>(
  (props, ref) => {
    return <UiInput ref={ref} {...props} />;
  },
);

Input.displayName = UiInput.displayName;
