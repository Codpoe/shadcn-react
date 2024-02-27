import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: <ChevronRightIcon className="sr-h-4 sr-w-4" />,
  },
};

export const WithIcon: Story = {
  args: {
    icon: <EnvelopeOpenIcon />,
    children: 'Login with Email',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
};
