import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Input> = {
  args: {
    placeholder: '请输入内容',
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Controlled: StoryObj<typeof Input> = {
  args: {
    placeholder: '请输入内容',
    value: '固定的内容',
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Clearable: StoryObj<typeof Input> = {
  args: {
    clearable: true,
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
  },
};
