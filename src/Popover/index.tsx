import { useRef, useState } from 'react';
import cx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import * as RadixPopover from '../primitives/Popover';
import './index.css';

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left';
export type PopoverTriggerType = 'click' | 'hover';

export interface PopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: PopoverTriggerType;
  portalContainer?: HTMLElement;
  /**
   * The preferred side of the anchor to render against when open.
   * Will be reversed when collisions occur and avoidCollisions is enabled.
   * @default 'bottom'
   */
  side?: PopoverSide;
  /**
   * The preferred alignment against the anchor. May change when collisions occur.
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end';
  /**
   * The distance in pixels from the anchor.
   * @default 6
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
  collisionPadding?: number | Partial<Record<PopoverSide, number>>;
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
  onChange?: (open: boolean) => void;
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Popover(props: PopoverProps) {
  const {
    defaultOpen,
    open,
    trigger = 'click',
    children,
    content,
    portalContainer,
    side = 'bottom',
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

  const mouseEnterTimeoutRef = useRef<any>();
  const mouseLeaveTimeoutRef = useRef<any>();

  const handleChange = (newOpen: boolean) => {
    if (typeof open === 'undefined') {
      setInnerOpen(newOpen);
    }
    onChange?.(newOpen);
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      clearTimeout(mouseLeaveTimeoutRef.current);

      mouseEnterTimeoutRef.current = setTimeout(() => {
        if (!finalOpen) {
          handleChange(true);
        }
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      clearTimeout(mouseEnterTimeoutRef.current);

      mouseLeaveTimeoutRef.current = setTimeout(() => {
        if (finalOpen) {
          handleChange(false);
        }
      }, 200);
    }
  };

  const handleClick = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    // If triggerType is 'hover', prevent default click behavior
    if (trigger === 'hover') {
      ev.preventDefault();
    }
  };

  return (
    <RadixPopover.Root open={finalOpen} onOpenChange={handleChange}>
      <RadixPopover.Trigger
        asChild
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </RadixPopover.Trigger>
      <RadixPopover.Portal container={portalContainer} forceMount>
        <div className="sdn-popover-portal">
          <CSSTransition
            classNames="sdn-popover"
            in={finalOpen}
            timeout={200}
            mountOnEnter
            unmountOnExit
          >
            <div className="sdn-popover">
              <RadixPopover.Content
                className={cx('sdn-popover-content', className)}
                style={style}
                // forceMount
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                avoidCollisions={avoidCollisions}
                collisionBoundary={collisionBoundary}
                collisionPadding={collisionPadding}
                sticky={sticky}
                hideWhenDetached={hideWhenDetached}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {content}
                {showArrow && (
                  <RadixPopover.Arrow asChild>
                    <div className="sdn-popover-arrow"></div>
                  </RadixPopover.Arrow>
                )}
              </RadixPopover.Content>
            </div>
          </CSSTransition>
        </div>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
