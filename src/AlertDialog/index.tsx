import {
  AlertDialogActionProps,
  AlertDialogCancelProps,
} from '@radix-ui/react-alert-dialog';
import {
  AlertDialog as UiAlertDialog,
  AlertDialogAction as UiAlertDialogAction,
  AlertDialogCancel as UiAlertDialogCancel,
  AlertDialogContent as UiAlertDialogContent,
  AlertDialogDescription as UiAlertDialogDescription,
  AlertDialogFooter as UiAlertDialogFooter,
  AlertDialogHeader as UiAlertDialogHeader,
  AlertDialogTitle as UiAlertDialogTitle,
  AlertDialogTrigger as UiAlertDialogTrigger,
} from '@/ui/alert-dialog';

export interface AlertDialogProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  okText?: React.ReactNode;
  okProps?: AlertDialogActionProps;
  cancelText?: React.ReactNode;
  cancelProps?: AlertDialogCancelProps;
  children: React.ReactNode;
}

export function AlertDialog(props: AlertDialogProps) {
  const {
    title,
    description,
    okText = 'Ok',
    okProps,
    cancelText = 'Cancel',
    cancelProps,
    children,
  } = props;

  return (
    <UiAlertDialog>
      <UiAlertDialogTrigger asChild>{children}</UiAlertDialogTrigger>
      <UiAlertDialogContent>
        <UiAlertDialogHeader>
          {title != null && <UiAlertDialogTitle>{title}</UiAlertDialogTitle>}
          {description != null && (
            <UiAlertDialogDescription>{description}</UiAlertDialogDescription>
          )}
        </UiAlertDialogHeader>
        <UiAlertDialogFooter>
          {cancelText != null && (
            <UiAlertDialogCancel {...cancelProps}>
              {cancelText}
            </UiAlertDialogCancel>
          )}
          {okText != null && (
            <UiAlertDialogAction {...okProps}>{okText}</UiAlertDialogAction>
          )}
        </UiAlertDialogFooter>
      </UiAlertDialogContent>
    </UiAlertDialog>
  );
}
