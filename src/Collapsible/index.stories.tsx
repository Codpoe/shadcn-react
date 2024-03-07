import type { Meta, StoryObj } from '@storybook/react';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '../Button';
import { Collapsible } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Collapsible className="sr-w-[350px] sr-space-y-2">
        <div className="sr-flex sr-items-center sr-justify-between sr-space-x-4 sr-px-4">
          <h4 className="sr-text-sm sr-font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" size="icon" icon={<ChevronsUpDownIcon />} />
          </Collapsible.Trigger>
        </div>
        <div className="sr-rounded-md sr-border sr-px-4 sr-py-2 sr-font-mono sr-text-sm sr-shadow-sm">
          @radix-ui/primitives
        </div>
        <Collapsible.Content className="sr-space-y-2">
          <div className="sr-rounded-md sr-border sr-px-4 sr-py-2 sr-font-mono sr-text-sm sr-shadow-sm">
            @radix-ui/colors
          </div>
          <div className="sr-rounded-md sr-border sr-px-4 sr-py-2 sr-font-mono sr-text-sm sr-shadow-sm">
            @stitches/react
          </div>
        </Collapsible.Content>
      </Collapsible>
    );
  },
};
