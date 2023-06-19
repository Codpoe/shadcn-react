import cx from 'clsx';
import {
  LucideIcon,
  InfoIcon,
  CheckCircle2Icon,
  AlertCircleIcon,
  XCircleIcon,
} from '../icons';
import './index.css';

type AlertVariant = 'default' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const variantToIconMap: Record<AlertVariant, LucideIcon> = {
  default: InfoIcon,
  success: CheckCircle2Icon,
  warning: AlertCircleIcon,
  error: XCircleIcon,
};

export function Alert(props: AlertProps) {
  const {
    variant = 'default',
    icon,
    title,
    children,
    className,
    ...restProps
  } = props;

  const BuiltinIcon = variantToIconMap[variant];
  const iconNode = typeof icon === 'undefined' ? <BuiltinIcon /> : icon;

  return (
    <div
      role="alert"
      className={cx(
        'sdn-alert',
        `sdn-alert--${variant}`,
        { 'sdn-alert--has-icon': iconNode },
        className
      )}
      {...restProps}
    >
      {iconNode && <div className="sdn-alert-icon">{iconNode}</div>}
      {title && <h5 className="sdn-alert-title">{title}</h5>}
      <div className="sdn-alert-content">{children}</div>
    </div>
  );
}
