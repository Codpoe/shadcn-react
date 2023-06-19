import { Meta, StoryObj } from '@storybook/react';
import { MailIcon } from '../icons';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Success: StoryObj<typeof Button> = {
  args: {
    variant: 'success',
    children: 'Button',
  },
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    variant: 'warning',
    children: 'Button',
  },
};

export const Error: StoryObj<typeof Button> = {
  args: {
    variant: 'error',
    children: 'Button',
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Ghost: StoryObj<typeof Button> = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const Size: StoryObj<typeof Button> = {
  render: () => (
    <>
      <Button size="s">Small</Button>
      <Button size="m" style={{ margin: '0 16px' }}>
        Middle
      </Button>
      <Button size="l">Large</Button>
    </>
  ),
};

export const Round: StoryObj<typeof Button> = {
  args: {
    round: true,
    children: 'Button',
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    icon: <MailIcon />,
    children: 'Button',
  },
};

export const IconOnly: StoryObj<typeof Button> = {
  args: {
    icon: <MailIcon />,
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Button',
  },
};

export const Loading: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading',
  },
};

export const AsyncClick: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Async',
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
};
