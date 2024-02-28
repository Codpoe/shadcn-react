import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { CalendarIcon } from '../icons';
import { HoverCard } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <HoverCard
        className="sr-w-80"
        content={
          <div className="sr-flex sr-justify-between sr-space-x-4">
            <Avatar src="https://github.com/vercel.png" fallback="VC" />
            <div className="sr-space-y-1">
              <h4 className="sr-text-sm sr-font-semibold">@nextjs</h4>
              <p className="sr-text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="sr-flex sr-items-center sr-pt-2">
                <CalendarIcon className="sr-mr-2 sr-h-4 sr-w-4 sr-opacity-70" />{' '}
                <span className="sr-text-xs sr-text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        }
      >
        <Button variant="link">@nextjs</Button>
      </HoverCard>
    );
  },
};
