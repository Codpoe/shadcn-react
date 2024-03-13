import React, { ComponentPropsWithoutRef } from 'react';
import {
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from 'input-otp';
import {
  InputOTP as UiInputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator as UiInputOTPSeparator,
} from '../ui/input-otp';
import { cn } from '../utils';

type UiInputOTPProps = ComponentPropsWithoutRef<typeof UiInputOTP>;

export interface InputOTPProps
  extends Omit<UiInputOTPProps, 'maxLength' | 'render' | 'children'> {
  length: number;
  children: UiInputOTPProps['render'];
}

const _InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  (props, ref) => {
    const { length, children, ...restProps } = props;

    return (
      <UiInputOTP
        ref={ref}
        maxLength={length}
        render={children}
        {...restProps}
      />
    );
  },
);

_InputOTP.displayName = 'InputOTP';

function InputOTPSeparator(
  props: ComponentPropsWithoutRef<typeof UiInputOTPSeparator>,
) {
  const { className, ...restProps } = props;
  return (
    <UiInputOTPSeparator
      className={cn(
        className,
        'sr-w-4 sr-h-4 sr-flex sr-justify-center sr-items-center [&>svg]:sr-w-2 [&>svg]:sr-h-2',
      )}
      {...restProps}
    />
  );
}

export const InputOTP: typeof _InputOTP & {
  Group: typeof InputOTPGroup;
  Slot: typeof InputOTPSlot;
  Separator: typeof InputOTPSeparator;
  regexpOnlyDigits: string;
  regexpOnlyChars: string;
  regexpOnlyDigitsAndChars: string;
} = _InputOTP as any;

InputOTP.Group = InputOTPGroup;
InputOTP.Slot = InputOTPSlot;
InputOTP.Separator = InputOTPSeparator;
InputOTP.regexpOnlyDigits = REGEXP_ONLY_DIGITS;
InputOTP.regexpOnlyChars = REGEXP_ONLY_CHARS;
InputOTP.regexpOnlyDigitsAndChars = REGEXP_ONLY_DIGITS_AND_CHARS;
