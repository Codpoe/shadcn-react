import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Toaster, toast } from '.';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;

let i = 0;

export const All: StoryObj<typeof Toaster> = {
  render: args => (
    <>
      <Toaster {...args} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Button
          onClick={() => toast({ title: `永远相信美好的事情即将发生${i++}` })}
        >
          Normal
        </Button>
        <Button
          variant="success"
          onClick={() => toast.success({ title: '永远相信美好的事情即将发生' })}
        >
          Success
        </Button>
        <Button
          variant="warning"
          onClick={() => toast.warning({ title: '永远相信美好的事情即将发生' })}
        >
          Warning
        </Button>
        <Button
          variant="error"
          onClick={() => toast.error({ title: '永远相信美好的事情即将发生' })}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.loading({ title: '永远相信美好的事情即将发生' })}
        >
          Loading
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(
              new Promise<string>(resolve =>
                setTimeout(() => resolve('666'), 1500)
              ),
              {
                loading: '加载中',
                success: data => `生活跟你说了声：${data}`,
              }
            )
          }
        >
          Promise Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(
              new Promise<string>((_, reject) =>
                setTimeout(() => reject('永不言弃'), 1500)
              ),
              {
                loading: '加载中',
                error: err => `生活轻拍了一下你：${err}`,
              }
            )
          }
        >
          Promise Error
        </Button>
      </div>
    </>
  ),
};
