import type { Meta, StoryObj } from '@storybook/react';
import {
  CalendarIcon,
  MailIcon,
  SmileIcon,
  SettingsIcon,
  UserIcon,
  RocketIcon,
} from 'lucide-react';
import { Command } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <div className="sr-w-96">
        <Command className="sr-rounded-lg sr-border sr-shadow-md">
          <Command.Input placeholder="Type a command or search..." />
          <Command.List empty="No results found.">
            <Command.Group heading="Suggestions">
              <Command.Item icon={<CalendarIcon />}>Calendar</Command.Item>
              <Command.Item icon={<SmileIcon />}>Search Emoji</Command.Item>
              <Command.Item icon={<RocketIcon />}>Launch</Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Settings">
              <Command.Item icon={<UserIcon />} shortcut="⌘P">
                Profile
              </Command.Item>
              <Command.Item icon={<MailIcon />} shortcut="⌘B">
                Mail
              </Command.Item>
              <Command.Item icon={<SettingsIcon />} shortcut="⌘S">
                Settings
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    );
  },
};
