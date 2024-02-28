import {
  Collapsible as UiCollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';

export type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from '@radix-ui/react-collapsible';

export const Collapsible: typeof UiCollapsible & {
  Trigger: typeof CollapsibleTrigger;
  Content: typeof CollapsibleContent;
} = UiCollapsible as any;

Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Content = CollapsibleContent;
