import React from 'react';
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '../ui/chart';

export { type ChartConfig };

export interface ChartContainerProps
  extends React.ComponentPropsWithoutRef<typeof ChartContainer> {}

export interface ChartTooltipProps
  extends React.ComponentPropsWithoutRef<typeof ChartTooltip> {}

export interface ChartTooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof ChartTooltipContent> {}

export interface ChartLegendProps
  extends React.ComponentPropsWithoutRef<typeof ChartLegend> {}

export interface ChartLegendContentProps
  extends React.ComponentPropsWithoutRef<typeof ChartLegendContent> {}

ChartLegend.displayName = 'Legend';

export const Chart = {
  Container: ChartContainer,
  Style: ChartStyle,
  Tooltip: ChartTooltip,
  TooltipContent: ChartTooltipContent,
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
};
