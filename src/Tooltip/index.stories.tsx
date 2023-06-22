import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Tooltip> = {
  render: args => (
    <div
      style={{
        padding: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tooltip {...args} content="落霞与孤鹜齐飞，秋水共长天一色">
        <Button>Tooltip</Button>
      </Tooltip>
    </div>
  ),
};
