import React from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
import {
  Button as UiButton,
  buttonVariants,
  ButtonProps as UiButtonProps,
} from '@/ui/button';

export { buttonVariants };

export interface ButtonProps extends UiButtonProps {
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, icon, loading, disabled, size, ...restProps } = props;
    return (
      <UiButton
        ref={ref}
        disabled={loading || disabled}
        size={size}
        {...restProps}
      >
        {loading && (
          <ReloadIcon className="sr-mr-2 sr-h-4 sr-w-4 sr-animate-spin" />
        )}
        {icon && (
          <span
            className={`${size !== 'icon' ? 'sr-mr-2' : ''} ${
              size === 'sm'
                ? '[&>svg]:sr-h-3.5 [&>svg]:sr-w-3.5'
                : '[&>svg]:sr-h-4 [&>svg]:sr-w-4'
            }`}
          >
            {icon}
          </span>
        )}
        {children}
      </UiButton>
    );
  },
);

Button.displayName = 'Button';
