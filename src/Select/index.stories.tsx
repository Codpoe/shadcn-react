import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Select className="!sr-w-[180px]" placeholder="Select a fruit">
        <Select.Group label="Fruits">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana" disabled>
            Banana
          </Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Group>
      </Select>
    );
  },
};
