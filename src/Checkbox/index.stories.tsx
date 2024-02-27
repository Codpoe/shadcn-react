import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return <Checkbox>Accept terms and conditions</Checkbox>;
  },
};

export const WithText: Story = {
  render() {
    return (
      <Checkbox className="!sr-items-start">
        <div className="sr-grid sr-gap-1.5">
          Accept terms and conditions
          <p className="sr-text-sm sr-text-muted-foreground sr-font-normal">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </Checkbox>
    );
  },
};

export const Disabled: Story = {
  render() {
    return <Checkbox disabled>Accept terms and conditions</Checkbox>;
  },
};
