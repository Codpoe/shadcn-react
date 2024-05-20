import { ComponentPropsWithoutRef, forwardRef } from 'react';
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

export const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(
  function Tooltip(props, ref) {
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
          <TooltipTrigger asChild ref={ref}>
            {children}
          </TooltipTrigger>
          {content != null && (
            <TooltipContent {...restProps}>{content}</TooltipContent>
          )}
        </UiTooltip>
      </TooltipProvider>
    );
  },
);

Tooltip.displayName = 'Tooltip';
