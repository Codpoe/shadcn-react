import {
  ComponentProps,
  ComponentPropsWithoutRef,
  MouseEvent,
  useRef,
  useState,
} from 'react';
import { Button, ButtonProps } from '../Button';
import {
  Sheet as UiSheet,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetFooter,
} from '../ui/sheet';

export interface SheetProps extends ComponentPropsWithoutRef<typeof UiSheet> {
  side?: ComponentProps<typeof SheetContent>['side'];
  title?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  okText?: React.ReactNode;
  okProps?: ButtonProps;
  cancelText?: React.ReactNode;
  cancelProps?: ButtonProps;
  onOk?: (ev: MouseEvent) => any | Promise<any>;
  onCancel?: (ev: MouseEvent) => any | Promise<any>;
  className?: string;
  style?: React.CSSProperties;
}

export function Sheet(props: SheetProps) {
  const {
    side = 'right',
    title,
    description,
    content,
    children,
    footer,
    okText = 'Ok',
    okProps,
    cancelText = 'Cancel',
    cancelProps,
    onOk,
    onCancel,
    className,
    style,
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
    <UiSheet {...restProps}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={side} className={className} style={style}>
        <SheetClose
          ref={closeBtnRef}
          asChild={false}
          className="sr-absolute sr-invisible sr-opacity-0 sr-pointer-events-none"
        />
        {(title != null || description != null) && (
          <SheetHeader>
            {title != null && <SheetTitle>{title}</SheetTitle>}
            {description != null && (
              <SheetDescription>{description}</SheetDescription>
            )}
          </SheetHeader>
        )}
        <div className="sr-py-4">{content}</div>
        {footer === null
          ? null
          : footer ?? (
              <SheetFooter className="!sr-flex-col sm:!sr-flex-row-reverse sm:!sr-justify-start sr-gap-2">
                <Button loading={okLoading} onClick={handleOk} {...okProps}>
                  {okText}
                </Button>
                <Button
                  variant="outline"
                  loading={cancelLoading}
                  onClick={handleCancel}
                  {...cancelProps}
                >
                  {cancelText}
                </Button>
              </SheetFooter>
            )}
      </SheetContent>
    </UiSheet>
  );
}

Sheet.Close = SheetClose;
Sheet.Header = SheetHeader;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Footer = SheetFooter;
