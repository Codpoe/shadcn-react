import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Textarea> = {
  args: {
    placeholder: '请输入内容',
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const AutoSize: StoryObj<typeof Textarea> = {
  args: {
    placeholder: '请输入内容',
    defaultValue:
      '请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容请输入内容',
    autoSize: { minRows: 3, maxRows: Infinity },
  },
};

export const Disabled: StoryObj<typeof Textarea> = {
  args: {
    disabled: true,
    placeholder: '请输入内容',
  },
};
