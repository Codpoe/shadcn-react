import { Meta, StoryObj } from '@storybook/react';
import { MailIcon, InfoIcon } from '../icons';
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
    placeholder: '请输入内容',
    clearable: true,
  },
};

export const Prefix: StoryObj<typeof Input> = {
  args: {
    placeholder: '请输入内容',
    prefix: <MailIcon />,
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Suffix: StoryObj<typeof Input> = {
  args: {
    placeholder: '请输入内容',
    suffix: <InfoIcon />,
    clearable: true,
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Password: StoryObj<typeof Input> = {
  args: {
    type: 'password',
    placeholder: '请输入密码',
    suffix: <InfoIcon />,
    clearable: true,
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
  },
};
