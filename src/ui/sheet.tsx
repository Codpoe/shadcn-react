import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'sr-fixed sr-inset-0 sr-z-50 sr-bg-black/80 sr- data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'sr-fixed sr-z-50 sr-gap-4 sr-bg-background sr-p-6 sr-shadow-lg sr-transition sr-ease-in-out data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-duration-300 data-[state=open]:sr-duration-500',
  {
    variants: {
      side: {
        top: 'sr-inset-x-0 sr-top-0 sr-border-b data-[state=closed]:sr-slide-out-to-top data-[state=open]:sr-slide-in-from-top',
        bottom:
          'sr-inset-x-0 sr-bottom-0 sr-border-t data-[state=closed]:sr-slide-out-to-bottom data-[state=open]:sr-slide-in-from-bottom',
        left: 'sr-inset-y-0 sr-left-0 sr-h-full sr-w-3/4 sr-border-r data-[state=closed]:sr-slide-out-to-left data-[state=open]:sr-slide-in-from-left sm:sr-max-w-sm',
        right:
          'sr-inset-y-0 sr-right-0 sr-h-full sr-w-3/4 sr-border-l data-[state=closed]:sr-slide-out-to-right data-[state=open]:sr-slide-in-from-right sm:sr-max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="sr-absolute sr-right-4 sr-top-4 sr-rounded-sm sr-opacity-70 sr-ring-offset-background sr-transition-opacity hover:sr-opacity-100 focus:sr-outline-none focus:sr-ring-2 focus:sr-ring-ring focus:sr-ring-offset-2 disabled:sr-pointer-events-none data-[state=open]:sr-bg-secondary">
        <XIcon className="sr-h-4 sr-w-4" />
        <span className="sr-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'sr-flex sr-flex-col sr-space-y-2 sr-text-center sm:sr-text-left',
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'sr-flex sr-flex-col-reverse sm:sr-flex-row sm:sr-justify-end sm:sr-space-x-2',
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('sr-text-lg sr-font-semibold sr-text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('sr-text-sm sr-text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
