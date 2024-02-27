import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '.';
import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from '@/icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Toggle aria-label="Toggle italic">
        <FontBoldIcon className="sr-h-4 sr-w-4" />
      </Toggle>
    );
  },
};

export const Outline: Story = {
  render() {
    return (
      <Toggle variant="outline" aria-label="Toggle italic">
        <FontItalicIcon className="sr-h-4 sr-w-4" />
      </Toggle>
    );
  },
};

export const Disabled: Story = {
  render() {
    return (
      <Toggle aria-label="Toggle italic" disabled>
        <UnderlineIcon className="sr-h-4 sr-w-4" />
      </Toggle>
    );
  },
};
