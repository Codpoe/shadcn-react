import {
  ComponentProps,
  MouseEvent,
  forwardRef,
  useRef,
  useState,
} from 'react';
import { DialogCloseProps } from '@radix-ui/react-dialog';
import {
  Drawer as UiDrawer,
  DrawerClose as UiDrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/ui/drawer';
import { Button, ButtonProps } from '@/Button';

export type DrawerProp = ComponentProps<typeof UiDrawer> & {
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
};

export function Drawer(props: DrawerProp) {
  const {
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
    <UiDrawer {...restProps}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className={className} style={style}>
        <DrawerClose
          ref={closeBtnRef}
          asChild={false}
          className="sr-absolute sr-invisible sr-opacity-0 sr-pointer-events-none"
        />
        {(title != null || description != null) && (
          <DrawerHeader>
            {title != null && <DrawerTitle>{title}</DrawerTitle>}
            {description != null && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
        )}
        <div className="sr-px-4">{content}</div>
        {footer === null
          ? null
          : footer ?? (
              <DrawerFooter className="sm:sr-flex-row-reverse">
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
              </DrawerFooter>
            )}
      </DrawerContent>
    </UiDrawer>
  );
}

const DrawerClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  function DrawerClose(props, ref) {
    return <UiDrawerClose ref={ref} asChild {...props} />;
  },
);

DrawerClose.displayName = 'DialogClose';

Drawer.Close = DrawerClose;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Description = DrawerDescription;
Drawer.Footer = DrawerFooter;
