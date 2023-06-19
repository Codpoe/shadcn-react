import React from 'react';
import cx from 'clsx';
import * as RadixAccordion from '../primitives/Accordion';
import { ChevronDownIcon } from '../icons';
import './index.css';

export interface AccordionBaseProps {
  /**
   * Whether or not an accordion is disabled from user interaction.
   *
   * @default false
   */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface AccordionSingleProps extends AccordionBaseProps {
  type?: 'single';
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onChange?: (value: string) => void;
}

export interface AccordionMultipleProps extends AccordionBaseProps {
  type?: 'multiple';
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  value?: string[];
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string[];
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onChange?(value: string[]): void;
}

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

function AccordionItem(props: AccordionItemProps) {
  const {
    header,
    expandIcon = (
      <ChevronDownIcon className={cx('sdn-accordion-expand-icon')} size={16} />
    ),
    children,
    className,
    ...restProps
  } = props;

  return (
    <RadixAccordion.Item
      className={cx('sdn-accordion-item', className)}
      {...restProps}
    >
      <RadixAccordion.Header className={cx('sdn-accordion-header')}>
        <RadixAccordion.Trigger className={cx('sdn-accordion-trigger')}>
          {header}
          {expandIcon}
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className={cx('sdn-accordion-content')}>
        <div className={cx('sdn-accordion-inner-content')}>{children}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}

export function Accordion(props: AccordionProps) {
  const {
    type = 'single',
    className,
    children,
    onChange,
    ...restProps
  } = props;

  return (
    <RadixAccordion.Root
      className={cx('sdn-accordion', className)}
      type={type as any}
      collapsible
      onValueChange={onChange as any}
      {...restProps}
    >
      {children}
    </RadixAccordion.Root>
  );
}

Accordion.Item = AccordionItem;
