import * as React from "react"

import { cn } from "../utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "sr-flex sr-min-h-[60px] sr-w-full sr-rounded-md sr-border sr-border-input sr-bg-transparent sr-px-3 sr-py-2 sr-text-sm sr-shadow-sm placeholder:sr-text-muted-foreground focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-cursor-not-allowed disabled:sr-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
