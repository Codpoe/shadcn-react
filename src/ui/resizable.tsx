import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "sr-flex sr-h-full sr-w-full data-[panel-group-direction=vertical]:sr-flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "sr-relative sr-flex sr-w-px sr-items-center sr-justify-center sr-bg-border after:sr-absolute after:sr-inset-y-0 after:sr-left-1/2 after:sr-w-1 after:sr--translate-x-1/2 focus-visible:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring focus-visible:sr-ring-offset-1 data-[panel-group-direction=vertical]:sr-h-px data-[panel-group-direction=vertical]:sr-w-full data-[panel-group-direction=vertical]:after:sr-left-0 data-[panel-group-direction=vertical]:after:sr-h-1 data-[panel-group-direction=vertical]:after:sr-w-full data-[panel-group-direction=vertical]:after:sr--translate-y-1/2 data-[panel-group-direction=vertical]:after:sr-translate-x-0 [&[data-panel-group-direction=vertical]>div]:sr-rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="sr-z-10 sr-flex sr-h-4 sr-w-3 sr-items-center sr-justify-center sr-rounded-sm sr-border sr-bg-border">
        <GripVerticalIcon className="sr-h-2.5 sr-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
