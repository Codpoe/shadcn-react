import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from '.';
import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from '@/icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'multiple',
  },
  render(args) {
    return (
      <ToggleGroup {...args}>
        <ToggleGroup.Item value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <UnderlineIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
      </ToggleGroup>
    );
  },
};

export const Disabled: Story = {
  args: {
    type: 'multiple',
    disabled: true,
  },
  render(args) {
    return (
      <ToggleGroup {...args}>
        <ToggleGroup.Item value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <UnderlineIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
      </ToggleGroup>
    );
  },
};

export const PartialDisabled: Story = {
  args: {
    type: 'multiple',
  },
  render(args) {
    return (
      <ToggleGroup {...args}>
        <ToggleGroup.Item value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="strikethrough"
          aria-label="Toggle strikethrough"
          disabled
        >
          <UnderlineIcon className="sr-h-4 sr-w-4" />
        </ToggleGroup.Item>
      </ToggleGroup>
    );
  },
};
