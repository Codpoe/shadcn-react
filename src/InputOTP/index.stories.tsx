import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputOTP } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {} as any,
  render() {
    return (
      <InputOTP length={6}>
        {({ slots }) => (
          <>
            <InputOTP.Group>
              {slots.slice(0, 3).map((slot, index) => (
                <InputOTP.Slot key={index} {...slot} />
              ))}{' '}
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              {slots.slice(3).map((slot, index) => (
                <InputOTP.Slot key={index + 3} {...slot} />
              ))}
            </InputOTP.Group>
          </>
        )}
      </InputOTP>
    );
  },
};

export const Pattern: Story = {
  args: {} as any,
  render() {
    return (
      <InputOTP length={6} pattern={InputOTP.regexpOnlyDigitsAndChars}>
        {({ slots }) => (
          <InputOTP.Group>
            {slots.map((slot, index) => (
              <InputOTP.Slot key={index} {...slot} />
            ))}{' '}
          </InputOTP.Group>
        )}
      </InputOTP>
    );
  },
};

export const Separator: Story = {
  args: {} as any,
  render() {
    return (
      <InputOTP length={6}>
        {({ slots }) => (
          <InputOTP.Group className="sr-gap-2">
            {slots.map((slot, index) => (
              <React.Fragment key={index}>
                <InputOTP.Slot className="sr-rounded-md sr-border" {...slot} />
                {index !== slots.length - 1 && <InputOTP.Separator />}
              </React.Fragment>
            ))}{' '}
          </InputOTP.Group>
        )}
      </InputOTP>
    );
  },
};
