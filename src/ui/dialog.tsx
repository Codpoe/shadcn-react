import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "../utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "sr-fixed sr-inset-0 sr-z-50 sr-bg-black/80 sr- data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "sr-fixed sr-left-[50%] sr-top-[50%] sr-z-50 sr-grid sr-w-full sr-max-w-lg sr-translate-x-[-50%] sr-translate-y-[-50%] sr-gap-4 sr-border sr-bg-background sr-p-6 sr-shadow-lg sr-duration-200 data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[state=closed]:sr-slide-out-to-left-1/2 data-[state=closed]:sr-slide-out-to-top-[48%] data-[state=open]:sr-slide-in-from-left-1/2 data-[state=open]:sr-slide-in-from-top-[48%] sm:sr-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="sr-absolute sr-right-4 sr-top-4 sr-rounded-sm sr-opacity-70 sr-ring-offset-background sr-transition-opacity hover:sr-opacity-100 focus:sr-outline-none focus:sr-ring-2 focus:sr-ring-ring focus:sr-ring-offset-2 disabled:sr-pointer-events-none data-[state=open]:sr-bg-accent data-[state=open]:sr-text-muted-foreground">
        <XIcon className="sr-h-4 sr-w-4" />
        <span className="sr-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sr-flex sr-flex-col sr-space-y-1.5 sr-text-center sm:sr-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sr-flex sr-flex-col-reverse sm:sr-flex-row sm:sr-justify-end sm:sr-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "sr-text-lg sr-font-semibold sr-leading-none sr-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("sr-text-sm sr-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
