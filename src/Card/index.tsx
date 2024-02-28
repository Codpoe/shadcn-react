import {
  Card as UiCard,
  CardHeader as UiCardHeader,
  CardTitle as UiCardTitle,
  CardDescription as UiCardDescription,
  CardContent as UiCardContent,
  CardFooter as UiCardFooter,
} from '../ui/card';

export interface CardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps) {
  const { title, description, footer, children, ...restProps } = props;
  return (
    <UiCard {...restProps}>
      {(title != null || description != null) && (
        <UiCardHeader>
          {title != null && <UiCardTitle>{title}</UiCardTitle>}
          {description != null && (
            <UiCardDescription>{description}</UiCardDescription>
          )}
        </UiCardHeader>
      )}
      <UiCardContent>{children}</UiCardContent>
      {footer != null && <UiCardFooter>{footer}</UiCardFooter>}
    </UiCard>
  );
}
