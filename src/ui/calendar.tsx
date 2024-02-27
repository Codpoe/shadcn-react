import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils';
import { buttonVariants } from '@/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('sr-p-3 sr-group', className)}
      classNames={{
        months:
          'sr-flex sr-flex-col sm:sr-flex-row sr-space-y-4 sm:sr-space-x-4 sm:sr-space-y-0',
        month: 'sr-space-y-4',
        caption:
          'sr-flex sr-justify-center sr-pt-1 sr-relative sr-items-center',
        caption_label: 'sr-text-sm sr-font-medium',
        nav: 'sr-space-x-1 sr-flex sr-items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'group-[]:sr-h-7 group-[]:sr-w-7 sr-bg-transparent group-[]:sr-p-0 sr-opacity-50 hover:sr-opacity-100',
        ),
        nav_button_previous: 'sr-absolute sr-left-1',
        nav_button_next: 'sr-absolute sr-right-1',
        table: 'sr-w-full sr-border-collapse sr-space-y-1',
        head_row: 'sr-flex',
        head_cell:
          'sr-text-muted-foreground sr-rounded-md sr-w-8 sr-font-normal sr-text-[0.8rem]',
        row: 'sr-flex sr-w-full sr-mt-2',
        cell: cn(
          'sr-relative sr-p-0 sr-text-center sr-text-sm focus-within:sr-relative focus-within:sr-z-20 [&:has([aria-selected])]:sr-bg-accent [&:has([aria-selected].day-outside)]:sr-bg-accent/50 [&:has([aria-selected].day-range-end)]:sr-rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:sr-rounded-r-md [&:has(>.day-range-start)]:sr-rounded-l-md first:[&:has([aria-selected])]:sr-rounded-l-md last:[&:has([aria-selected])]:sr-rounded-r-md'
            : '[&:has([aria-selected])]:sr-rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'group-[]:sr-h-8 group-[]:sr-w-8 group-[]:sr-p-0 sr-font-normal aria-selected:sr-opacity-100',
        ),
        day_range_start: 'sr-day-range-start',
        day_range_end: 'sr-day-range-end',
        day_selected:
          'sr-bg-primary sr-text-primary-foreground hover:sr-bg-primary hover:sr-text-primary-foreground focus:sr-bg-primary focus:sr-text-primary-foreground',
        day_today: 'sr-bg-accent sr-text-accent-foreground',
        day_outside:
          'sr-day-outside sr-text-muted-foreground sr-opacity-50 sr- aria-selected:sr-bg-accent/50 aria-selected:sr-text-muted-foreground aria-selected:sr-opacity-30',
        day_disabled: 'sr-text-muted-foreground sr-opacity-50',
        day_range_middle:
          'aria-selected:sr-bg-accent aria-selected:sr-text-accent-foreground',
        day_hidden: 'sr-invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeftIcon className="sr-h-4 sr-w-4" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRightIcon className="sr-h-4 sr-w-4" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
