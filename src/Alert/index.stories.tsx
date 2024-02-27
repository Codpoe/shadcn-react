import type { Meta, StoryObj } from '@storybook/react';

import { RocketIcon } from '@radix-ui/react-icons';
import { Alert } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: ['default', 'destructive'],
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render(args) {
    return (
      <Alert {...args} title="Info">
        You can add components to your app using the cli.
      </Alert>
    );
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render(args) {
    return (
      <Alert {...args} title="Error">
        Your session has expired. Please log in again.
      </Alert>
    );
  },
};

export const CustomIcon: Story = {
  render(args) {
    return (
      <Alert
        {...args}
        icon={<RocketIcon className="sr-w-4 sr-h-4" />}
        title="Heads up!"
      >
        You can add components to your app using the cli.
      </Alert>
    );
  },
};
