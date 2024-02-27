import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast } from '.';
import { Button } from '@/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <div className="sr-w-96 sr-h-96 sr-flex sr-justify-center">
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast('Event has been created', {
              description: new Date().toTimeString(),
              action: {
                label: 'Undo',
                // eslint-disable-next-line no-console
                onClick: () => console.log('Undo'),
              },
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};
