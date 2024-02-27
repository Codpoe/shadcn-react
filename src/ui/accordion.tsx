import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('sr-border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="sr-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'sr-flex sr-flex-1 sr-items-center sr-justify-between sr-py-4 sr-text-sm sr-font-medium sr-transition-all hover:sr-underline [&[data-state=open]>svg]:sr-rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="sr-h-4 sr-w-4 sr-shrink-0 sr-text-muted-foreground sr-transition-transform sr-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="sr-overflow-hidden sr-text-sm data-[state=closed]:sr-animate-accordion-up data-[state=open]:sr-animate-accordion-down"
    {...props}
  >
    <div className={cn('sr-pb-4 sr-pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
