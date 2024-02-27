import {
  DialogCloseProps,
  DialogProps as UiDialogProps,
} from '@radix-ui/react-dialog';
import { MouseEvent, forwardRef, useRef, useState } from 'react';
import { Button, ButtonProps } from '@/Button';
import {
  Dialog as UiDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose as UiDialogClose,
} from '@/ui/dialog';

export interface DialogProps extends UiDialogProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  content?: React.ReactNode;
  okText?: React.ReactNode;
  okProps?: ButtonProps;
  cancelText?: React.ReactNode;
  cancelProps?: ButtonProps;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onOk?: (ev: MouseEvent) => any | Promise<any>;
  onCancel?: (ev: MouseEvent) => any | Promise<any>;
}

export function Dialog(props: DialogProps) {
  const {
    title,
    description,
    content,
    children,
    okText = 'Ok',
    okProps,
    cancelText = 'Cancel',
    cancelProps,
    footer,
    className,
    style,
    onOk,
    onCancel,
    ...restProps
  } = props;

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [okLoading, setOkLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);

  const handleOk = async (ev: MouseEvent) => {
    const timer = setTimeout(() => {
      setOkLoading(true);
    }, 50);

    await onOk?.(ev);
    clearTimeout(timer);
    setOkLoading(false);
    closeBtnRef.current?.click();
  };

  const handleCancel = async (ev: MouseEvent) => {
    const timer = setTimeout(() => {
      setCancelLoading(true);
    }, 50);

    await onCancel?.(ev);
    clearTimeout(timer);
    setCancelLoading(false);
    closeBtnRef.current?.click();
  };

  return (
    <UiDialog {...restProps}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={className} style={style}>
        <DialogClose
          ref={closeBtnRef}
          asChild={false}
          className="sr-absolute sr-invisible sr-opacity-0 sr-pointer-events-none"
        />
        {(title != null || description != null) && (
          <DialogHeader>
            {title != null && <DialogTitle>{title}</DialogTitle>}
            {description != null && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        <div>{content}</div>
        {footer === null
          ? null
          : footer ?? (
              <DialogFooter>
                <Button
                  variant="outline"
                  loading={cancelLoading}
                  onClick={handleCancel}
                  {...cancelProps}
                >
                  {cancelText}
                </Button>
                <Button loading={okLoading} onClick={handleOk} {...okProps}>
                  {okText}
                </Button>
              </DialogFooter>
            )}
      </DialogContent>
    </UiDialog>
  );
}

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  function DialogClose(props: DialogCloseProps, ref) {
    return <UiDialogClose ref={ref} asChild {...props} />;
  },
);

DialogClose.displayName = 'DialogClose';

Dialog.Close = DialogClose;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
