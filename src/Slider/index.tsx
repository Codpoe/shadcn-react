import cx from 'clsx';
import * as RadixSlider from '../primitives/Slider';
import './index.css';

export interface SliderProps {
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  orientation?: React.AriaAttributes['aria-orientation'];
  onChange?: (value: number[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function Slider(props: SliderProps) {
  const { className, onChange, ...restProps } = props;

  return (
    <RadixSlider.Root
      className={cx('sdn-slider', className)}
      onValueChange={onChange}
      {...restProps}
    >
      <RadixSlider.Track className="sdn-slider-track">
        <RadixSlider.Range className="sdn-slider-range" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="sdn-slider-thumb" />
    </RadixSlider.Root>
  );
}
