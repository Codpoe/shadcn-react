import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
import { Button } from '@/Button';
import { Label } from '@/Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return <Input className="!sr-w-80" type="email" placeholder="Email" />;
  },
};

export const File: Story = {
  render() {
    return (
      <div className="sr-grid sr-w-80 sr-max-w-sm sr-items-center sr-gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    );
  },
};

export const Disabled: Story = {
  render() {
    return (
      <Input className="!sr-w-80" disabled type="email" placeholder="Email" />
    );
  },
};

export const WithLabel: Story = {
  render() {
    return (
      <div className="sr-grid sr-w-80 sr-max-w-sm sr-items-center sr-gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    );
  },
};

export const WithButton: Story = {
  render() {
    return (
      <div className="sr-flex sr-w-96 sr-max-w-sm sr-items-center sr-space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    );
  },
};
