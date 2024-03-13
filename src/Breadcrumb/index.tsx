import React, { ComponentPropsWithoutRef } from 'react';
import {
  Breadcrumb as UiBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem as UiBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbEllipsis,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { cn } from '../utils';

export interface BreadcrumbProps {
  separator?: React.ReactNode;
  maxCount?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Breadcrumb(props: BreadcrumbProps) {
  const { separator, maxCount, children, className, style } = props;

  const itemList = React.Children.toArray(children).filter(
    item => (item as any)?.type === BreadcrumbItem,
  );

  if (!!maxCount && itemList.length > maxCount) {
    let moreList: React.ReactNode[] = [];
    let moreIndex = 0;

    if (maxCount === 1) {
      moreList = itemList.splice(0, itemList.length - maxCount);
      moreIndex = 0;
    } else {
      moreList = itemList.splice(1, itemList.length - maxCount);
      moreIndex = 1;
    }

    itemList.splice(
      moreIndex,
      0,
      <BreadcrumbItem>
        <Dropdown
          content={
            <>
              {moreList.map((item, index) => (
                <Dropdown.Item
                  key={index}
                  className={cn(
                    '!sr-p-0 [&>*]:sr-w-full',
                    (item as any)?.props.variant === 'link'
                      ? '[&_a]:sr-px-2 [&_a]:sr-py-1.5'
                      : '[&>*]:sr-px-2 [&>*]:sr-py-1.5',
                  )}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </>
          }
        >
          <Button variant="ghost" size="icon" icon={<BreadcrumbEllipsis />} />
        </Dropdown>
      </BreadcrumbItem>,
    );
  }

  return (
    <UiBreadcrumb className={className} style={style}>
      <BreadcrumbList>
        {itemList.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index !== itemList.length - 1 && (
              <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </UiBreadcrumb>
  );
}

export interface BreadcrumbItemProps
  extends ComponentPropsWithoutRef<typeof UiBreadcrumbItem> {
  variant?: 'default' | 'link' | 'page';
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (props, ref) => {
    const { variant = 'default', children, ...restProps } = props;

    return (
      <UiBreadcrumbItem ref={ref} {...restProps}>
        {variant === 'default' && children}
        {variant === 'link' && (
          <BreadcrumbLink asChild>
            <span className="sr-w-full sr-h-full sr-flex sr-items-center [&>a]:sr-w-full [&>a]:sr-h-full [&>a]:sr-flex [&>a]:sr-items-center [&>a]:sr-text-inherit">
              {children}
            </span>
          </BreadcrumbLink>
        )}
        {variant === 'page' && <BreadcrumbPage>{children}</BreadcrumbPage>}
      </UiBreadcrumbItem>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

Breadcrumb.Item = BreadcrumbItem;
