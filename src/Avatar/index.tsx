import { AvatarImageProps } from '@radix-ui/react-avatar';
import {
  Avatar as UiAvatar,
  AvatarFallback as UiAvatarFallback,
  AvatarImage as UiAvatarImage,
} from '@/ui/avatar';

export interface AvatarProps extends AvatarImageProps {
  fallback?: React.ReactNode;
  delayMs?: number;
}

export function Avatar(props: AvatarProps) {
  const { fallback, delayMs, className, style, ...restProps } = props;

  return (
    <UiAvatar className={className} style={style}>
      <UiAvatarImage {...restProps} />
      {fallback != null && (
        <UiAvatarFallback delayMs={delayMs}>{fallback}</UiAvatarFallback>
      )}
    </UiAvatar>
  );
}

// src="https://github.com/codpoe.png" alt="@codpoe"
