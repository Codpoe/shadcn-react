import {
  PopoverContentProps,
  PopoverProps as UiPopoverProps,
} from '@radix-ui/react-popover';
import {
  Popover as UiPopover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui/popover';

export interface PopoverProps
  extends UiPopoverProps,
    Omit<PopoverContentProps, 'content'> {
  content?: React.ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    content,
    children,
    open,
    defaultOpen,
    onOpenChange,
    modal,
    ...restProps
  } = props;

  return (
    <UiPopover
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      {content != null && (
        <PopoverContent {...restProps}>{content}</PopoverContent>
      )}
    </UiPopover>
  );
}
