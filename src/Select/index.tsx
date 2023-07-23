import {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import cx from 'clsx';
import * as RadixSelect from '../primitives/Select';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { ChevronDownIcon, CheckIcon, XIcon } from '../icons';
import { findParentElement } from '../utils';
import './index.css';

export type SelectSide = 'top' | 'right' | 'bottom' | 'left';
export type SelectAlign = 'start' | 'center' | 'end';

export interface CommonSelectProps {
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
  /**
   * Whether to show the clear icon
   * @default true
   */
  clearable?: boolean;
  items?: SelectItemProps[];
  renderSelectedItem?: (
    selectedItem: SelectItemProps,
    index: number
  ) => React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}

export interface SingleSelectProps extends CommonSelectProps {
  multiple?: false;
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
   * Event handler called when the value changes.
   */
  onChange?: (value?: string) => any;
}

export interface MultipleSelectProps extends CommonSelectProps {
  multiple: true;
  /**
   * The value of the select when initially rendered.
   * Use when you do not need to control the state of the select.
   */
  defaultValue?: string[];
  /**
   * The controlled value of the select.
   * Should be used in conjunction with onValueChange.
   */
  value?: string[];
  /**
   * Event handler called when the value changes.
   */
  onChange?: (value: string[]) => any;
}

export interface SelectItemProps {
  label?: React.ReactNode;
  value: string;
  /**
   * When `true`, prevents the user from interacting with the item.
   */
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export interface SelectGroupProps {
  label?: React.ReactNode;
  items: SelectItemProps[];
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

interface SelectContextValue {
  setItems: React.Dispatch<
    React.SetStateAction<(SelectItemProps | SelectGroupProps)[]>
  >;
}

interface GroupContextValue {
  setItems: React.Dispatch<React.SetStateAction<SelectItemProps[]>>;
}

const selectContext = createContext<SelectContextValue>({
  setItems: () => null,
});

const groupContext = createContext<GroupContextValue>({
  setItems: () => null,
});

const transitionStateToClassName: Partial<Record<TransitionStatus, string>> = {
  entering: 'sdn-select-content-entering',
  entered: 'sdn-select-content-entered',
  exiting: 'sdn-select-content-exiting',
  exited: 'sdn-select-content-exited',
};

const ghostValue = '__SDN_GHOST_VALUE__';

export function Select(props: SingleSelectProps | MultipleSelectProps) {
  const {
    multiple,
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
    clearable = true,
    items,
    renderSelectedItem,
    children,
    className,
    style,
    contentClassName,
    contentStyle,
    onChange,
  } = props;

  const [open, setOpen] = useState(false);
  const [transitionOpen, setTransitionOpen] = useState(false);

  const [itemsFromChildren, setItemsFromChildren] = useState<
    (SelectItemProps | SelectGroupProps)[]
  >([]);
  const finalItems = items || itemsFromChildren;

  const [innerValue, setInnerValue] = useState(defaultValue);
  const isControlled = 'value' in props;
  const finalValue = isControlled ? value : innerValue;

  const leafItems = useMemo<SelectItemProps[]>(
    () =>
      finalItems.flatMap(
        x => (x as SelectGroupProps).items || [x as SelectItemProps]
      ),
    [finalItems]
  );

  const selectedItems = useMemo(
    () =>
      ((typeof finalValue === 'string' ? [finalValue] : finalValue) || [])
        .map(x => leafItems.find(item => item.value === x))
        .filter((x): x is SelectItemProps => !!x),
    [leafItems, finalValue]
  );

  const showClearBtn = clearable && selectedItems.length > 0;

  const sortedSelectedItems = useMemo(
    () =>
      leafItems.filter(x =>
        multiple
          ? (finalValue as string[] | undefined)?.includes(x.value)
          : x.value === finalValue
      ),
    [multiple, leafItems, finalValue]
  );

  const contextValue = useMemo<SelectContextValue>(
    () => ({
      setItems: setItemsFromChildren,
    }),
    []
  );

  const handleChange = useCallback(
    (itemValue?: string) => {
      if (multiple) {
        if (!isControlled) {
          let newValue: string[] = [];
          setInnerValue(prev => {
            return (newValue = toggleItemValue(
              (prev || []) as string[],
              itemValue
            ));
          });
          onChange?.(newValue);
          return;
        }

        onChange?.(toggleItemValue(value || [], itemValue));
        return;
      }

      if (!isControlled) {
        setInnerValue(itemValue);
      }
      onChange?.(itemValue);
    },
    [multiple, isControlled, value, onChange]
  );

  const handleClear = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    handleChange(undefined);
  };

  const handleOpenChange = (newOpen: boolean) => {
    // Avoid close when it's multiple select
    if (multiple && !newOpen) {
      return;
    }
    setTransitionOpen(newOpen);
    if (newOpen) {
      setOpen(true);
    }
  };

  const handleClose = (ev: Event) => {
    if (
      ev.target &&
      findParentElement(ev.target as HTMLElement, parent =>
        parent.classList.contains('sdn-tag-close')
      )
    ) {
      ev.preventDefault();
      return;
    }

    setTransitionOpen(false);
  };

  const handleTransitionExited = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <selectContext.Provider value={contextValue}>
      {children}
      <RadixSelect.Root
        value={ghostValue}
        open={open}
        disabled={disabled}
        onOpenChange={handleOpenChange}
        onValueChange={handleChange}
      >
        <RadixSelect.Trigger
          className={cx('sdn-select-trigger', className)}
          style={style}
          {...(transitionOpen && { 'data-open': true })}
          {...(showClearBtn && { 'data-show-clear-btn': true })}
        >
          <RadixSelect.Value asChild>
            {selectedItems.length ? (
              <div
                className="sdn-select-value"
                {...(multiple && { 'data-multiple': true })}
              >
                {selectedItems.map((x, index) => (
                  <Fragment key={x.value}>
                    {renderSelectedItem?.(x, index) ?? (
                      <SelectedItemRenderer
                        item={x}
                        multiple={multiple}
                        onClose={() => handleChange(x.value)}
                      />
                    )}
                  </Fragment>
                ))}
              </div>
            ) : (
              <div className="sdn-select-placeholder">{placeholder}</div>
            )}
          </RadixSelect.Value>
          <div className="sdn-select-actions">
            {clearable && (
              <Button
                className="sdn-select-clear-icon"
                variant="ghost"
                size="s"
                icon={<XIcon />}
                onClick={handleClear}
                onPointerDownCapture={ev => {
                  ev.stopPropagation();
                }}
              />
            )}
            <ChevronDownIcon
              className="sdn-select-chevron-down-icon"
              {...(transitionOpen && { 'data-open': true })}
            />
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal container={portalContainer}>
          <Transition
            in={transitionOpen}
            timeout={200}
            mountOnEnter
            unmountOnExit
            onExited={handleTransitionExited}
          >
            {state => (
              <RadixSelect.Content
                className={cx(
                  'sdn-select-content',
                  transitionStateToClassName[state],
                  contentClassName
                )}
                style={contentStyle}
                position="popper"
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                avoidCollisions={avoidCollisions}
                collisionBoundary={collisionBoundary}
                collisionPadding={collisionPadding}
                sticky={sticky}
                hideWhenDetached={hideWhenDetached}
                onCloseAutoFocus={ev => ev.preventDefault()}
                onPointerDownOutside={handleClose}
                onEscapeKeyDown={handleClose}
              >
                <RadixSelect.Viewport className="sdn-select-viewport">
                  {finalItems.map((x, index) => {
                    if (checkIsGroup(x)) {
                      return (
                        <RadixSelect.Group
                          key={
                            x.items?.map(j => j.value).join(',') ||
                            `group-${index}`
                          }
                          className={cx('sdn-select-group', x.className)}
                          style={x.style}
                        >
                          <RadixSelect.Label className="sdn-select-group-label">
                            {x.label}
                          </RadixSelect.Label>
                          {x.items.map(item => (
                            <SelectItemRenderer
                              key={item.value}
                              open={transitionOpen}
                              item={item}
                              selectedItems={sortedSelectedItems}
                            />
                          ))}
                        </RadixSelect.Group>
                      );
                    }

                    return (
                      <SelectItemRenderer
                        key={x.value}
                        open={transitionOpen}
                        item={x}
                        selectedItems={sortedSelectedItems}
                      />
                    );
                  })}
                </RadixSelect.Viewport>
              </RadixSelect.Content>
            )}
          </Transition>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </selectContext.Provider>
  );
}

function checkIsGroup(
  item: SelectItemProps | SelectGroupProps
): item is SelectGroupProps {
  return Boolean((item as SelectGroupProps).items);
}

function SelectedItemRenderer(props: {
  item: SelectItemProps;
  multiple?: boolean;
  onClose: () => any;
}) {
  const { item, multiple, onClose } = props;

  if (multiple) {
    return (
      <Tag
        className="sdn-select-value-tag"
        variant="secondary"
        closable
        onClose={onClose}
      >
        {item.label ?? item.children}
      </Tag>
    );
  }

  return (
    <span className="sdn-select-value-text">{item.label ?? item.children}</span>
  );
}

function SelectItemRenderer(props: {
  open: boolean;
  item: SelectItemProps;
  selectedItems: SelectItemProps[];
}) {
  const { open, item, selectedItems } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  const [showFocus, setShowFocus] = useState(false);

  const selected = useMemo(
    () => selectedItems.some(x => x.value === item.value),
    [item, selectedItems]
  );

  useEffect(() => {
    setShowFocus(open);
  }, [open]);

  useEffect(() => {
    if (
      !showFocus &&
      itemRef.current &&
      open &&
      item.value === selectedItems[0]?.value
    ) {
      setTimeout(() => {
        itemRef.current?.focus();
      }, 0);
    }
  }, [showFocus, open, item, selectedItems]);

  return (
    <RadixSelect.Item
      key={item.value}
      ref={itemRef}
      className={cx('sdn-select-item', item.className)}
      style={item.style}
      value={item.value}
      disabled={item.disabled}
      {...(showFocus && { 'data-show-focus': showFocus })}
    >
      <RadixSelect.ItemText>{item.label ?? item.children}</RadixSelect.ItemText>
      {selected && (
        <span className="sdn-select-item-indicator">
          <CheckIcon />
        </span>
      )}
    </RadixSelect.Item>
  );
}

function SelectItem(props: SelectItemProps) {
  const { value } = props;
  const { setItems } = useContext(selectContext);

  useEffect(() => {
    setItems(prevItems => prevItems.concat(props));

    return () => {
      setItems(prevItems =>
        prevItems.filter(x => ('value' in x ? x.value !== value : true))
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return null;
}

function SelectGroup(props: SelectGroupProps) {
  const { children } = props;
  const { setItems } = useContext(selectContext);
  const [itemsFromChildren, setItemsFromChildren] = useState<SelectItemProps[]>(
    []
  );

  const contextValue = useMemo<GroupContextValue>(
    () => ({
      setItems: setItemsFromChildren,
    }),
    []
  );

  useEffect(() => {
    const group: SelectGroupProps = {
      ...props,
      items: props.items || itemsFromChildren,
    };

    setItems(prevItems => prevItems.concat(group));

    return () => {
      setItems(prevItems => prevItems.filter(x => x !== group));
    };
  }, [props, itemsFromChildren, setItems]);

  return (
    <groupContext.Provider value={contextValue}>
      {children}
    </groupContext.Provider>
  );
}

function toggleItemValue(value: any[], itemValue: any): any[] {
  if (typeof itemValue === 'undefined') {
    return [];
  }

  const index = value.indexOf(itemValue);

  if (index >= 0) {
    const newValue = value.slice();
    newValue.splice(index, 1);
    return newValue;
  } else {
    return value.concat(itemValue);
  }
}

Select.Item = SelectItem;
Select.Group = SelectGroup;
