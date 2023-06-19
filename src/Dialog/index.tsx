import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { XIcon } from 'lucide-react';
import {
  Dialog as RadixDialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../primitives/Dialog';
import { Button } from '../Button';
import './index.css';
import { ButtonProps } from '../Button';

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  closeIcon?: React.ReactNode;
  /**
   * @default true
   */
  overlay?: boolean;
  /**
   * @todo
   * @default true
   */
  overlayClosable?: boolean;
  portalContainer?: HTMLElement;
  okText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  cancelText?: React.ReactNode;
  cancelButtonProps?: ButtonProps;
  onOk?: (ev: React.MouseEvent<HTMLButtonElement>) => Promise<any> | void;
  onCancel?: (ev: React.MouseEvent<HTMLButtonElement>) => Promise<any> | void;
  onChange?: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  overlayClassName?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
}

export function Dialog(props: DialogProps) {
  const {
    defaultOpen,
    open,
    title,
    description,
    children,
    footer,
    closeIcon = <XIcon />,
    overlay = true,
    overlayClosable = true,
    portalContainer,
    okText = 'Confirm',
    okButtonProps,
    cancelText = 'Cancel',
    cancelButtonProps,
    onOk,
    onCancel,
    onChange,
    className,
    style,
    overlayClassName,
    overlayStyle,
    ...restProps
  } = props;

  const [innerOpen, setInnerOpen] = useState(defaultOpen);
  const finalOpen = typeof open === 'undefined' ? innerOpen : open;
  const finalOpenRef = useRef(finalOpen);
  finalOpenRef.current = finalOpen;

  const dialogRef = useRef<HTMLDivElement>(null);
  const clickPosRef = useRef<{ x: number; y: number; t: number }>({
    x: 0,
    y: 0,
    t: 0,
  });

  const handleChange = (newOpen: boolean) => {
    if (typeof open === 'undefined') {
      setInnerOpen(newOpen);
    }
    onChange?.(newOpen);
  };

  const handleOk = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    await onOk?.(ev);
    handleChange(false);
  };

  const handleCancel = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    await onCancel?.(ev);
    handleChange(false);
  };

  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (!finalOpenRef.current) {
        clickPosRef.current = {
          x: ev.clientX,
          y: ev.clientY,
          t: Date.now(),
        };
      }
    };

    window.addEventListener('click', handleClick, { capture: true });

    return () =>
      window.removeEventListener('click', handleClick, { capture: true });
  }, []);

  useLayoutEffect(() => {
    const { x, y, t } = clickPosRef.current || {};

    if (finalOpen) {
      if (t && Date.now() - t < 100) {
        const { clientWidth, clientHeight } = document.documentElement;
        const left = x + (clientWidth / 2 - x) / 3;
        const top = y + (clientHeight / 2 - y) / 3;

        dialogRef.current?.style.setProperty(
          '--from-left',
          `${(left / clientWidth) * 100}%`
        );
        dialogRef.current?.style.setProperty(
          '--from-top',
          `${(top / clientHeight) * 100}%`
        );
      } else {
        dialogRef.current?.style.setProperty('--from-left', '50%');
        dialogRef.current?.style.setProperty('--from-top', '50%');
      }
    }
  }, [finalOpen]);

  return (
    <RadixDialog open={finalOpen} onOpenChange={handleChange} {...restProps}>
      <DialogPortal container={portalContainer} forceMount>
        <div className={cx('sdn-dialog-portal')}>
          <CSSTransition
            classNames="sdn-dialog"
            in={finalOpen}
            timeout={200}
            mountOnEnter
            unmountOnExit
          >
            <div className="sdn-dialog" ref={dialogRef}>
              {overlay && (
                <DialogOverlay
                  className={cx('sdn-dialog-overlay', overlayClassName)}
                  style={overlayStyle}
                  onMouseDown={
                    overlayClosable ? () => handleChange(false) : undefined
                  }
                />
              )}
              <DialogContent
                className={cx('sdn-dialog-content', className)}
                style={style}
              >
                {(title || description) && (
                  <div className={cx('sdn-dialog-header')}>
                    {title && (
                      <DialogTitle className={cx('sdn-dialog-title')}>
                        {title}
                      </DialogTitle>
                    )}
                    {description && (
                      <DialogDescription
                        className={cx('sdn-dialog-description')}
                      >
                        {description}
                      </DialogDescription>
                    )}
                  </div>
                )}
                <div className={cx('sdn-dialog-body')}>{children}</div>
                {footer !== null && (
                  <div className={cx('sdn-dialog-footer')}>
                    {footer || (
                      <>
                        <Button
                          variant="secondary"
                          onClick={handleCancel}
                          {...cancelButtonProps}
                        >
                          {cancelText}
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleOk}
                          {...okButtonProps}
                        >
                          {okText}
                        </Button>
                      </>
                    )}
                  </div>
                )}
                {closeIcon && (
                  <DialogClose className={cx('sdn-dialog-close-icon')} asChild>
                    <Button variant="ghost" size="s" icon={closeIcon} />
                  </DialogClose>
                )}
              </DialogContent>
            </div>
          </CSSTransition>
        </div>
      </DialogPortal>
    </RadixDialog>
  );
}
