import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Textarea className="!sr-w-96" placeholder="Type your message here." />
    );
  },
};

export const Disabled: Story = {
  render() {
    return (
      <Textarea
        className="!sr-w-96"
        placeholder="Type your message here."
        disabled
      />
    );
  },
};
