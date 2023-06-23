import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Tabs> = {
  render: args => (
    <Tabs
      {...args}
      items={[
        {
          value: 'code',
          label: '验证码登录',
          children: '验证码登录的内容',
        },
        {
          value: 'password',
          label: '密码登录',
          children: '密码登录的内容',
        },
      ]}
    />
  ),
};

export const Disabled: StoryObj<typeof Tabs> = {
  render: args => (
    <Tabs
      {...args}
      items={[
        {
          value: 'code',
          label: '验证码登录',
          children: '验证码登录的内容',
        },
        {
          value: 'password',
          label: '密码登录',
          children: '密码登录的内容',
          disabled: true,
        },
      ]}
    />
  ),
};

export const Stretch: StoryObj<typeof Tabs> = {
  args: {
    stretch: true,
  },
  render: args => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '400px' }}>
        <Tabs
          {...args}
          items={[
            {
              value: 'code',
              label: '验证码登录',
              children: '验证码登录的内容',
            },
            {
              value: 'password',
              label: '密码登录',
              children: '密码登录的内容',
            },
          ]}
        />
      </div>
    </div>
  ),
};
