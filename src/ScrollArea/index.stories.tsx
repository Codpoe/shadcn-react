import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return (
      <ScrollArea className="sr-h-[200px] sr-w-[350px] sr-rounded-md sr-border sr-p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&#39;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&#39;t seem to stop Jokester. And then, one day, the people of the
        kingdom discovered that the jokes left by Jokester were so funny that
        they couldn&#39;t help but laugh. And once they started laughing, they
        couldn&#39;t stop.
      </ScrollArea>
    );
  },
};

interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];

export const Horizontal: Story = {
  render() {
    return (
      <ScrollArea
        className="sr-w-96 sr-whitespace-nowrap sr-rounded-md sr-border"
        orientation="horizontal"
      >
        <div className="sr-flex sr-w-max sr-space-x-4 sr-p-4">
          {works.map(artwork => (
            <figure key={artwork.artist} className="sr-shrink-0">
              <div className="sr-overflow-hidden sr-rounded-md">
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="sr-aspect-[3/4] sr-w-[150px] sr-h-fit sr-object-cover"
                />
              </div>
              <figcaption className="sr-pt-2 sr-text-xs sr-text-muted-foreground">
                Photo by{' '}
                <span className="sr-font-semibold sr-text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollArea>
    );
  },
};
