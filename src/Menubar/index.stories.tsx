import type { Meta, StoryObj } from '@storybook/react';
import { UserIcon } from 'lucide-react';
import { Menubar } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <Menubar>
        <Menubar.Menu
          content={
            <>
              <Menubar.Item icon={<UserIcon />} shortcut="⌘T">
                New Tab
              </Menubar.Item>
              <Menubar.Item shortcut="⌘N">New Window</Menubar.Item>
              <Menubar.Item disabled>New Incognito Window</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Sub
                content={
                  <>
                    <Menubar.Item>Email link</Menubar.Item>
                    <Menubar.Item>Messages</Menubar.Item>
                    <Menubar.Item>Notes</Menubar.Item>
                  </>
                }
              >
                Share
              </Menubar.Sub>
              <Menubar.Separator />
              <Menubar.Item shortcut="⌘P">Print...</Menubar.Item>
            </>
          }
        >
          File
        </Menubar.Menu>
        <Menubar.Menu
          content={
            <>
              <Menubar.Item shortcut="⌘Z">Undo</Menubar.Item>
              <Menubar.Item shortcut="⇧⌘Z">Redo</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Sub
                content={
                  <>
                    <Menubar.Item>Search the web</Menubar.Item>
                    <Menubar.Separator />
                    <Menubar.Item>Find...</Menubar.Item>
                    <Menubar.Item>Find Next</Menubar.Item>
                    <Menubar.Item>Find Previous</Menubar.Item>
                  </>
                }
              >
                Find
              </Menubar.Sub>
              <Menubar.Separator />
              <Menubar.Item>Cut</Menubar.Item>
              <Menubar.Item>Copy</Menubar.Item>
              <Menubar.Item>Paste</Menubar.Item>
            </>
          }
        >
          Edit
        </Menubar.Menu>
        <Menubar.Menu
          content={
            <>
              <Menubar.CheckboxItem>
                Always Show Bookmarks Bar
              </Menubar.CheckboxItem>
              <Menubar.CheckboxItem checked>
                Always Show Full URLs
              </Menubar.CheckboxItem>
              <Menubar.Separator />
              <Menubar.Item inset shortcut="⌘R">
                Reload
              </Menubar.Item>
              <Menubar.Item disabled inset shortcut="⇧⌘R">
                Force Reload
              </Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item inset>Hide Sidebar</Menubar.Item>
            </>
          }
        >
          View
        </Menubar.Menu>
        <Menubar.Menu
          content={
            <>
              <Menubar.RadioGroup value="benoit">
                <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
                <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
                <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
              </Menubar.RadioGroup>
              <Menubar.Separator />
              <Menubar.Item inset>Edit...</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item inset>Add Profile...</Menubar.Item>
            </>
          }
        >
          Profiles
        </Menubar.Menu>
      </Menubar>
    );
  },
};
