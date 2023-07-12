import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Tag> = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: StoryObj<typeof Tag> = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: StoryObj<typeof Tag> = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: StoryObj<typeof Tag> = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: StoryObj<typeof Tag> = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Outline: StoryObj<typeof Tag> = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const CustomColor: StoryObj<typeof Tag> = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Tag color="#3b82f6">#3b82f6</Tag>
      <Tag color="#10b981">#10b981</Tag>
      <Tag color="#a855f7">#a855f7</Tag>
    </div>
  ),
};

export const Closable: StoryObj<typeof Tag> = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {/* eslint-disable-next-line no-console */}
      <Tag variant="primary" closable onClose={() => console.log('onClose')}>
        Primary
      </Tag>
      <Tag variant="secondary" closable>
        Secondary
      </Tag>
      <Tag variant="success" closable>
        Success
      </Tag>
      <Tag variant="warning" closable>
        Warning
      </Tag>
      <Tag variant="error" closable>
        Error
      </Tag>
      <Tag variant="outline" closable>
        Outline
      </Tag>
      <Tag color="#3b82f6" closable>
        #3b82f6
      </Tag>
      <Tag color="#10b981" closable>
        #10b981
      </Tag>
      <Tag color="#a855f7" closable>
        #a855f7
      </Tag>
    </div>
  ),
};
