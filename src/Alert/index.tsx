import { InfoIcon, AlertTriangleIcon } from 'lucide-react';
import {
  Alert as UiAlert,
  AlertDescription as UiAlertDescription,
  AlertTitle as UiAlertTitle,
} from '../ui/alert';
import { cn } from '../utils';

export type AlertVariant = 'default' | 'destructive';

export interface AlertProps {
  variant?: AlertVariant;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Alert(props: AlertProps) {
  const {
    variant = 'default',
    icon = variant === 'default' ? <InfoIcon /> : <AlertTriangleIcon />,
    title,
    children,
    ...restProps
  } = props;

  return (
    <UiAlert variant={variant} {...restProps}>
      <div className="sr-flex [&>svg]:sr-w-4 [&>svg]:sr-h-4">
        {icon}
        <div className="sr-ml-3">
          {title != null && (
            <UiAlertTitle className="!sr-leading-4">{title}</UiAlertTitle>
          )}
          {children != null && (
            <UiAlertDescription className={cn(title == null && '-sr-mt-0.5')}>
              {children}
            </UiAlertDescription>
          )}
        </div>
      </div>
    </UiAlert>
  );
}
