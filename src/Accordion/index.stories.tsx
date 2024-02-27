import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: {
        name: 'enum',
        value: ['single', 'multiple'],
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    type: 'single',
  },
  render(args) {
    return (
      <div className="sr-w-96">
        <Accordion {...args}>
          <Accordion.Item value="item-1" trigger="Is it accessible?">
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Item>
          <Accordion.Item value="item-2" trigger="Is it styled?">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Item>
          <Accordion.Item value="item-3" trigger="Is it animated?">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render(args) {
    return (
      <div className="sr-w-96">
        <Accordion {...args}>
          <Accordion.Item value="item-1" trigger="Is it accessible?">
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Item>
          <Accordion.Item value="item-2" trigger="Is it styled?">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Item>
          <Accordion.Item value="item-3" trigger="Is it animated?">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
};
