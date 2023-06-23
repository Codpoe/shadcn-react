import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import cx from 'clsx';
import * as RadixTabs from '../primitives/Tabs';
import './index.css';

export interface TabsProps {
  /**
   * The value of the tab that should be active when initially rendered.
   * Use when you do not need to control the state of the tabs.
   */
  defaultValue?: string;
  /**
   * The controlled value of the tab to activate.
   * Should be used in conjunction with `onChange`.
   */
  value?: string;
  /**
   * The orientation of the component.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  stretch?: boolean;
  /**
   * When `automatic`, tabs are activated when receiving focus.
   * When `manual`, tabs are activated when clicked.
   * @default 'manual'
   */
  activationMode?: 'automatic' | 'manual';
  /**
   * When `true`, keyboard navigation will loop from last tab to first, and vice versa.
   * @default true
   */
  loop?: boolean;
  items?: TabItemProps[];
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface TabItemProps {
  label?: React.ReactNode;
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string;
  /**
   * When `true`, prevents the user from interacting with the tab.
   */
  disabled?: boolean;
  children?: React.ReactNode;
}

interface TabsContextValue {
  setItems: React.Dispatch<React.SetStateAction<TabItemProps[]>>;
}

const tabsContext = createContext<TabsContextValue>({ setItems: () => null });

export function Tabs(props: TabsProps) {
  const {
    stretch,
    activationMode = 'automatic',
    children,
    items,
    className,
    onChange,
    ...restProps
  } = props;
  const [itemsFromChildren, setItemsFromChildren] = useState<TabItemProps[]>(
    []
  );
  const finalItems = items || itemsFromChildren;

  const contextValue = useMemo<TabsContextValue>(
    () => ({
      setItems: setItemsFromChildren,
    }),
    []
  );

  return (
    <tabsContext.Provider value={contextValue}>
      {children}
      <RadixTabs.Root
        className={cx('sdn-tabs', { 'sdn-tabs--stretch': stretch }, className)}
        defaultValue={finalItems[0]?.value}
        activationMode={activationMode}
        onValueChange={onChange}
        {...restProps}
      >
        <RadixTabs.List className="sdn-tabs-list">
          {finalItems.map(x => (
            <RadixTabs.Trigger
              key={x.value}
              className="sdn-tabs-trigger"
              value={x.value}
              disabled={x.disabled}
            >
              {x.label}
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>
        {finalItems.map(x => (
          <RadixTabs.Content
            key={x.value}
            className="sdn-tabs-content"
            value={x.value}
          >
            {x.children}
          </RadixTabs.Content>
        ))}
      </RadixTabs.Root>
    </tabsContext.Provider>
  );
}

function TabItem(props: TabItemProps) {
  const { value } = props;
  const { setItems } = useContext(tabsContext);

  useEffect(() => {
    setItems(prevItems => prevItems.concat(props));

    return () => {
      setItems(prevItems => prevItems.filter(x => x.value !== value));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return null;
}

Tabs.Item = TabItem;
