import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

export const Capsule: StoryObj<typeof Tabs> = {
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

export const CapsuleDisabled: StoryObj<typeof Tabs> = {
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

export const CapsuleStretch: StoryObj<typeof Tabs> = {
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

export const CapsuleVertical: StoryObj<typeof Tabs> = {
  args: {
    orientation: 'vertical',
  },
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

export const Line: StoryObj<typeof Tabs> = {
  args: {
    type: 'line',
  },
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

export const LineDisabled: StoryObj<typeof Tabs> = {
  args: {
    type: 'line',
  },
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

export const LineStretch: StoryObj<typeof Tabs> = {
  args: {
    type: 'line',
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

export const LineVertical: StoryObj<typeof Tabs> = {
  args: {
    type: 'line',
    orientation: 'vertical',
  },
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
