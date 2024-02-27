import type { Meta, StoryObj } from '@storybook/react';
import { Resizable } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Resizable',
  component: Resizable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Resizable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    direction: 'horizontal',
  },
  render(args) {
    return (
      <div className="sr-w-96 sr-max-w-md">
        <Resizable {...args} className="sr-rounded-lg sr-border">
          <Resizable.Panel defaultSize={50}>
            <div className="sr-flex sr-h-[200px] sr-items-center sr-justify-center sr-p-6">
              <span className="sr-font-semibold">One</span>
            </div>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel defaultSize={50}>
            <Resizable direction="vertical">
              <Resizable.Panel defaultSize={25}>
                <div className="sr-flex sr-h-full sr-items-center sr-justify-center sr-p-6">
                  <span className="sr-font-semibold">Two</span>
                </div>
              </Resizable.Panel>
              <Resizable.Handle />
              <Resizable.Panel defaultSize={75}>
                <div className="sr-flex sr-h-full sr-items-center sr-justify-center sr-p-6">
                  <span className="sr-font-semibold">Three</span>
                </div>
              </Resizable.Panel>
            </Resizable>
          </Resizable.Panel>
        </Resizable>
      </div>
    );
  },
};
