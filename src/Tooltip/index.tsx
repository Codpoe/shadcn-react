import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'clsx';
import * as RadixTooltip from '../primitives/Tooltip';
import './index.css';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  /**
   * The open state of the tooltip when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;
  /**
   * The controlled open state of the tooltip.
   * Must be used in conjunction with `onChange`.
   */
  open?: boolean;
  /**
   * The duration from when the mouse enters a tooltip trigger until the tooltip opens.
   * @default 300
   */
  delayMs?: number;
  /**
   * Prevents `Tooltip` content from remaining open when hovering.
   * Disabling this has accessibility consequences.
   */
  disableHoverableContent?: boolean;
  /**
   * Specify a container element to portal the content into.
   * @default document.body
   */
  portalContainer?: HTMLElement;
  /**
   * The preferred side of the anchor to render against when open.
   * Will be reversed when collisions occur and avoidCollisions is enabled.
   * @default 'top'
   */
  side?: TooltipSide;
  /**
   * The preferred alignment against the anchor. May change when collisions occur.
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end';
  /**
   * The distance in pixels from the anchor.
   * @default 4
   */
  sideOffset?: number;
  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   */
  alignOffset?: number;
  /**
   * When true, overrides the side and align preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: boolean;
  /**
   * The element used as the collision boundary.
   * By default this is the viewport, though you can provide additional element(s) to be included in this check.
   */
  collisionBoundary?: Element | null | Array<Element | null>;
  /**
   * The distance in pixels from the boundary edges where collision detection should occur.
   * Accepts a number (same for all sides),
   * or a partial padding object, for example: `{ top: 20, left: 20 }`.
   */
  collisionPadding?: number | Partial<Record<TooltipSide, number>>;
  /**
   * The sticky behavior on the align axis.
   * "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary
   * whilst "always" will keep the content in the boundary regardless.
   * @default 'partial'
   */
  sticky?: 'partial' | 'always';
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: boolean;
  /**
   * Whether to show the arrow
   * @default true
   */
  showArrow?: boolean;
  /**
   * Event handler called when the open state of the tooltip changes.
   */
  onChange?: (open: boolean) => void;
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps) {
  const {
    defaultOpen,
    open,
    children,
    content,
    portalContainer,
    delayMs = 300,
    disableHoverableContent,
    side = 'top',
    align,
    sideOffset = 4,
    alignOffset,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    showArrow = true,
    onChange,
    className,
    style,
  } = props;

  const [innerOpen, setInnerOpen] = useState(defaultOpen);
  const finalOpen = typeof open === 'undefined' ? innerOpen : open;

  const handleChange = (newOpen: boolean) => {
    if (typeof open === 'undefined') {
      setInnerOpen(newOpen);
    }
    onChange?.(newOpen);
  };

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root
        delayDuration={delayMs}
        disableHoverableContent={disableHoverableContent}
        open={finalOpen}
        onOpenChange={handleChange}
      >
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal container={portalContainer} forceMount>
          <div className="sdn-tooltip-portal">
            <CSSTransition
              classNames="sdn-tooltip"
              in={finalOpen}
              timeout={200}
              mountOnEnter
              unmountOnExit
            >
              <div className="sdn-tooltip">
                <RadixTooltip.Content
                  className={cx('sdn-tooltip-content', className)}
                  style={style}
                  side={side}
                  align={align}
                  sideOffset={sideOffset}
                  alignOffset={alignOffset}
                  avoidCollisions={avoidCollisions}
                  collisionBoundary={collisionBoundary}
                  collisionPadding={collisionPadding}
                  sticky={sticky}
                  hideWhenDetached={hideWhenDetached}
                >
                  {content}
                  {showArrow && (
                    <RadixTooltip.Arrow asChild>
                      <div className="sdn-tooltip-arrow"></div>
                    </RadixTooltip.Arrow>
                  )}
                </RadixTooltip.Content>
              </div>
            </CSSTransition>
          </div>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
