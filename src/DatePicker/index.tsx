import React, { MouseEvent, useMemo, useRef } from 'react';
import { CalendarIcon, Cross2Icon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import {
  DateRange,
  DayPickerMultipleProps,
  DayPickerRangeProps,
  DayPickerSingleProps,
} from 'react-day-picker';
import { cn } from '../utils';
import { Button, ButtonProps } from '../Button';
import { Calendar } from '../Calendar';
import { Popover } from '../Popover';

export interface DatePickerProps extends ButtonProps {
  calendarProps?:
    | DayPickerSingleProps
    | DayPickerMultipleProps
    | DayPickerRangeProps;
  placeholder?: React.ReactNode;
  /**
   * @default 'yyyy-MM-dd'
   */
  formatStr?: string;
  format?: (selected: Date | Date[] | DateRange) => React.ReactNode;
  onClear?: () => any;
}

export function DatePicker(props: DatePickerProps) {
  const {
    calendarProps,
    placeholder,
    formatStr = 'yyyy-MM-dd',
    format: propFormat,
    className,
    onClear,
    ...restProps
  } = props;
  const { selected } = calendarProps || {};
  const propFormatRef = useRef(propFormat);
  propFormatRef.current = propFormat;

  const formatted = useMemo(() => {
    if (!selected) {
      return undefined;
    }

    if (propFormatRef.current) {
      return propFormatRef.current(selected);
    }

    if (selected instanceof Date) {
      return format(selected as Date, formatStr);
    }

    if (Array.isArray(selected)) {
      return selected.map(date => format(date, formatStr)).join(', ');
    }

    if (selected.from || selected.to) {
      return (
        (selected.from ? format(selected.from, formatStr) : '') +
        ' ~ ' +
        (selected.to ? format(selected.to, formatStr) : '')
      );
    }

    return undefined;
  }, [selected, formatStr]);

  const handleClear = (ev: MouseEvent) => {
    ev.stopPropagation();
    onClear?.();
  };

  return (
    <Popover
      className="sr-w-auto !sr-p-0"
      align="start"
      content={<Calendar initialFocus {...calendarProps} />}
    >
      <Button
        variant={'outline'}
        className={cn(
          '!sr-justify-start sr-text-left sr-font-normal sr-group',
          !formatted && 'sr-text-muted-foreground',
          className,
        )}
        icon={<CalendarIcon className="sr-mr-2 sr-shrink-0 sr-h-4 sr-w-4" />}
        {...restProps}
      >
        <span className="sr-flex-1 sr-overflow-x-auto sr-scrollbar-none">
          {formatted ?? placeholder}
        </span>
        {onClear && formatted != null && (
          <span
            className="sr-ml-2 -sr-mr-2.5 sr-shrink-0 sr-h-6 sr-w-6 sr-flex sr-justify-center sr-items-center sr-opacity-0 group-hover:sr-opacity-50 hover:!sr-opacity-100"
            onClick={handleClear}
          >
            <Cross2Icon className="sr-h-4 sr-w-4" />
          </span>
        )}
      </Button>
    </Popover>
  );
}
