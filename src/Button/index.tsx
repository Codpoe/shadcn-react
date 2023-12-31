import { ForwardedRef, forwardRef, useState } from 'react';
import cx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { Loader2Icon } from '../icons';
import './index.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @default 'primary'
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'outline'
    | 'ghost';
  /**
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l';
  icon?: React.ReactNode;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => any | Promise<any>;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button = forwardRef(function Button(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const {
    variant = 'primary',
    size = 'm',
    icon,
    round,
    loading,
    disabled,
    children,
    className,
    onClick,
    ...restProps
  } = props;

  const [innerLoading, setInnerLoading] = useState(false);
  const finalLoading = loading || innerLoading;
  const iconOnly = Boolean(icon && !children);

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || finalLoading) {
      return;
    }

    const res = onClick?.(ev);

    if (typeof res?.then === 'function') {
      const timerId = setTimeout(() => {
        setInnerLoading(true);
      }, 50);

      res.finally(() => {
        clearTimeout(timerId);
        setInnerLoading(false);
      });
    }
  };

  return (
    <button
      ref={ref}
      className={cx(
        'sdn-button',
        `sdn-button--${variant}`,
        `sdn-button--${size}`,
        { 'sdn-button--round': round },
        { 'sdn-button--icon-only': iconOnly },
        { 'sdn-button--loading': finalLoading },
        { 'sdn-button--disabled': disabled },
        className
      )}
      disabled={disabled || finalLoading}
      onClick={handleClick}
      {...restProps}
    >
      <span className="sdn-button-content">
        {icon && <span className="sdn-button-icon">{icon}</span>}
        {children}
      </span>
      <CSSTransition
        classNames="sdn-button-loading"
        in={finalLoading}
        timeout={200}
        mountOnEnter
        unmountOnExit
      >
        <Loader2Icon className="sdn-button-loading" />
      </CSSTransition>
    </button>
  );
});
