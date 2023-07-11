import { ForwardedRef, forwardRef } from 'react';
import cx from 'clsx';
import { XIcon } from '../icons';
import './index.css';

export interface TagProps {
  /**
   * @default 'primary'
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'outline';
  color?: string;
  closable?: boolean;
  onClose?: (ev: React.SyntheticEvent) => any;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Tag = forwardRef(function Tag(
  props: TagProps,
  ref: ForwardedRef<HTMLSpanElement>
) {
  const {
    variant = 'primary',
    color,
    closable,
    onClose,
    children,
    className,
    style,
  } = props;

  const handleClose = (ev: React.SyntheticEvent) => {
    ev.stopPropagation();
    ev.nativeEvent.stopPropagation();
    onClose?.(ev);
  };

  return (
    <span
      ref={ref}
      className={cx('sdn-tag', className)}
      style={{ ...style, '--custom-color': color } as React.CSSProperties}
      {...(color && { 'data-custom-color': color })}
      data-variant={variant}
    >
      <span className="sdn-tag-content">{children}</span>
      {closable && (
        <button
          className="sdn-tag-close"
          {...(color && { 'data-custom-color': color })}
          data-variant={variant}
          onClick={handleClose}
        >
          <XIcon className="sdn-tag-close-icon" />
        </button>
      )}
    </span>
  );
});
