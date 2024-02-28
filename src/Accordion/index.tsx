import {
  AccordionMultipleProps,
  AccordionSingleProps,
  AccordionItemProps as UiAccordionItemProps,
} from '@radix-ui/react-accordion';
import {
  Accordion as UiAccordion,
  AccordionContent as UiAccordionContent,
  AccordionItem as UiAccordionItem,
  AccordionTrigger as UiAccordionTrigger,
} from '../ui/accordion';

export type { AccordionSingleProps, AccordionMultipleProps };

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface AccordionItemProps {
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
  header?: React.ReactNode;
  /**
   * Whether or not an accordion item is disabled from user interaction.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Custom expand icon
   */
  expandIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface AccordionItemProps extends UiAccordionItemProps {
  trigger?: React.ReactNode;
}

export function Accordion(props: AccordionProps) {
  return (
    <UiAccordion
      {...(props.type === 'single' && { collapsible: true })}
      {...props}
    />
  );
}

export function AccordionItem(props: AccordionItemProps) {
  const { trigger, children, ...restProps } = props;

  return (
    <UiAccordionItem {...restProps}>
      <UiAccordionTrigger>{trigger}</UiAccordionTrigger>
      <UiAccordionContent>{children}</UiAccordionContent>
    </UiAccordionItem>
  );
}

Accordion.Item = AccordionItem;
