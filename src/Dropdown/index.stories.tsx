import type { Meta, StoryObj } from '@storybook/react';
import { PersonIcon } from '@radix-ui/react-icons';
import { Dropdown } from '.';
import { Button } from '@/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Dropdown
        className="sr-w-56"
        content={
          <>
            <Dropdown.Label>My Account</Dropdown.Label>
            <Dropdown.Separator />
            <Dropdown.Group>
              <Dropdown.Item icon={<PersonIcon />} shortcut="⇧⌘P">
                Profile
              </Dropdown.Item>
              <Dropdown.Item shortcut="⌘B">Billing</Dropdown.Item>
              <Dropdown.Item shortcut="⌘S">Settings</Dropdown.Item>
              <Dropdown.Item shortcut="⌘K">Keyboard shortcuts</Dropdown.Item>
            </Dropdown.Group>
            <Dropdown.Separator />
            <Dropdown.Group>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Sub
                content={
                  <>
                    <Dropdown.Item>Email</Dropdown.Item>
                    <Dropdown.Item>Message</Dropdown.Item>
                    <Dropdown.Separator />
                    <Dropdown.Item>More...</Dropdown.Item>
                  </>
                }
              >
                Invite users
              </Dropdown.Sub>
              <Dropdown.Item shortcut="⌘+T">New Team</Dropdown.Item>
            </Dropdown.Group>
            <Dropdown.Separator />
            <Dropdown.Item>GitHub</Dropdown.Item>
            <Dropdown.Item>Support</Dropdown.Item>
            <Dropdown.Item disabled>API</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item shortcut="⇧⌘Q">Log out</Dropdown.Item>
          </>
        }
      >
        <Button variant="outline">Open</Button>
      </Dropdown>
    );
  },
};
