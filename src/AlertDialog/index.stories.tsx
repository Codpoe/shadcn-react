import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { AlertDialog } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Button variant="outline">Show Dialog</Button>,
  },
  render(args) {
    return (
      <AlertDialog
        {...args}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your
        account and remove your data from our servers."
      />
    );
  },
};

export const NoCancel: Story = {
  args: {
    children: <Button variant="outline">Show Dialog</Button>,
    cancelText: null,
  },
  render(args) {
    return (
      <AlertDialog
        {...args}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your
        account and remove your data from our servers."
      />
    );
  },
};
