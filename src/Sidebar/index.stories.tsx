import type { Meta, StoryObj } from '@storybook/react';
import {
  DashboardIcon,
  FaceIcon,
  ListBulletIcon,
  PersonIcon,
  PlayIcon,
  RadiobuttonIcon,
  ReaderIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons';
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
            icon: <PlayIcon />,
          },
          {
            value: 'browse',
            title: 'Browse',
            icon: <DashboardIcon />,
          },
          {
            value: 'radio',
            title: 'Radio',
            icon: <RadiobuttonIcon />,
          },
        ],
      },
      {
        title: 'Library',
        children: [
          {
            value: 'playlists',
            title: 'Playlists',
            icon: <ListBulletIcon />,
          },
          {
            value: 'songs',
            title: 'Songs',
            icon: <SpeakerLoudIcon />,
          },
          {
            value: 'made-for-you',
            title: 'Made for you',
            icon: <PersonIcon />,
          },
          {
            value: 'artists',
            title: 'Artists',
            icon: <FaceIcon />,
          },
          {
            value: 'albums',
            title: 'Albums',
            icon: <ReaderIcon />,
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
