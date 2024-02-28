import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Label } from '../Label';
import { Input } from '../Input';
import { Sheet } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Sheet
        title="Edit profile"
        description="Make changes to your profile here. Click save when you're done."
        content={
          <div className="sr-grid sr-gap-4">
            <div className="sr-grid sr-grid-cols-4 sr-items-center sr-gap-4">
              <Label htmlFor="name" className="sr-text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="sr-col-span-3" />
            </div>
            <div className="sr-grid sr-grid-cols-4 sr-items-center sr-gap-4">
              <Label htmlFor="username" className="sr-text-right">
                Username
              </Label>
              <Input
                id="username"
                value="@peduarte"
                className="sr-col-span-3"
              />
            </div>
          </div>
        }
        okText="Save changes"
        onOk={async () => {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
      >
        <Button variant="outline">Open</Button>
      </Sheet>
    );
  },
};

export const Side: Story = {
  args: {
    side: 'bottom',
  },
  render(args) {
    return (
      <Sheet
        {...args}
        title="Edit profile"
        description="Make changes to your profile here. Click save when you're done."
        content={
          <div className="sr-grid sr-gap-4">
            <div className="sr-grid sr-grid-cols-4 sr-items-center sr-gap-4">
              <Label htmlFor="name" className="sr-text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="sr-col-span-3" />
            </div>
            <div className="sr-grid sr-grid-cols-4 sr-items-center sr-gap-4">
              <Label htmlFor="username" className="sr-text-right">
                Username
              </Label>
              <Input
                id="username"
                value="@peduarte"
                className="sr-col-span-3"
              />
            </div>
          </div>
        }
        okText="Save changes"
        onOk={async () => {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
      >
        <Button variant="outline">Open</Button>
      </Sheet>
    );
  },
};

export const Size: Story = {
  args: {
    className: 'sr-w-[400px] sm:sr-w-[540px] sm:sr-max-w-[540px]',
  },
  render(args) {
    return (
      <Sheet
        {...args}
        title="Edit profile"
        description="Make changes to your profile here. Click save when you're done."
        content={
          <div className="sr-grid sr-gap-4">
            <div className="sr-grid sr-grid-cols-4 sr-items-center sr-gap-4">
              <Label htmlFor="name" className="sr-text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="sr-col-span-3" />
            </div>
            <div className="sr-grid sr-grid-cols-4 sr-items-center sr-gap-4">
              <Label htmlFor="username" className="sr-text-right">
                Username
              </Label>
              <Input
                id="username"
                value="@peduarte"
                className="sr-col-span-3"
              />
            </div>
          </div>
        }
        okText="Save changes"
        onOk={async () => {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
      >
        <Button variant="outline">Open</Button>
      </Sheet>
    );
  },
};
