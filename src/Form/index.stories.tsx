import type { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Radio } from '../Radio';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Switch } from '../Switch';
import { Slider } from '../Slider';
import { DatePicker } from '../DatePicker';
import { Form, useForm } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  fruit: z.union([
    z.literal('apple'),
    z.literal('banana'),
    z.literal('blueberry'),
    z.literal('grapes'),
    z.literal('pineapple'),
  ]),
  colors: z
    .array(z.union([z.literal('red'), z.literal('green'), z.literal('blue')]))
    .nonempty(),
  city: z.union([
    z.literal('beijing'),
    z.literal('shanghai'),
    z.literal('guangzhou'),
    z.literal('shenzhen'),
  ]),
  switch: z.boolean(),
  progress: z.array(z.number()),
  date: z.date(),
  read: z.boolean(),
});

const PrimaryDemo = () => {
  const form = useForm({
    schema: formSchema,
    defaultValues: {
      date: new Date(),
    },
  });

  return (
    <Form
      {...form}
      className="sr-w-96"
      // eslint-disable-next-line no-console
      onSubmit={payload => console.log('>>> submit payload', payload)}
    >
      <Form.Field
        name="username"
        label="Username"
        desc="This is your public display name."
      >
        <Input placeholder="Please input username" />
      </Form.Field>
      <Form.Field name="email" label="Email" desc="Your email address.">
        <Input placeholder="Please input email" />
      </Form.Field>
      <Form.Field name="fruit" label="Post">
        <Select placeholder="Select a fruit">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana" disabled>
            Banana
          </Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select>
      </Form.Field>
      <Form.Field name="colors" label="Colors" desc="Pick your colors">
        <Checkbox.Group>
          <Checkbox value="red">Red</Checkbox>
          <Checkbox value="green">Green</Checkbox>
          <Checkbox value="blue">Blue</Checkbox>
        </Checkbox.Group>
      </Form.Field>
      <Form.Field name="city" label="City" desc="Pick your city">
        <Radio.Group>
          <Radio value="beijing">Beijing</Radio>
          <Radio value="shanghai">Shanghai</Radio>
          <Radio value="guangzhou">Guangzhou</Radio>
          <Radio value="shenzhen">Shenzhen</Radio>
        </Radio.Group>
      </Form.Field>
      <Form.Field name="switch" label="Switch" desc="Switch it!">
        <Switch />
      </Form.Field>
      <Form.Field name="progress" label="Progress" desc="Slide">
        <Slider />
      </Form.Field>
      <Form.Field name="date" label="Date">
        <DatePicker
          placeholder="Pick a date"
          calendarProps={{ mode: 'single' }}
        />
      </Form.Field>
      <Form.Field name="read">
        <Checkbox>I have read the manual</Checkbox>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const Primary: Story = {
  args: {} as any,
  render() {
    return <PrimaryDemo />;
  },
};

const LabelPositionDemo = (args: any) => {
  const form = useForm({
    schema: formSchema,
    defaultValues: {
      username: '',
    },
  });

  return (
    <Form
      {...form}
      {...args}
      className="sr-w-96"
      labelClassName={
        args.labelPosition === 'left' ? 'sr-w-[70px] sr-justify-end' : ''
      }
      // eslint-disable-next-line no-console
      onSubmit={payload => console.log('>>> submit payload', payload)}
    >
      <Form.Field
        name="username"
        label="Username"
        desc="This is your public display name."
      >
        <Input placeholder="Please input username" />
      </Form.Field>
      <Form.Field name="email" label="Email" desc="Your email address.">
        <Input placeholder="Please input email" />
      </Form.Field>
      <Form.Slot>
        <Button type="submit">Submit</Button>
      </Form.Slot>
    </Form>
  );
};

export const LabelPosition: Story = {
  args: {
    labelPosition: 'left',
  } as any,
  render(args) {
    return <LabelPositionDemo {...args} />;
  },
};

const LayoutDemo = () => {
  const form = useForm({
    schema: formSchema,
    defaultValues: {
      username: '',
    },
  });

  const [layout, setLayout] = useState<'vertical' | 'horizontal'>('vertical');

  return (
    <div className="sr-space-y-7">
      <Radio.Group value={layout} onValueChange={v => setLayout(v as any)}>
        <Radio value="vertical">Vertical</Radio>
        <Radio value="horizontal">Horizontal</Radio>
      </Radio.Group>
      <Form
        {...form}
        className={
          layout === 'vertical'
            ? 'sr-w-96 sr-space-y-7'
            : 'sr-w-[600px] !sr-space-y-0 sr-flex sr-flex-wrap sr-gap-7'
        }
        // eslint-disable-next-line no-console
        onSubmit={payload => console.log('>>> submit payload', payload)}
      >
        <Form.Field
          name="username"
          label="Username"
          desc="This is your public display name."
        >
          <Input placeholder="Please input username" />
        </Form.Field>
        <Form.Field name="email" label="Email" desc="Your email address.">
          <Input placeholder="Please input email" />
        </Form.Field>
        <Form.Slot label={layout === 'horizontal' ? '' : null}>
          <Button type="submit">Submit</Button>
        </Form.Slot>
      </Form>
    </div>
  );
};

export const Layout: Story = {
  args: {} as any,
  render() {
    return <LayoutDemo />;
  },
};
