import {
  InfoCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import {
  Alert as UiAlert,
  AlertDescription as UiAlertDescription,
  AlertTitle as UiAlertTitle,
} from '@/ui/alert';

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
    icon = variant === 'default' ? (
      <InfoCircledIcon className="sr-w-4 sr-h-4" />
    ) : (
      <ExclamationTriangleIcon className="sr-w-4 sr-h-4" />
    ),
    title,
    children,
    ...restProps
  } = props;

  return (
    <UiAlert variant={variant} {...restProps}>
      {icon}
      <UiAlertTitle>{title}</UiAlertTitle>
      <UiAlertDescription>{children}</UiAlertDescription>
    </UiAlert>
  );
}
