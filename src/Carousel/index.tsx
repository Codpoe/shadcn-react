import {
  Children,
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious as UiCarouselPrevious,
  CarouselNext as UiCarouselNext,
  type CarouselApi,
} from '../ui/carousel';
import { cn } from '../utils';

export type { CarouselApi };

type UiCarouselProps = ComponentPropsWithoutRef<typeof UiCarousel>;

export type CarouselProps = UiCarouselProps['opts'] &
  Pick<UiCarouselProps, 'plugins' | 'orientation' | 'setApi'> & {
    /**
     * @default false
     */
    showIndicator?: boolean;
    /**
     * @default 'outside'
     */
    showControls?: false | 'inside' | 'outside';
    onIndexChange?: (index: number) => any;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  };

export function Carousel(props: CarouselProps) {
  const {
    plugins,
    orientation = 'horizontal',
    setApi,
    showIndicator = false,
    showControls = 'outside',
    onIndexChange,
    children,
    className,
    style,
    ...restProps
  } = props;

  const [currentIndex, setCurrentIndex] = useState(restProps.startIndex || 0);
  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;

  const [carouselApi, _setCarouselApi] = useState<CarouselApi>();

  const setCarouselApi = useCallback(
    (api: CarouselApi) => {
      _setCarouselApi(api);
      setApi?.(api);
    },
    [_setCarouselApi, setApi],
  );

  useEffect(() => {
    const cb = (api: NonNullable<CarouselApi>) => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      onIndexChangeRef.current?.(index);
    };

    carouselApi?.on('select', cb);
    return () => {
      carouselApi?.off('select', cb);
    };
  }, [carouselApi]);

  const controlsInside = showControls === 'inside';

  const length =
    Children.map(children, child => {
      return (child as any)?.type === CarouselItem;
    })?.filter(Boolean)?.length || 0;

  return (
    <UiCarousel
      className="sr-group"
      plugins={plugins}
      orientation={orientation}
      setApi={setCarouselApi}
      opts={restProps}
    >
      <CarouselContent className={className} style={style}>
        {children}
      </CarouselContent>
      {showControls && (
        <>
          <Carousel.Previous
            className={cn(
              controlsInside &&
                '!sr-bg-background/30 hover:!sr-bg-accent/50 !sr-opacity-0 group-hover:!sr-opacity-100 sr-transition-opacity',
              controlsInside &&
                (orientation === 'horizontal' ? '!sr-left-2' : '!sr-top-2'),
            )}
            variant={controlsInside ? 'ghost' : 'outline'}
          />
          <Carousel.Next
            className={cn(
              controlsInside &&
                '!sr-bg-background/30 hover:!sr-bg-accent/50 sr-opacity-0 group-hover:sr-opacity-100 sr-transition-opacity',
              controlsInside &&
                (orientation === 'horizontal' ? '!sr-right-2' : '!sr-bottom-2'),
            )}
            variant={controlsInside ? 'ghost' : 'outline'}
          />
        </>
      )}
      {showIndicator && length > 0 && (
        <div
          className={cn(
            'sr-absolute sr-flex',
            orientation === 'horizontal'
              ? 'sr-bottom-2 sr-left-1/2 -sr-translate-x-1/2'
              : 'sr-right-2 sr-top-1/2 -sr-translate-y-1/2 sr-flex-col',
          )}
        >
          {Array.from({ length }, (_, i) => (
            <div
              key={i}
              className={cn(
                'sr-w-1.5 sr-h-1.5 sr-mr-2 sr-rounded-full sr-bg-background sr-opacity-30',
                orientation === 'horizontal' ? 'sr-mr-2' : 'sr-mb-2',
                i === length - 1 &&
                  (orientation === 'horizontal' ? '!sr-mr-0' : '!sr-mb-0'),
                currentIndex === i && '!sr-opacity-100',
              )}
            />
          ))}
        </div>
      )}
    </UiCarousel>
  );
}

function CarouselPrevious(
  props: ComponentPropsWithoutRef<typeof UiCarouselPrevious>,
) {
  const { className, ...restProps } = props;
  return (
    <UiCarouselPrevious
      {...restProps}
      className={cn(className, '!sr-h-8 !sr-w-8 !sr-rounded-full')}
    />
  );
}

function CarouselNext(props: ComponentPropsWithoutRef<typeof UiCarouselNext>) {
  const { className, ...restProps } = props;
  return (
    <UiCarouselNext
      {...restProps}
      className={cn(className, '!sr-h-8 !sr-w-8 !sr-rounded-full')}
    />
  );
}

Carousel.Item = CarouselItem;
Carousel.Previous = CarouselPrevious;
Carousel.Next = CarouselNext;
