import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Popover } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    side: 'bottom',
  },
  render(args) {
    return (
      <Popover
        {...args}
        content={
          <div className="sr-grid sr-gap-4">
            <div className="sr-space-y-2">
              <h4 className="sr-font-medium sr-leading-none">Dimensions</h4>
              <p className="sr-text-sm sr-text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="sr-grid sr-gap-2">
              <div className="sr-grid sr-grid-cols-3 sr-items-center sr-gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="sr-col-span-2 !sr-h-8"
                />
              </div>
              <div className="sr-grid sr-grid-cols-3 sr-items-center sr-gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="sr-col-span-2 !sr-h-8"
                />
              </div>
            </div>
          </div>
        }
      >
        <Button variant="outline">Open popover</Button>
      </Popover>
    );
  },
};
