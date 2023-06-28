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

export const Normal: StoryObj<typeof Toaster> = {
  render: args => (
    <>
      <Toaster {...args} />
      <Button
        onClick={() => toast({ title: `永远相信美好的事情即将发生${i++}` })}
      >
        Normal
      </Button>
    </>
  ),
};

// export const Success: StoryObj<typeof Toaster> = {
//   render: args => (
//     <>
//       <Toaster {...args} />
//       <Button
//         onClick={() => toast.success({ title: '永远相信美好的事情即将发生' })}
//       >
//         Success
//       </Button>
//     </>
//   ),
// };

// export const Warning: StoryObj<typeof Toaster> = {
//   render: args => (
//     <>
//       <Toaster {...args} />
//       <Button
//         onClick={() => toast.warning({ title: '永远相信美好的事情即将发生' })}
//       >
//         Warning
//       </Button>
//     </>
//   ),
// };

// export const Error: StoryObj<typeof Toaster> = {
//   render: args => (
//     <>
//       <Toaster {...args} />
//       <Button
//         onClick={() => toast.error({ title: '永远相信美好的事情即将发生' })}
//       >
//         Error
//       </Button>
//     </>
//   ),
// };

// export const Loading: StoryObj<typeof Toaster> = {
//   render: args => (
//     <>
//       <Toaster {...args} />
//       <Button
//         onClick={() => toast.loading({ title: '永远相信美好的事情即将发生' })}
//       >
//         Loading
//       </Button>
//     </>
//   ),
// };

// export const PromiseSuccess: StoryObj<typeof Toaster> = {
//   render: args => (
//     <>
//       <Toaster {...args} />
//       <Button
//         onClick={() =>
//           toast.promise(
//             new Promise<string>(resolve =>
//               setTimeout(() => resolve('666'), 1500)
//             ),
//             {
//               loading: '加载中',
//               success: data => `生活跟你说了声：${data}`,
//             }
//           )
//         }
//       >
//         Promise Success
//       </Button>
//     </>
//   ),
// };

// export const PromiseError: StoryObj<typeof Toaster> = {
//   render: args => (
//     <>
//       <Toaster {...args} />
//       <Button
//         onClick={() =>
//           toast.promise(
//             new Promise<string>((_, reject) =>
//               setTimeout(() => reject('永不言弃'), 1500)
//             ),
//             {
//               loading: '加载中',
//               error: err => `生活轻拍了一下你：${err}`,
//             }
//           )
//         }
//       >
//         Promise Error
//       </Button>
//     </>
//   ),
// };
