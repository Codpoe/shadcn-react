import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="sr-rounded-md sr-border sr-shadow"
    />
  );
}

export const Default: Story = {
  render() {
    return <CalendarDemo />;
  },
};
