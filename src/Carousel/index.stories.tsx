import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '..';
import { Carousel } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render(args) {
    return (
      <div className="sr-w-96">
        <Carousel
          {...args}
          // eslint-disable-next-line no-console
          onIndexChange={index => console.log('Carousel index: ', index)}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Carousel.Item key={i}>
              <Card className="sr-bg-gray-200">
                <div className="sr-flex sr-aspect-square sr-items-center sr-justify-center">
                  <span className="sr-text-4xl sr-font-semibold">{i + 1}</span>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {},
  render(args) {
    return (
      <Carousel
        {...args}
        className="sr-w-96"
        // eslint-disable-next-line no-console
        onIndexChange={index => console.log('Carousel index: ', index)}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Carousel.Item key={i} className="sr-basis-1/3">
            <Card className="sr-bg-gray-200">
              <div className="sr-flex sr-items-center sr-justify-center">
                <span className="sr-text-4xl sr-font-semibold">{i + 1}</span>
              </div>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  },
};

export const Orientation: Story = {
  args: {
    orientation: 'vertical',
    align: 'center',
  },
  render(args) {
    return (
      <div className="sr-w-96 sr-p-4">
        <Carousel
          {...args}
          className="sr-h-[200px]"
          // eslint-disable-next-line no-console
          onIndexChange={index => console.log('Carousel index: ', index)}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Carousel.Item key={i} className="sr-basis-1/2">
              <Card className="sr-bg-gray-200">
                <div className="sr-flex sr-items-center sr-justify-center">
                  <span className="sr-text-4xl sr-font-semibold">{i + 1}</span>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  },
};

export const ControlInside: Story = {
  args: {
    showControls: 'inside',
  },
  render(args) {
    return (
      <div className="sr-w-[520px] sr-p-4">
        <Carousel
          {...args}
          // eslint-disable-next-line no-console
          onIndexChange={index => console.log('Carousel index: ', index)}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Carousel.Item key={i}>
              <Card className="sr-bg-gray-200">
                <div className="sr-flex sr-aspect-square sr-items-center sr-justify-center">
                  <span className="sr-text-4xl sr-font-semibold">{i + 1}</span>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="sr-h-12" />
        <Carousel
          {...args}
          className="sr-h-[200px]"
          orientation="vertical"
          // eslint-disable-next-line no-console
          onIndexChange={index => console.log('Carousel index: ', index)}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Carousel.Item key={i} className="sr-basis-1/2">
              <Card className=" sr-bg-gray-200">
                <div className="sr-flex sr-items-center sr-justify-center">
                  <span className="sr-text-4xl sr-font-semibold">{i + 1}</span>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  },
};

export const HideControls: Story = {
  args: {
    showControls: false,
  },
  render(args) {
    return (
      <div className="sr-w-96">
        <Carousel
          {...args}
          // eslint-disable-next-line no-console
          onIndexChange={index => console.log('Carousel index: ', index)}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Carousel.Item key={i}>
              <Card className="sr-bg-gray-200">
                <div className="sr-flex sr-aspect-square sr-items-center sr-justify-center">
                  <span className="sr-text-4xl sr-font-semibold">{i + 1}</span>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  },
};
