import cx from 'clsx';
import {
  RadioGroup as RadixRadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from '../primitives/RadioGroup';
import './index.css';

export interface RadioProps {
  value: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Radio(props: RadioProps) {
  const { children, className, ...restProps } = props;
  return (
    <RadioGroupItem className={cx('sdn-radio', className)} {...restProps}>
      <RadioGroupIndicator
        className="sdn-radio-indicator"
        forceMount
      ></RadioGroupIndicator>
      {children && <label className="sdn-radio-label">{children}</label>}
    </RadioGroupItem>
  );
}

// -----------------------------------------------
// Group

export interface RadioGroupItemProps extends Omit<RadioProps, 'children'> {
  label?: React.ReactNode;
}

export interface RadioGroupProps {
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  /**
   * Layout
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical';
  items?: RadioGroupItemProps[];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}

function RadioGroup(props: RadioGroupProps) {
  const {
    layout = 'horizontal',
    items,
    children,
    className,
    onChange,
    ...restProps
  } = props;

  return (
    <RadixRadioGroup
      className={cx('sdn-radio-group', `sdn-radio-group--${layout}`, className)}
      onValueChange={onChange}
      {...restProps}
    >
      {children ??
        items?.map(({ label, value, ...rest }) => (
          <Radio key={value} value={value} {...rest}>
            {label ?? value}
          </Radio>
        ))}
    </RadixRadioGroup>
  );
}

Radio.Group = RadioGroup;
