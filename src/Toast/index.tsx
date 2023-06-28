import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
  XIcon,
} from '../icons';
import './index.css';

const indexToTextMap: Record<number, string> = {
  0: 'first',
  1: 'second',
  2: 'third',
};

export type ToastType = 'normal' | 'success' | 'warning' | 'error' | 'loading';

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
  timestamp: number;
  open: boolean;
}

interface ToastPromiseProps<T = any> extends ToastProps {
  loading?: React.ReactNode;
  success?: React.ReactNode | ((data: T) => React.ReactNode);
  error?: React.ReactNode | ((error: any) => React.ReactNode);
}

type Subscriber = (props: InternalToastProps) => void;

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

const publish = (toast: InternalToastProps) => {
  subscribers.forEach(subscriber => subscriber(toast));
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
    const newToast: InternalToastProps = {
      ...toasts[index],
      ...props,
      id,
      timestamp: Date.now(),
    };

    toasts.splice(index, 1, newToast);
    publish(newToast);
  } else {
    const newToast: InternalToastProps = {
      icon: <InfoIcon />,
      ...props,
      id,
      timestamp: Date.now(),
      open: true,
    };

    toasts.unshift(newToast);
    publish(newToast);
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
  props: ToastPromiseProps<T>
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

function Toast(props: InternalToastProps & { index: number }) {
  const {
    id,
    index,
    timestamp,
    open,
    type = 'normal',
    duration = 3000,
    title,
    description,
    icon,
    className,
    style,
  } = props;

  const [finalOpen, setFinalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      close(id);
    }, duration);
  }, [id, duration]);

  useEffect(() => {
    setTimeout(() => {
      setFinalOpen(open);
    }, 0);
  }, [open]);

  return (
    <CSSTransition
      classNames="sdn-toast"
      in={finalOpen}
      timeout={400}
      mountOnEnter
      unmountOnExit
    >
      <RadixToast.Root
        className={cx('sdn-toast', className)}
        style={style}
        data-type={type}
        data-index={indexToTextMap[index] || 'other'}
        open={true}
        forceMount
      >
        {icon && (
          <div className="sdn-toast-icon" data-type={type}>
            {icon}
          </div>
        )}
        <div className="sdn-toast-content">
          <RadixToast.Title className="sdn-toast-title">
            {title}
          </RadixToast.Title>
          {description && (
            <RadixToast.Description className="sdn-toast-description">
              {description}
            </RadixToast.Description>
          )}
        </div>
        <RadixToast.Close className="sdn-toast-close" onClick={() => close(id)}>
          <XIcon />
        </RadixToast.Close>
      </RadixToast.Root>
    </CSSTransition>
  );
}

export function Toaster(props: ToasterProps) {
  const { duration, hotkey, portalContainer } = props;
  const [toasts, setToasts] = useState<InternalToastProps[]>([]);

  const handleMouseEnter = () => {
    // eslint-disable-next-line no-console
    console.log('>>> enter');
  };

  const handleMouseLeave = () => {
    // eslint-disable-next-line no-console
    console.log('>>> leave');
  };

  useEffect(() => {
    return subscribe(newToast => {
      if (!newToast.open) {
        setToasts(toasts =>
          toasts.map(t => (t.id === newToast.id ? newToast : t))
        );
        return;
      }

      // https://github.com/emilkowalski/sonner/blob/6c0a3f990653863f083dd8636f9e274dec527977/src/index.tsx#L401
      // Prevent batching, temp solution.
      setTimeout(() => {
        ReactDOM.flushSync(() => {
          setToasts(toasts => {
            const index = toasts.findIndex(t => t.id === newToast.id);

            // Update the toast if it already exists
            if (index >= 0) {
              return [
                ...toasts.slice(0, index),
                { ...toasts[index], ...newToast },
                ...toasts.slice(index + 1),
              ];
            }

            return [newToast, ...toasts];
          });
        });
      });
    });
  }, []);

  return (
    <RadixToast.Provider duration={duration} swipeDirection="right">
      <RadixPortal.Root container={portalContainer}>
        <RadixToast.Viewport
          className="sdn-toast-viewport"
          hotkey={hotkey}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </RadixPortal.Root>
      {toasts.map((t, index) => (
        <Toast key={t.id} index={index} {...t} />
      ))}
    </RadixToast.Provider>
  );
}
