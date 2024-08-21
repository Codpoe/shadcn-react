import type { Meta, StoryObj } from '@storybook/react';
import {
  Bar as ReBar,
  BarChart,
  CartesianGrid,
  XAxis,
  LineChart,
  Line as ReLine,
} from 'recharts';
import { Chart } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Chart',
  component: Chart.Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

export const Bar: Story = {
  args: {
    config: {
      desktop: {
        label: 'Desktop',
        color: '#2563eb',
      },
      mobile: {
        label: 'Mobile',
        color: '#60a5fa',
      },
    },
    children: <></>,
  },
  render: ({ config }) => (
    <Chart.Container className="sr-min-h-[200px] sr-w-[500px]" config={config}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
        <Chart.Legend content={<Chart.LegendContent />} />
        <ReBar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <ReBar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </Chart.Container>
  ),
};

export const Line: Story = {
  args: {
    config: {
      desktop: {
        label: 'Desktop',
        color: '#2563eb',
      },
      mobile: {
        label: 'Mobile',
        color: '#f43f5e',
      },
    },
    children: <></>,
  },
  render: ({ config }) => (
    <Chart.Container className="sr-min-h-[200px] sr-w-[500px]" config={config}>
      <LineChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
        <Chart.Legend content={<Chart.LegendContent />} />
        <ReLine dataKey="desktop" stroke="var(--color-desktop)" />
        <ReLine dataKey="mobile" stroke="var(--color-mobile)" />
      </LineChart>
    </Chart.Container>
  ),
};
