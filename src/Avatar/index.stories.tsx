import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: 'https://github.com/codpoe.png',
    alt: '@codpoe',
    fallback: 'CP',
  },
};
