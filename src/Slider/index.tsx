import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slider as UiSlider } from '../ui/slider';
import { cn, mapFormProps } from '../utils';

export interface SliderProps
  extends ComponentPropsWithoutRef<typeof UiSlider> {}

export const Slider = forwardRef<
  React.ElementRef<typeof UiSlider>,
  SliderProps
>((props, ref) => {
  const { className, ...restProps } = mapFormProps(
    props,
    'value',
    'onValueChange',
  );

  return (
    <UiSlider
      ref={ref}
      className={cn(
        className,
        'group-data-[label-pos=top]:sr-py-2 group-data-[label-pos=left]:sr-py-3.5',
      )}
      {...restProps}
    />
  );
});

Slider.displayName = 'Slider';
