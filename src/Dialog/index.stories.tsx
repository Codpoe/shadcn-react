import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from '.';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Dialog> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open dialog</button>
        <Dialog
          {...args}
          open={open}
          overlayClosable={false}
          onChange={setOpen}
          title="将模块拆分成多个文件"
          description="当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。"
        >
          例如，我们从示例 7-17
          中包含多个餐厅模块的代码开始。我们会将模块提取到各自的文件中，而不是将所有模块都定义到
          crate 根文件中。在这里，crate 根文件是
          src/lib.rs，不过这个过程也适用于 crate 根文件是 src/main.rs 的二进制
          crate。
        </Dialog>
      </>
    );
  },
};

export const Async: StoryObj<typeof Dialog> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open dialog</button>
        <Dialog
          {...args}
          open={open}
          onChange={setOpen}
          onOk={async () => {
            await new Promise(resolve => setTimeout(resolve, 1500));
          }}
          title="将模块拆分成多个文件"
          description="当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。"
        >
          例如，我们从示例 7-17
          中包含多个餐厅模块的代码开始。我们会将模块提取到各自的文件中，而不是将所有模块都定义到
          crate 根文件中。在这里，crate 根文件是
          src/lib.rs，不过这个过程也适用于 crate 根文件是 src/main.rs 的二进制
          crate。
        </Dialog>
      </>
    );
  },
};

export const NoCloseIcon: StoryObj<typeof Dialog> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open dialog</button>
        <Dialog
          {...args}
          open={open}
          onChange={setOpen}
          title="将模块拆分成多个文件"
          description="当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。"
          closeIcon={null}
        >
          例如，我们从示例 7-17
          中包含多个餐厅模块的代码开始。我们会将模块提取到各自的文件中，而不是将所有模块都定义到
          crate 根文件中。在这里，crate 根文件是
          src/lib.rs，不过这个过程也适用于 crate 根文件是 src/main.rs 的二进制
          crate。
        </Dialog>
      </>
    );
  },
};
