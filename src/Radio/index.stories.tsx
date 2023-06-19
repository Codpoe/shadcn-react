import { Meta, StoryObj } from '@storybook/react';
import { Radio } from '.';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Radio> = {
  render: args => (
    <Radio.Group {...args}>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </Radio.Group>
  ),
};

export const Disabled: StoryObj<typeof Radio> = {
  args: {
    disabled: true,
  },
  render: args => (
    <Radio.Group {...args}>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </Radio.Group>
  ),
};

export const PartialDisabled: StoryObj<typeof Radio> = {
  render: args => (
    <Radio.Group {...args}>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange" disabled>
        Orange
      </Radio>
    </Radio.Group>
  ),
};

export const RadioGroupVertical: StoryObj<typeof Radio.Group> = {
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
  render: args => <Radio.Group {...args} onChange={console.log} />,
};
