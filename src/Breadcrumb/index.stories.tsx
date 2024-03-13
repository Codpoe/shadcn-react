import type { Meta, StoryObj } from '@storybook/react';
import { ArrowBigRightIcon } from 'lucide-react';
import { Breadcrumb } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item variant="link">
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="link">
          <a href="#">Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="page">Analytics</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

export const Separator: Story = {
  render() {
    return (
      <Breadcrumb separator={<ArrowBigRightIcon />}>
        <Breadcrumb.Item variant="link">
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="link">
          <a href="#">Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="page">Analytics</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

export const MaxCount: Story = {
  args: {
    maxCount: 3,
  },
  render(args) {
    return (
      <Breadcrumb {...args}>
        <Breadcrumb.Item variant="link">
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="link">
          <a href="#">Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="link">
          <a href="#">Analytics</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="link">
          <a href="#">Reports</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item variant="page">Team</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};
