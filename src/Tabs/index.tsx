import { ComponentPropsWithoutRef } from 'react';
import { Tabs as UiTabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

export interface TabsProps extends ComponentPropsWithoutRef<typeof UiTabs> {
  items?: {
    value: string;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
}

export function Tabs(props: TabsProps) {
  const { items, ...restProps } = props;

  if (!items) {
    <UiTabs {...restProps} />;
  }

  return (
    <UiTabs {...restProps}>
      <TabsList className="sr-w-full sr-flex">
        {items?.map(item => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="sr-flex-1"
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {items?.map(item => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </UiTabs>
  );
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
