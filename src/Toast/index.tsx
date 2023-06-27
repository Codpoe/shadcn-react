import { useEffect, useState } from 'react';
import cx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import * as RadixToast from '../primitives/Toast';
import * as RadixPortal from '../primitives/Portal';
import {
  InfoIcon,
  CheckCircle2Icon,
  AlertCircleIcon,
  XCircleIcon,
  Loader2Icon,
} from '../icons';

export type ToastType = 'default' | 'success' | 'warning' | 'error' | 'loading';

export interface ToastProps {
  type?: ToastType;
  id?: string | number;
  duration?: number;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ToasterProps {
  /**
   * The time in milliseconds that should elapse before automatically closing each toast.
   * @default 5000
   */
  duration?: number;
  /**
   * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
   * Use `event.code` value for each key from keycode.info.
   * For meta keys, use `ctrlKey`, `shiftKey`, `altKey` and/or `metaKey`.
   * @default ['F8']
   */
  hotkey?: string[];
  portalContainer?: HTMLElement;
}

interface InternalToastProps extends ToastProps {
  id: string | number;
  open: boolean;
}

interface ToastPromiseProps<T = any> extends ToastProps {
  loading?: React.ReactNode;
  success?: React.ReactNode | ((data: T) => React.ReactNode);
  error?: React.ReactNode | ((error: any) => React.ReactNode);
}

type Subscriber = (t: InternalToastProps) => void;

let toastCount = 0;
let toasts: InternalToastProps[] = [];
const subscribers: Subscriber[] = [];

const subscribe = (subscriber: Subscriber) => {
  subscribers.push(subscriber);

  return () => {
    const index = subscribers.indexOf(subscriber);
    subscribers.splice(index, 1);
  };
};

const publish = (t: InternalToastProps) => {
  subscribers.forEach(subscriber => subscriber(t));
};

const close = (id?: string | number) => {
  if (id) {
    const index = toasts.findIndex(t => t.id === id);

    if (index >= 0) {
      subscribers.forEach(subscriber =>
        subscriber({ ...toasts[index], open: false })
      );
      toasts.splice(index, 1);
    }

    return;
  }

  toasts.forEach(t => {
    subscribers.forEach(subscriber => subscriber({ ...t, open: false }));
  });
  toasts = [];
};

export function toast(props: ToastProps): string | number {
  const id = props.id || ++toastCount;
  const index = toasts.findIndex(t => t.id === id);

  if (index >= 0) {
    const newToast = { ...toasts[index], ...props, id };
    publish(newToast);
    toasts.splice(index, 1, newToast);
  } else {
    const newToast = { icon: <InfoIcon />, ...props, id, open: true };
    publish(newToast);
    toasts.unshift(newToast);
  }

  return id;
}

toast.success = (props: ToastProps) => {
  return toast({ icon: <CheckCircle2Icon />, ...props, type: 'success' });
};

toast.warning = (props: ToastProps) => {
  return toast({ icon: <AlertCircleIcon />, ...props, type: 'warning' });
};

toast.error = (props: ToastProps) => {
  return toast({ icon: <XCircleIcon />, ...props, type: 'error' });
};

toast.loading = (props: ToastProps) => {
  return toast({
    icon: <Loader2Icon className="sdn-toast-loader-icon" />,
    ...props,
    type: 'loading',
  });
};

toast.promise = function <T = any>(
  task: Promise<T> | (() => Promise<T>),
  props: ToastPromiseProps
) {
  const id = toast.loading({ ...props, title: props.loading ?? props.title });

  const p = task instanceof Promise ? task : task();

  p.then(data => {
    const title =
      typeof props.success === 'function' ? props.success(data) : props.success;

    toast.success({
      ...props,
      id,
      title: title ?? props.title,
    });
  }).catch(error => {
    const title =
      typeof props.error === 'function' ? props.error(error) : props.error;

    toast.error({
      ...props,
      id,
      title: title ?? props.title,
    });
  });

  return id;
};

function Toast(props: InternalToastProps) {
  const { id, open, duration, title, description, icon, className, style } =
    props;

  return (
    <CSSTransition
      classNames="sdn-toast"
      in={open}
      timeout={200}
      mountOnEnter
      unmountOnExit
    >
      <RadixToast.Root
        className={cx('sdn-toast', className)}
        style={style}
        duration={duration}
        forceMount
      >
        <RadixToast.Title>
          {icon && <div className="sdn-toast-icon">{icon}</div>}
          <div className="sdn-toast-title-text">{title}</div>
        </RadixToast.Title>
        {description && (
          <RadixToast.Description className="sdn-toast-description">
            {description}
          </RadixToast.Description>
        )}
        <RadixToast.Close className="sdn-toast-close">x</RadixToast.Close>
      </RadixToast.Root>
    </CSSTransition>
  );
}

export function Toaster(props: ToasterProps) {
  const { duration, hotkey, portalContainer } = props;
  const [toasts, setToasts] = useState<InternalToastProps[]>([]);

  useEffect(() => {
    return subscribe(newToasts => {
      // TODO
      setToasts([]);
    });
  }, []);

  return (
    <RadixToast.Provider duration={duration} swipeDirection="right">
      <RadixPortal.Root container={portalContainer}>
        <RadixToast.Viewport className="sdn-toast-viewport" hotkey={hotkey} />
      </RadixPortal.Root>
      {toasts.map(t => (
        <Toast key={t.id} {...t} />
      ))}
    </RadixToast.Provider>
  );
}
