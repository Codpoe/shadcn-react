import { ComponentPropsWithoutRef } from 'react';
import {
  Tooltip as UiTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface TooltipContentProps
  extends ComponentPropsWithoutRef<typeof TooltipContent> {}

export interface TooltipProps
  extends ComponentPropsWithoutRef<typeof UiTooltip>,
    Omit<TooltipContentProps, 'content'> {
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps) {
  const {
    content,
    children,
    open,
    defaultOpen,
    onOpenChange,
    delayDuration = 400,
    disableHoverableContent,
    ...restProps
  } = props;
  return (
    <TooltipProvider>
      <UiTooltip
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        {content != null && (
          <TooltipContent {...restProps}>{content}</TooltipContent>
        )}
      </UiTooltip>
    </TooltipProvider>
  );
}
