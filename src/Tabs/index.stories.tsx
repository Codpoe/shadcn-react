import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '.';
import { Card } from '@/Card';
import { Label } from '@/Label';
import { Input } from '@/Input';
import { Button } from '@/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Tabs
        defaultValue="account"
        className="sr-w-[400px]"
        items={[
          {
            value: 'account',
            title: 'Account',
            content: (
              <Card
                title="Account"
                description="Make changes to your account here. Click save when you're done."
                footer={<Button>Save changes</Button>}
              >
                <div className="sr-space-y-2">
                  <div className="sr-space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="sr-space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </div>
              </Card>
            ),
          },
          {
            value: 'password',
            title: 'Password',
            content: (
              <Card
                title="Password"
                description="Change your password here. After saving, you'll be logged out."
                footer={<Button>Save password</Button>}
              >
                <div className="sr-space-y-2">
                  <div className="sr-space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="sr-space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </div>
              </Card>
            ),
          },
        ]}
      />
    );
  },
};
