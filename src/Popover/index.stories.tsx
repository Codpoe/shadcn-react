import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Popover } from '.';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Popover> = {
  args: {
    side: 'bottom',
  },
  render: args => (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Popover
        {...args}
        content={
          <>
            落霞与孤鹜齐飞
            <br />
            秋水共长天一色
          </>
        }
      >
        <Button>点击</Button>
      </Popover>
    </div>
  ),
};

export const Hover: StoryObj<typeof Popover> = {
  args: {
    side: 'bottom',
  },
  render: args => (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Popover
        {...args}
        trigger="hover"
        content={
          <>
            落霞与孤鹜齐飞
            <br />
            秋水共长天一色
          </>
        }
      >
        <Button>Hover</Button>
      </Popover>
    </div>
  ),
};

export const NoArrow: StoryObj<typeof Popover> = {
  args: {
    side: 'bottom',
    showArrow: false,
  },
  render: args => (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Popover
        {...args}
        content={
          <>
            落霞与孤鹜齐飞
            <br />
            秋水共长天一色
          </>
        }
      >
        <Button>点击</Button>
      </Popover>
    </div>
  ),
};
