import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <div>
        <div className="sr-space-y-1">
          <h4 className="sr-text-sm sr-font-medium sr-leading-none">
            Radix Primitives
          </h4>
          <p className="sr-text-sm sr-text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="sr-my-4" />
        <div className="sr-flex sr-h-5 sr-items-center sr-space-x-4 sr-text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    );
  },
};
