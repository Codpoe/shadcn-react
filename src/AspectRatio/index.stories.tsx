import { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '.';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof AspectRatio> = {
  args: {
    ratio: 16 / 9,
  },
  render: args => (
    <div style={{ width: '200px' }}>
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </div>
  ),
};
