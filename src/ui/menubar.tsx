import * as React from "react"
import {
  CheckIcon,
  ChevronRightIcon,
  CircleIcon,
} from "lucide-react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

import { cn } from "../utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "sr-flex sr-h-9 sr-items-center sr-space-x-1 sr-rounded-md sr-border sr-bg-background sr-p-1 sr-shadow-sm",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-px-3 sr-py-1 sr-text-sm sr-font-medium sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[state=open]:sr-bg-accent data-[state=open]:sr-text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "sr-z-50 sr-min-w-[8rem] sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-p-1 sr-text-popover-foreground sr-shadow-lg data-[state=open]:sr-animate-in data-[state=closed]:sr-animate-out data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[side=bottom]:sr-slide-in-from-top-2 data-[side=left]:sr-slide-in-from-right-2 data-[side=right]:sr-slide-in-from-left-2 data-[side=top]:sr-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "sr-z-50 sr-min-w-[12rem] sr-overflow-hidden sr-rounded-md sr-border sr-bg-popover sr-p-1 sr-text-popover-foreground sr-shadow-md data-[state=open]:sr-animate-in data-[state=closed]:sr-fade-out-0 data-[state=open]:sr-fade-in-0 data-[state=closed]:sr-zoom-out-95 data-[state=open]:sr-zoom-in-95 data-[side=bottom]:sr-slide-in-from-top-2 data-[side=left]:sr-slide-in-from-right-2 data-[side=right]:sr-slide-in-from-left-2 data-[side=top]:sr-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "sr-relative sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-px-2 sr-py-1.5 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50",
      inset && "sr-pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "sr-relative sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-py-1.5 sr-pl-8 sr-pr-2 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="sr-absolute sr-left-2 sr-flex sr-h-3.5 sr-w-3.5 sr-items-center sr-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="sr-h-4 sr-w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "sr-relative sr-flex sr-cursor-pointer sr-select-none sr-items-center sr-rounded-sm sr-py-1.5 sr-pl-8 sr-pr-2 sr-text-sm sr-outline-none focus:sr-bg-accent focus:sr-text-accent-foreground data-[disabled]:sr-pointer-events-none data-[disabled]:sr-opacity-50",
      className
    )}
    {...props}
  >
    <span className="sr-absolute sr-left-2 sr-flex sr-h-3.5 sr-w-3.5 sr-items-center sr-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CircleIcon className="sr-h-1.5 sr-w-1.5 sr-fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "sr-px-2 sr-py-1.5 sr-text-sm sr-font-semibold",
      inset && "sr-pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("sr--mx-1 sr-my-1 sr-h-px sr-bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
