import { ComponentPropsWithoutRef, useMemo } from 'react';
import { Label } from '../Label';
import { Switch as UiSwitch } from '../ui/switch';
import { cn, mapFormProps } from '../utils';

export interface SwitchProps
  extends ComponentPropsWithoutRef<typeof UiSwitch> {}

let _switchId = 0;

export function Switch(props: SwitchProps) {
  const { id, children, className, style, ...restProps } = mapFormProps(
    props,
    'checked',
    'onCheckedChange',
  );
  const finalId = useMemo(() => id || `sr-switch-${++_switchId}`, [id]);

  if (children == null) {
    return (
      <UiSwitch
        id={finalId}
        className={cn(
          className,
          'group-data-[label-pos=top]:sr-mt-0.5 group-data-[label-pos=left]:sr-py-2',
        )}
        style={style}
        {...restProps}
      />
    );
  }

  return (
    <div
      className={cn(
        'sr-flex sr-items-center group-data-[label-pos=top]:sr-pt-0.5 group-data-[label-pos=left]:sr-py-2',
        className,
      )}
      style={style}
    >
      <UiSwitch id={finalId} {...restProps} />
      <Label
        htmlFor={finalId}
        className="sr-pl-2 sr-cursor-pointer peer-disabled:!sr-opacity-50"
      >
        {children}
      </Label>
    </div>
  );
}
