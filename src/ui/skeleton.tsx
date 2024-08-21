import { cn } from "../utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("sr-animate-pulse sr-rounded-md sr-bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
