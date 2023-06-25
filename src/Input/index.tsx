import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { Button } from '../Button';
import { XIcon, EyeIcon, EyeOffIcon } from '../icons';
import './index.css';

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  enterKeyHint?: React.InputHTMLAttributes<HTMLInputElement>['enterKeyHint'];
  minLength?: number;
  maxLength?: number;
  clearable?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Input = forwardRef(function Input(
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const {
    type,
    defaultValue,
    value,
    placeholder,
    enterKeyHint,
    minLength,
    maxLength,
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

  const showClearBtn = Boolean(clearable && finalValue);
  const showEyeBtn = type === 'password';

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
      style={style}
      data-disabled={disabled}
      onClick={handleClick}
    >
      {prefix && <span className="sdn-input-prefix">{prefix}</span>}
      <input
        ref={ref}
        className="sdn-input-inner"
        type={showPassword ? 'text' : type}
        value={displayValue}
        placeholder={placeholder}
        enterKeyHint={enterKeyHint}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onChange={handleChange}
      />
      {(showClearBtn || showEyeBtn) && (
        <span className="sdn-input-internal-actions">
          {showClearBtn && (
            <Button
              className="sdn-input-close-icon"
              variant="ghost"
              size="s"
              icon={<XIcon />}
              onClick={handleClear}
            />
          )}
          {showEyeBtn && (
            <Button
              className="sdn-input-password-icon"
              variant="ghost"
              size="s"
              icon={showPassword ? <EyeIcon /> : <EyeOffIcon />}
              onClick={() => setShowPassword(prev => !prev)}
            />
          )}
        </span>
      )}
      {suffix && <span className="sdn-input-suffix">{suffix}</span>}
    </span>
  );
});
