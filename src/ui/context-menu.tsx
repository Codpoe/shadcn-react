import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  CircleIcon,
} from "lucide-react"

import { cn } from "../utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-px-2 sr-py-1.5 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[state=open]:sr-bg-accent data-[state=open]:sr-text-accent-foreground",
      inset && "sr-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="sr-ml-auto sr-h-4 sr-w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "sr-z-50 sr-min-w-[8rem] sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-p-1 sr-text-popover-foreground sr-shadow-lg data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[side=bottom]:sr-slide-in-from-top-2 data-[side=left]:sr-slide-in-from-right-2 data-[side=right]:sr-slide-in-from-left-2 data-[side=top]:sr-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "sr-z-50 sr-min-w-[8rem] sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-p-1 sr-text-popover-foreground sr-shadow-md data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[side=bottom]:sr-slide-in-from-top-2 data-[side=left]:sr-slide-in-from-right-2 data-[side=right]:sr-slide-in-from-left-2 data-[side=top]:sr-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "sr-relative sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-px-2 sr-py-1.5 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50",
      inset && "sr-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "sr-relative sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-py-1.5 sr-pl-8 sr-pr-2 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="sr-absolute sr-left-2 sr-flex sr-h-3.5 sr-w-3.5 sr-items-center sr-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon className="sr-h-4 sr-w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "sr-relative sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-py-1.5 sr-pl-8 sr-pr-2 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50",
      className
    )}
    {...props}
  >
    <span className="sr-absolute sr-left-2 sr-flex sr-h-3.5 sr-w-3.5 sr-items-center sr-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <CircleIcon className="sr-h-1.5 sr-w-1.5 sr-fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "sr-px-2 sr-py-1.5 sr-text-sm sr-font-semibold sr-text-foreground",
      inset && "sr-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("sr--mx-1 sr-my-1 sr-h-px sr-bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "sr-ml-auto sr-text-xs sr-tracking-widest sr-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
