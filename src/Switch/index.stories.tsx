import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Switch> = {
  args: {
    children: '你愿意吗？',
  },
};

export const Loading: StoryObj<typeof Switch> = {
  args: {
    children: '你愿意吗？',
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={async () => {
          await new Promise(resolve => setTimeout(resolve, 1500));
          setChecked(!checked);
        }}
      />
    );
  },
};

export const Disabled: StoryObj<typeof Switch> = {
  args: {
    children: '你愿意吗？',
    checked: false,
    disabled: true,
  },
};
