import { ComponentPropsWithoutRef } from 'react';
import { ScrollBar, ScrollArea as UiScrollArea } from '../ui/scroll-area';

export interface ScrollAreaProps
  extends ComponentPropsWithoutRef<typeof UiScrollArea> {
  orientation?: 'vertical' | 'horizontal';
  scrollBarProps?: Omit<
    ComponentPropsWithoutRef<typeof ScrollBar>,
    'orientation'
  >;
}

function ScrollArea(props: ScrollAreaProps) {
  const {
    children,
    orientation = 'vertical',
    scrollBarProps,
    ...restProps
  } = props;
  return (
    <UiScrollArea {...restProps}>
      {children}
      <ScrollBar {...scrollBarProps} orientation={orientation} />
    </UiScrollArea>
  );
}

export { ScrollArea };
