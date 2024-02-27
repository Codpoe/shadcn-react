import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ratio: 16 / 9,
  },
  render(args) {
    return (
      <div className="sr-w-96">
        <AspectRatio {...args} className="sr-bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="sr-w-full sr-h-full sr-rounded-md sr-object-cover"
          />
        </AspectRatio>
      </div>
    );
  },
};
