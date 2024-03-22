import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapFormProps<
  Props,
  ValuePropName extends keyof Props,
  OnChangePropsName extends keyof Props,
>(
  props: Props,
  valuePropName: ValuePropName,
  onChangePropName: OnChangePropsName,
): Props {
  // In Form
  if ((props as any).__sr_form__) {
    return {
      ...props,
      value: undefined,
      onChange: undefined,
      [valuePropName]: (props as any).value,
      [onChangePropName]: (props as any).onChange,
    };
  }

  return props;
}
