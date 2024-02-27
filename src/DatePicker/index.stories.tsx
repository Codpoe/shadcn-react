import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { DatePicker } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

function SingleDatePicker() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <DatePicker
      className="sr-w-[240px]"
      placeholder="Pick a date"
      calendarProps={{ mode: 'single', selected, onSelect: setSelected }}
    />
  );
}

export const Single: Story = {
  render() {
    return <SingleDatePicker />;
  },
};

function MultipleDatePicker() {
  const [selected, setSelected] = useState<Date[] | undefined>();

  return (
    <DatePicker
      className="sr-w-[240px]"
      placeholder="Pick a date"
      calendarProps={{ mode: 'multiple', selected, onSelect: setSelected }}
    />
  );
}

export const Multiple: Story = {
  render() {
    return <MultipleDatePicker />;
  },
};

function DateRangePicker() {
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: undefined,
  });

  return (
    <DatePicker
      className="sr-w-[240px]"
      placeholder="Pick a date"
      calendarProps={{ mode: 'range', selected, onSelect: setSelected }}
    />
  );
}

export const Range: Story = {
  render() {
    return <DateRangePicker />;
  },
};

function ClearableDatePicker() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <DatePicker
      className="sr-w-[240px]"
      placeholder="Pick a date"
      calendarProps={{ mode: 'single', selected, onSelect: setSelected }}
      onClear={() => setSelected(undefined)}
    />
  );
}

export const OnClear: Story = {
  render() {
    return <ClearableDatePicker />;
  },
};
