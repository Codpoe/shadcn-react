import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as RadixSelect from '../primitives/Select';

export type SelectSide = 'top' | 'right' | 'bottom' | 'left';
export type SelectAlign = 'start' | 'center' | 'end';

export interface SelectProps {
  /**
   * The value of the select when initially rendered.
   * Use when you do not need to control the state of the select.
   */
  defaultValue?: string;
  /**
   * The controlled value of the select.
   * Should be used in conjunction with onValueChange.
   */
  value?: string;
  /**
   * The content that will be rendered when no `value` or `defaultValue` is set.
   */
  placeholder?: React.ReactNode;
  /**
   * When `true`, prevents the user from interacting with select.
   */
  disabled?: boolean;
  /**
   * Specify a container element to portal the content into.
   */
  portalContainer?: HTMLElement;
  /**
   * The preferred side of the anchor to render against when open.
   * Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @default 'bottom'
   */
  side?: SelectSide;
  /**
   * The distance in pixels from the anchor.
   * @default 4
   */
  sideOffset?: number;
  /**
   * The preferred alignment against the anchor.
   * May change when collisions occur.
   */
  align?: SelectAlign;
  /**
   * An offset in pixels from the "start" or "end" alignment options.
   * @default 0
   */
  alignOffset?: number;
  /**
   * When `true`, overrides the side and align preferences to prevent collisions with boundary edges.
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
   * Accepts a number (same for all sides), or a partial padding object,
   * @example { top: 20, left: 20 }
   * @default 10
   */
  collisionPadding?: number | Partial<Record<SelectSide, number>>;
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
  items?: SelectItemProps[];
  /**
   * Event handler called when the value changes.
   */
  onChange?: (value: string) => any;
  style?: React.CSSProperties;
  className?: string;
}

export interface SelectItemProps {
  label?: React.ReactNode;
  value: string;
  /**
   * Optional text used for typeahead purposes.
   * By default the typeahead behavior will use the .textContent of the Select.Item part.
   * Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;
  /**
   * When `true`, prevents the user from interacting with the item.
   */
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

interface SelectContextValue {
  setItems: React.Dispatch<React.SetStateAction<SelectItemProps[]>>;
}

const selectContext = createContext<SelectContextValue>({
  setItems: () => null,
});

export function Select(props: SelectProps) {
  const {
    defaultValue,
    value,
    placeholder,
    disabled,
    portalContainer,
    side = 'bottom',
    sideOffset = 4,
    align = 'start',
    alignOffset,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    items,
    children,
    style,
    className,
    onChange,
  } = props;

  const [itemsFromChildren, setItemsFromChildren] = useState<SelectItemProps[]>(
    []
  );
  const finalItems = items || itemsFromChildren;

  const contextValue = useMemo<SelectContextValue>(
    () => ({
      setItems: setItemsFromChildren,
    }),
    []
  );

  return (
    <selectContext.Provider value={contextValue}>
      {children}
    </selectContext.Provider>
  );
}

export function SelectItem(props: SelectItemProps) {
  const { value } = props;
  const { setItems } = useContext(selectContext);

  useEffect(() => {
    setItems(prevItems => prevItems.concat(props));

    return () => {
      setItems(prevItems => prevItems.filter(x => x.value !== value));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return null;
}

Select.Item = SelectItem;
