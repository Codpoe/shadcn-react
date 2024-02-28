import {
  HoverCardContentProps,
  HoverCardProps as UiHoverCardProps,
} from '@radix-ui/react-hover-card';
import {
  HoverCard as UiHoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';

export interface HoverCardProps
  extends UiHoverCardProps,
    Omit<HoverCardContentProps, 'content'> {
  content?: React.ReactNode;
}

export function HoverCard(props: HoverCardProps) {
  const {
    content,
    children,
    open,
    defaultOpen,
    openDelay,
    closeDelay,
    onOpenChange,
    ...restProps
  } = props;

  return (
    <UiHoverCard
      open={open}
      defaultOpen={defaultOpen}
      openDelay={openDelay}
      closeDelay={closeDelay}
      onOpenChange={onOpenChange}
    >
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent {...restProps}>{content}</HoverCardContent>
    </UiHoverCard>
  );
}
