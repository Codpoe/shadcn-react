import * as React from "react"
import { XIcon } from "lucide-react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "sr-fixed sr-top-0 sr-z-[100] sr-flex sr-max-h-screen sr-w-full sr-flex-col-reverse sr-p-4 sm:sr-bottom-0 sm:sr-right-0 sm:sr-top-auto sm:sr-flex-col md:sr-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "sr-group sr-pointer-events-auto sr-relative sr-flex sr-w-full sr-items-center sr-justify-between sr-space-x-2 sr-overflow-hidden sr-rounded-md sr-border sr-p-4 sr-pr-6 sr-shadow-lg sr-transition-all data-[swipe=cancel]:sr-translate-x-0 data-[swipe=end]:sr-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:sr-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:sr-transition-none data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[swipe=end]:sr-animate-out data-[state=closed]:sr-fade-out-80 data-[state=closed]:sr-slide-out-to-right-full data-[state=open]:sr-slide-in-from-top-full data-[state=open]:sm:sr-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "sr-border sr-bg-background sr-text-foreground",
        destructive:
          "sr-destructive sr-group sr-border-destructive sr-bg-destructive sr-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "sr-inline-flex sr-h-8 sr-shrink-0 sr-items-center sr-justify-center sr-rounded-md sr-border sr-bg-transparent sr-px-3 sr-text-sm sr-font-medium sr-transition-colors hover:sr-bg-secondary focus:sr-outline-none focus:sr-ring-1 focus:sr-ring-ring disabled:sr-pointer-events-none disabled:sr-opacity-50 group-[.destructive]:sr-border-muted/40 group-[.destructive]:hover:sr-border-destructive/30 group-[.destructive]:hover:sr-bg-destructive group-[.destructive]:hover:sr-text-destructive-foreground group-[.destructive]:focus:sr-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "sr-absolute sr-right-1 sr-top-1 sr-rounded-md sr-p-1 sr-text-foreground/50 sr-opacity-0 sr-transition-opacity hover:sr-text-foreground focus:sr-opacity-100 focus:sr-outline-none focus:sr-ring-1 group-hover:sr-opacity-100 group-[.destructive]:sr-text-red-300 group-[.destructive]:hover:sr-text-red-50 group-[.destructive]:focus:sr-ring-red-400 group-[.destructive]:focus:sr-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <XIcon className="sr-h-4 sr-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("sr-text-sm sr-font-semibold [&+div]:sr-text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("sr-text-sm sr-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
