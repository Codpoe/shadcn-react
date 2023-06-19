import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Checkbox> = {
  args: {
    children: '你愿意吗？',
  },
};

export const Indeterminate: StoryObj<typeof Checkbox> = {
  args: {
    children: '你愿意吗？',
    indeterminate: true,
  },
};

export const UncheckedDisabled: StoryObj<typeof Checkbox> = {
  args: {
    children: '你愿意吗？',
    disabled: true,
  },
};

export const CheckedDisabled: StoryObj<typeof Checkbox> = {
  args: {
    children: '你愿意吗？',
    defaultChecked: true,
    disabled: true,
  },
};

export const CheckboxGroup: StoryObj<typeof Checkbox.Group> = {
  args: {
    items: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Orange',
        value: 'orange',
      },
    ],
  },
  // eslint-disable-next-line no-console
  render: args => <Checkbox.Group {...args} onChange={console.log} />,
};

export const CheckboxGroupVertical: StoryObj<typeof Checkbox.Group> = {
  args: {
    layout: 'vertical',
    items: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Orange',
        value: 'orange',
      },
    ],
  },
  // eslint-disable-next-line no-console
  render: args => <Checkbox.Group {...args} onChange={console.log} />,
};

export const CheckboxGroupDisabled: StoryObj<typeof Checkbox.Group> = {
  args: {
    disabled: true,
    items: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Orange',
        value: 'orange',
      },
    ],
  },
  // eslint-disable-next-line no-console
  render: args => <Checkbox.Group {...args} onChange={console.log} />,
};
