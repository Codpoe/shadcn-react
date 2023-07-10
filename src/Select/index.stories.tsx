import { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Select> = {
  args: {
    placeholder: '请选择',
    items: [
      {
        label: 'Chrome',
        value: 'chrome',
      },
      {
        label: 'Firefox',
        value: 'firefox',
      },
      {
        label: 'Safari',
        value: 'safari',
      },
    ],
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Multiple: StoryObj<typeof Select> = {
  args: {
    multiple: true,
    placeholder: '请选择',
    items: [
      {
        label: 'Chrome',
        value: 'chrome',
      },
      {
        label: 'Firefox',
        value: 'firefox',
      },
      {
        label: 'Safari',
        value: 'safari',
      },
    ],
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};
