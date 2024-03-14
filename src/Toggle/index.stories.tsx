import type { Meta, StoryObj } from '@storybook/react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from '../icons';
import { Toggle } from '.';

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
        <BoldIcon className="sr-h-4 sr-w-4" />
      </Toggle>
    );
  },
};

export const Outline: Story = {
  render() {
    return (
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon className="sr-h-4 sr-w-4" />
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
