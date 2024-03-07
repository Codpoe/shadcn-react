import type { Meta, StoryObj } from '@storybook/react';
import {
  PlayCircleIcon,
  LayoutGridIcon,
  RadioIcon,
  ListMusicIcon,
  Music2Icon,
  Mic2Icon,
  UserIcon,
  LibraryIcon,
} from 'lucide-react';
import { Sidebar } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        title: 'Discover',
        children: [
          {
            value: 'listen-now',
            title: 'Listen Now',
            icon: <PlayCircleIcon />,
          },
          {
            value: 'browse',
            title: 'Browse',
            icon: <LayoutGridIcon />,
          },
          {
            value: 'radio',
            title: 'Radio',
            icon: <RadioIcon />,
          },
        ],
      },
      {
        title: 'Library',
        children: [
          {
            value: 'playlists',
            title: 'Playlists',
            icon: <ListMusicIcon />,
          },
          {
            value: 'songs',
            title: 'Songs',
            icon: <Music2Icon />,
          },
          {
            value: 'made-for-you',
            title: 'Made for you',
            icon: <UserIcon />,
          },
          {
            value: 'artists',
            title: 'Artists',
            icon: <Mic2Icon />,
          },
          {
            value: 'albums',
            title: 'Albums',
            icon: <LibraryIcon />,
          },
        ],
      },
    ],
    collapsed: false,
  },
  render(args) {
    return <Sidebar {...args} />;
  },
};
