import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Radio',
  component: Radio.Group,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultValue: 'comfortable',
  },
  render(args) {
    return (
      <Radio.Group {...args}>
        <Radio value="default">Default</Radio>
        <Radio value="comfortable">Comfortable</Radio>
        <Radio value="compact" disabled>
          Compact
        </Radio>
      </Radio.Group>
    );
  },
};
