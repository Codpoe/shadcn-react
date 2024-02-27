import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';
import { Button } from '@/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Card
        title="Create project"
        description="Deploy your new project in one-click."
        footer={<Button className="sr-w-full">Login</Button>}
      >
        Hello World
      </Card>
    );
  },
};
