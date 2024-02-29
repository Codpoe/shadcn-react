import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Card } from '..';
import { Spin } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Spin',
  component: Spin,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return <Spin />;
  },
};

export const Size: Story = {
  render() {
    return (
      <div className="sr-flex sr-items-center sr-gap-4">
        <Spin size={14} />
        <Spin />
        <Spin size={26} />
      </div>
    );
  },
};

function HasChildrenDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="sr-w-96">
      <Button
        variant="outline"
        className="sr-mb-4"
        onClick={() => setLoading(!loading)}
      >
        loading: {String(loading)}
      </Button>
      <Spin loading={loading}>
        <Card
          title="Create project"
          description="Deploy your new project in one-click."
          footer={<Button className="sr-w-full">Login</Button>}
        >
          Hello World
        </Card>
      </Spin>
    </div>
  );
}

export const HasChildren: Story = {
  render() {
    return <HasChildrenDemo />;
  },
};
