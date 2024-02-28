import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slider as UiSlider } from '../ui/slider';

export interface SliderProps
  extends ComponentPropsWithoutRef<typeof UiSlider> {}

export const Slider = forwardRef<
  React.ElementRef<typeof UiSlider>,
  SliderProps
>((props, ref) => {
  return <UiSlider ref={ref} {...props} />;
});

Slider.displayName = 'Slider';
