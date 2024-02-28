import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Input, Label } from '../ui';
import { Drawer } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Drawer
        title="Edit profile"
        description="Make changes to your profile here. Click save when you're done."
        content={
          <div className="sr-grid sr-gap-4 sr-py-4">
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
      >
        <Button variant="outline">Edit Profile</Button>
      </Drawer>
    );
  },
};

export const Async: Story = {
  render() {
    return (
      <Drawer
        title="Edit profile"
        description="Make changes to your profile here. Click save when you're done."
        content={
          <div className="sr-grid sr-gap-4 sr-py-4">
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
        <Button variant="outline">Edit Profile</Button>
      </Drawer>
    );
  },
};
