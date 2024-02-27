import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <div className="sr-flex sr-items-center sr-space-x-4">
        <Skeleton className="sr-h-12 sr-w-12 !sr-rounded-full" />
        <div className="sr-space-y-2">
          <Skeleton className="sr-h-4 sr-w-[250px]" />
          <Skeleton className="sr-h-4 sr-w-[200px]" />
        </div>
      </div>
    );
  },
};

export const Card: Story = {
  render() {
    return (
      <div className="sr-flex sr-flex-col sr-space-y-3">
        <Skeleton className="sr-h-[125px] sr-w-[250px] sr-rounded-xl" />
        <div className="sr-space-y-2">
          <Skeleton className="sr-h-4 sr-w-[250px]" />
          <Skeleton className="sr-h-4 sr-w-[200px]" />
        </div>
      </div>
    );
  },
};
