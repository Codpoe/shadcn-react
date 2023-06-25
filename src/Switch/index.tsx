import cx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { Switch as RadixSwitch, SwitchThumb } from '../primitives/Switch';
import { Loader2Icon } from '../icons';
import './index.css';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void | Promise<void>;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps) {
  const { loading, className, children, onChange, ...restProps } = props;
  const [innerLoading, setInnerLoading] = useState(loading);
  const finalLoading = loading || innerLoading;

  const handleChange = (checked: boolean) => {
    if (finalLoading) {
      return;
    }

    const res = onChange?.(checked);

    if (typeof res?.then === 'function') {
      const timerId = setTimeout(() => {
        setInnerLoading(true);
      }, 50);

      res.finally(() => {
        clearTimeout(timerId);
        setInnerLoading(false);
      });
    }
  };

  return (
    <RadixSwitch
      className={cx(
        'sdn-switch',
        { 'sdn-switch--loading': finalLoading },
        className
      )}
      onCheckedChange={handleChange}
      {...restProps}
    >
      <div className="sdn-switch-toggle">
        <SwitchThumb className="sdn-switch-thumb">
          <CSSTransition
            classNames="sdn-switch-loader"
            in={finalLoading}
            timeout={200}
            mountOnEnter
            unmountOnExit
          >
            <Loader2Icon className="sdn-switch-loader" />
          </CSSTransition>
        </SwitchThumb>
      </div>
      {children && <label className="sdn-switch-label">{children}</label>}
    </RadixSwitch>
  );
}
