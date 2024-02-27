import { ComponentProps } from 'react';
import {
  ToggleGroup as UiToggleGroup,
  ToggleGroupItem,
} from '@/ui/toggle-group';

export type ToggleGroupProps = ComponentProps<typeof UiToggleGroup>;

export interface ToggleGroupItemProps
  extends ComponentProps<typeof ToggleGroupItem> {}

export const ToggleGroup: typeof UiToggleGroup & {
  Item: typeof ToggleGroupItem;
} = UiToggleGroup as any;

ToggleGroup.Item = ToggleGroupItem;
