import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Slider className="!sr-w-60" defaultValue={[50]} max={100} step={1} />
    );
  },
};
