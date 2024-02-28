import React from 'react';
import { AspectRatio as UiAspectRatio } from '../ui/aspect-ratio';

export interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof UiAspectRatio> {
  children?: React.ReactNode;
}

export function AspectRatio(props: AspectRatioProps) {
  return <UiAspectRatio {...props} />;
}
