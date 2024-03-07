import { Loader2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../utils';

export interface SpinProps {
  loading?: boolean;
  delay?: number;
  /**
   * @default 20
   */
  size?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Spin(props: SpinProps) {
  const {
    loading = false,
    delay,
    size = 20,
    children,
    className,
    style,
  } = props;
  const [finalLoading, setFinalLoading] = useState(delay ? false : loading);

  useEffect(() => {
    if (delay && loading) {
      const timer = setTimeout(() => {
        setFinalLoading(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setFinalLoading(loading);
    }
  }, [loading, delay]);

  if (children == null) {
    return (
      <Loader2Icon
        className={cn(
          className,
          'sr-w-5 sr-h-5 sr-text-primary sr-animate-spin',
        )}
        style={{
          ...style,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  }

  return (
    <div className={cn(className, 'sr-relative')} style={style}>
      <div className={cn('sr-relative', finalLoading && 'sr-select-none')}>
        {children}
      </div>
      {finalLoading && (
        <div className="sr-absolute sr-inset-0 sr-z-10 sr-flex sr-flex-col sr-justify-center sr-items-center sr-bg-white/60">
          <Loader2Icon
            className="sr-w-5 sr-h-5 sr-text-primary sr-animate-spin"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        </div>
      )}
    </div>
  );
}
