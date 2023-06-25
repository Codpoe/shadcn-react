import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { Button } from '../Button';
import { XIcon, EyeIcon, EyeOffIcon } from '../icons';
import './index.css';

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps) {
  const {
    type,
    defaultValue,
    value,
    placeholder,
    clearable,
    disabled,
    readOnly,
    prefix,
    suffix,
    onChange,
    className,
    style,
  } = props;

  const [innerValue, setInnerValue] = useState<string | undefined>(
    defaultValue
  );
  const finalValue = value ?? innerValue ?? '';
  const [displayValue, setDisplayValue] = useState<string>('');
  const compositionRef = useRef(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (ev: React.MouseEvent<HTMLSpanElement>) => {
    const inputEl = ev.currentTarget.querySelector('input');
    inputEl?.focus();
  };

  const updateValue = (newValue: string) => {
    if (typeof value === 'undefined') {
      setInnerValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const newValue = ev.currentTarget.value;

    if (compositionRef.current) {
      setDisplayValue(newValue);
      return;
    }

    updateValue(newValue);
  };

  const handleComposition = (ev: React.CompositionEvent<HTMLInputElement>) => {
    if (ev.type === 'compositionend') {
      compositionRef.current = false;

      if (
        ev.currentTarget instanceof HTMLInputElement &&
        navigator.userAgent.includes('Chrome')
      ) {
        updateValue(ev.currentTarget.value);
      }
      return;
    }

    compositionRef.current = true;
  };

  const handleClear = () => {
    updateValue('');
  };

  useEffect(() => {
    setDisplayValue(finalValue);
  }, [finalValue]);

  return (
    <span
      className={cx('sdn-input', className)}
      data-disabled={disabled}
      onClick={handleClick}
    >
      {prefix && <span className="sdn-input-prefix">{prefix}</span>}
      <input
        className="sdn-input-inner"
        style={style}
        type={showPassword ? 'text' : type}
        value={displayValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onChange={handleChange}
      />
      {clearable && finalValue && (
        <Button
          className="sdn-input-close-icon"
          variant="ghost"
          size="s"
          icon={<XIcon />}
          onClick={handleClear}
        />
      )}
      {type === 'password' && (
        <Button
          className="sdn-input-password-icon"
          variant="ghost"
          size="s"
          icon={showPassword ? <EyeIcon /> : <EyeOffIcon />}
          onClick={() => setShowPassword(prev => !prev)}
        />
      )}
      {suffix && <span className="sdn-input-suffix">{suffix}</span>}
    </span>
  );
}
