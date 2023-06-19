import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;

export const Single: StoryObj<typeof Accordion> = {
  args: {
    type: 'single',
  },
  argTypes: {
    value: {
      type: 'string',
    },
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item value="a" header="包和 Crate">
        crate 是 Rust 在编译时最小的代码单位。如果你用 rustc 而不是 cargo
        来编译一个文件（第一章我们这么做过），编译器还是会将那个文件认作一个
        crate。crate 可以包含模块，模块可以定义在其他文件，然后和 crate
        一起编译，我们会在接下来的章节中遇到。
      </Accordion.Item>
      <Accordion.Item value="b" header="定义模块来控制作用域与私有性">
        在本节，我们将讨论模块和其它一些关于模块系统的部分，如允许你命名项的
        路径（paths）；用来将路径引入作用域的 use 关键字；以及使项变为公有的 pub
        关键字。我们还将讨论 as 关键字、外部包和 glob
        运算符。现在，让我们把注意力放在模块上！
      </Accordion.Item>
      <Accordion.Item value="c" header="引用模块项目的路径">
        来看一下 Rust
        如何在模块树中找到一个项的位置，我们使用路径的方式，就像在文件系统使用路径一样。为了调用一个函数，我们需要知道它的路径。
      </Accordion.Item>
    </Accordion>
  ),
};

export const Multiple: StoryObj<typeof Accordion> = {
  args: {
    type: 'multiple',
  },
  argTypes: {
    value: {
      type: {
        name: 'array' as any,
        value: 'string',
      },
    },
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item value="a" header="包和 Crate">
        crate 是 Rust 在编译时最小的代码单位。如果你用 rustc 而不是 cargo
        来编译一个文件（第一章我们这么做过），编译器还是会将那个文件认作一个
        crate。crate 可以包含模块，模块可以定义在其他文件，然后和 crate
        一起编译，我们会在接下来的章节中遇到。
      </Accordion.Item>
      <Accordion.Item value="b" header="定义模块来控制作用域与私有性">
        在本节，我们将讨论模块和其它一些关于模块系统的部分，如允许你命名项的
        路径（paths）；用来将路径引入作用域的 use 关键字；以及使项变为公有的 pub
        关键字。我们还将讨论 as 关键字、外部包和 glob
        运算符。现在，让我们把注意力放在模块上！
      </Accordion.Item>
      <Accordion.Item value="c" header="引用模块项目的路径">
        来看一下 Rust
        如何在模块树中找到一个项的位置，我们使用路径的方式，就像在文件系统使用路径一样。为了调用一个函数，我们需要知道它的路径。
      </Accordion.Item>
    </Accordion>
  ),
};
