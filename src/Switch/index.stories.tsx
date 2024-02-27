import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return <Switch>Airplane Mode</Switch>;
  },
};

export const Disabled: Story = {
  render() {
    return <Switch disabled>Airplane Mode</Switch>;
  },
};
