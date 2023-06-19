import { Meta, StoryObj } from '@storybook/react';
import { ZapIcon } from 'lucide-react';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Alert> = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args} title="将模块拆分成多个文件">
      到目前为止，本章所有的例子都在一个文件中定义多个模块。当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。
    </Alert>
  ),
};

export const Success: StoryObj<typeof Alert> = {
  args: {
    variant: 'success',
  },
  render: args => (
    <Alert {...args} title="将模块拆分成多个文件">
      到目前为止，本章所有的例子都在一个文件中定义多个模块。当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。
    </Alert>
  ),
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    variant: 'warning',
  },
  render: args => (
    <Alert {...args} title="将模块拆分成多个文件">
      到目前为止，本章所有的例子都在一个文件中定义多个模块。当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。
    </Alert>
  ),
};

export const Error: StoryObj<typeof Alert> = {
  args: {
    variant: 'error',
  },
  render: args => (
    <Alert {...args} title="将模块拆分成多个文件">
      到目前为止，本章所有的例子都在一个文件中定义多个模块。当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。
    </Alert>
  ),
};

export const CustomIcon: StoryObj<typeof Alert> = {
  render: args => (
    <Alert
      {...args}
      icon={<ZapIcon color="#f59e0b" />}
      title="将模块拆分成多个文件"
    >
      到目前为止，本章所有的例子都在一个文件中定义多个模块。当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。
    </Alert>
  ),
};
