import * as React from "react"
import { MinusIcon } from "lucide-react"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "../utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "sr-flex sr-items-center sr-gap-2 has-[:disabled]:sr-opacity-50",
      containerClassName
    )}
    className={cn("disabled:sr-cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("sr-flex sr-items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "sr-relative sr-flex sr-h-9 sr-w-9 sr-items-center sr-justify-center sr-border-y sr-border-r sr-border-input sr-text-sm sr-shadow-sm sr-transition-all first:sr-rounded-l-md first:sr-border-l last:sr-rounded-r-md",
        isActive && "sr-z-10 sr-ring-1 sr-ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="sr-pointer-events-none sr-absolute sr-inset-0 sr-flex sr-items-center sr-justify-center">
          <div className="sr-h-4 sr-w-px sr-animate-caret-blink sr-bg-foreground sr-duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <MinusIcon />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
