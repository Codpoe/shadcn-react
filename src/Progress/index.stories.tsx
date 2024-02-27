import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <div className="sr-w-96">
        <Progress value={33} />
      </div>
    );
  },
};
