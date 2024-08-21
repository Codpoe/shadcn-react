import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "../utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "sr-peer sr-flex sr-h-4 sr-w-4 sr-shrink-0 sr-rounded-sm sr-border sr-border-primary sr-shadow focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-cursor-not-allowed disabled:sr-opacity-50 data-[state=checked]:sr-bg-primary data-[state=checked]:sr-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("sr-flex sr-items-center sr-justify-center sr-text-current -sr-ml-px")}
    >
      <CheckIcon className="sr-h-4 sr-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
