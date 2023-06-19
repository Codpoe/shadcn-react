import { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Slider> = {
  args: {
    defaultValue: [50],
    // eslint-disable-next-line no-console
    onChange: console.log,
  },
};

export const Disabled: StoryObj<typeof Slider> = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
};

export const Step: StoryObj<typeof Slider> = {
  args: {
    defaultValue: [50],
    step: 10,
  },
};
