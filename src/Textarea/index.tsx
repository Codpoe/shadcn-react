import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import './index.css';

interface TextareaAutoSize {
  minRows?: number;
  maxRows?: number;
}

export interface TextareaProps {
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  showWordLimit?: boolean;
  autoSize?: TextareaAutoSize;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const LINE_HEIGHT = 22;

export const Textarea = forwardRef(function Textarea(
  props: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const {
    defaultValue,
    value,
    placeholder,
    minLength,
    maxLength,
    disabled,
    readOnly,
    showWordLimit,
    autoSize,
    onChange,
    className,
    style,
  } = props;

  const { minRows, maxRows }: Required<TextareaAutoSize> = {
    minRows: 2,
    maxRows: 4,
    ...autoSize,
  };

  const [innerValue, setInnerValue] = useState<string | undefined>(
    defaultValue
  );
  const finalValue = value ?? innerValue ?? '';
  const [displayValue, setDisplayValue] = useState<string>('');
  const compositionRef = useRef(false);

  const fakeTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = useState<number>(minRows);

  const handleClick = (ev: React.MouseEvent<HTMLSpanElement>) => {
    const textareaEl = ev.currentTarget.querySelector('textarea');
    textareaEl?.focus();
  };

  const updateValue = (newValue: string) => {
    if (typeof value === 'undefined') {
      setInnerValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleChange = (ev: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const newValue = ev.currentTarget.value;

    if (compositionRef.current) {
      setDisplayValue(newValue);
      return;
    }

    updateValue(newValue);
  };

  const handleComposition = (
    ev: React.CompositionEvent<HTMLTextAreaElement>
  ) => {
    if (ev.type === 'compositionend') {
      compositionRef.current = false;

      if (
        ev.currentTarget instanceof HTMLTextAreaElement &&
        navigator.userAgent.includes('Chrome')
      ) {
        updateValue(ev.currentTarget.value);
      }
      return;
    }

    compositionRef.current = true;
  };

  useEffect(() => {
    setDisplayValue(finalValue);
  }, [finalValue]);

  // watch fake textarea height changed
  useEffect(() => {
    if (fakeTextareaRef.current) {
      const { paddingTop, paddingBottom } = getComputedStyle(
        fakeTextareaRef.current
      );
      const pt = parseFloat(paddingTop);
      const pb = parseFloat(paddingBottom);
      const newRows = Math.round(
        (fakeTextareaRef.current.scrollHeight - pt - pb) / LINE_HEIGHT
      );

      setRows(Math.min(Math.max(newRows, minRows), maxRows));
    }
  }, [displayValue, minRows, maxRows]);

  return (
    <span
      className={cx('sdn-textarea', className)}
      style={style}
      data-disabled={disabled}
      onClick={handleClick}
    >
      <textarea
        ref={ref}
        className="sdn-textarea-inner"
        style={{ height: rows * LINE_HEIGHT }}
        value={displayValue}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onChange={handleChange}
      />
      <textarea
        ref={fakeTextareaRef}
        className="sdn-textarea-inner sdn-textarea-fake"
        value={displayValue}
        rows={1}
      />
      {showWordLimit && maxLength && (
        <span className="sdn-text-area-word-limit">
          {finalValue.length}/{maxLength}
        </span>
      )}
    </span>
  );
});
