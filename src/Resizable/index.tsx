import { ComponentProps } from 'react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../ui/resizable';

export interface ResizableProps
  extends ComponentProps<typeof ResizablePanelGroup> {}

export interface ResizablePanelProps
  extends ComponentProps<typeof ResizablePanel> {}

export interface ResizableHandleProps
  extends ComponentProps<typeof ResizableHandle> {}

export const Resizable: typeof ResizablePanelGroup & {
  Panel: typeof ResizablePanel;
  Handle: typeof ResizableHandle;
} = ResizablePanelGroup as any;

Resizable.Panel = ResizablePanel;
Resizable.Handle = ResizableHandle;
