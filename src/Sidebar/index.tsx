import { cn } from '../utils';
import { Tooltip } from '../Tooltip';
import { Button, ButtonProps } from '../Button';
import { useControl } from '../hooks/use-control';

export interface SidebarGroupProps {
  title: React.ReactNode;
  children: SidebarItemProps[];
}

export interface SidebarItemProps {
  value: string;
  title: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export function isSidebarGroup(
  props: SidebarGroupProps | SidebarItemProps,
): props is SidebarGroupProps {
  return Boolean((props as any).children);
}

function findDefaultValue(
  items: (SidebarGroupProps | SidebarItemProps)[],
): string | undefined {
  for (const item of items) {
    if (isSidebarGroup(item)) {
      const defaultValue = findDefaultValue(item.children);
      return defaultValue;
    } else {
      return item.value;
    }
  }

  return undefined;
}

function SidebarItem(
  props: (SidebarGroupProps | SidebarItemProps) & {
    selected?: string;
    selectedVariant: ButtonProps['variant'];
    collapsed?: boolean;
    className?: string;
    onClick?: (value: string) => any;
  },
) {
  if (isSidebarGroup(props)) {
    const {
      title,
      children,
      selected,
      selectedVariant,
      collapsed,
      className,
      onClick,
    } = props;

    if (collapsed) {
      return (
        <>
          {children.map(item => (
            <SidebarItem
              {...item}
              key={item.value}
              selected={selected}
              selectedVariant={selectedVariant}
              collapsed
              onClick={onClick}
            />
          ))}
        </>
      );
    }

    return (
      <div className={className}>
        <h2 className="sr-mb-2 sr-px-4 sr-text-lg sr-font-semibold sr-tracking-tight">
          {title}
        </h2>
        <div className="sr-space-y-1">
          {children.map(item => (
            <SidebarItem
              {...item}
              key={item.value}
              selected={selected}
              selectedVariant={selectedVariant}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    );
  }

  const {
    value,
    title,
    icon,
    badge,
    selected,
    selectedVariant,
    collapsed,
    className,
    onClick,
  } = props;

  if (collapsed) {
    return (
      <Tooltip
        delayDuration={0}
        side="right"
        className="sr-flex sr-items-center"
        content={
          <>
            {title}
            {badge && (
              <span className="sr-ml-4 sr-text-muted-foreground">{badge}</span>
            )}
          </>
        }
      >
        <Button
          className={className}
          variant={value === selected ? selectedVariant : 'ghost'}
          size="icon"
          icon={icon}
          onClick={() => onClick?.(value)}
        >
          <span className="sr-sr-only">{title}</span>
        </Button>
      </Tooltip>
    );
  }

  return (
    <Button
      key={value}
      className={cn(className, 'sr-w-full !sr-justify-start')}
      variant={value === selected ? selectedVariant : 'ghost'}
      icon={icon}
      onClick={() => onClick?.(value)}
    >
      {title}
      {badge && <span className="sr-ml-auto">{badge}</span>}
    </Button>
  );
}

export interface SidebarProps {
  value?: string;
  defaultValue?: string;
  items: (SidebarGroupProps | SidebarItemProps)[];
  width?: number | string;
  collapsed?: boolean;
  /**
   * @default 'default'
   */
  selectedVariant?: ButtonProps['variant'];
  onChange?: (value: string) => any;
  className?: string;
  style?: React.CSSProperties;
}

export function Sidebar(props: SidebarProps) {
  const {
    items,
    value: propValue,
    defaultValue = findDefaultValue(items)!,
    width = 256,
    collapsed,
    selectedVariant = 'default',
    onChange,
    className,
    style,
  } = props;

  const [value, setValue] = useControl(defaultValue, propValue, onChange);

  return (
    <aside
      data-collapsed={collapsed}
      className={cn(
        className,
        'sr-group sr-py-4 data-[collapsed=true]:sr-py-2',
      )}
      style={{ width: collapsed ? undefined : width, ...style }}
    >
      <div
        className={cn(
          'sr-space-y-1',
          collapsed ? 'sr-px-2 sr-flex sr-flex-col sr-items-center' : 'sr-px-3',
        )}
      >
        {items.map((item, index) => {
          return (
            <SidebarItem
              {...item}
              key={index}
              selected={value}
              selectedVariant={selectedVariant}
              collapsed={collapsed}
              className={cn(
                index > 0 &&
                  !collapsed &&
                  (isSidebarGroup(item) || isSidebarGroup(items[index - 1])) &&
                  '!sr-mt-8',
              )}
              onClick={setValue}
            />
          );
        })}
      </div>
    </aside>
  );
}
