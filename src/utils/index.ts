import clsx, { ClassValue } from 'clsx';

const CLASS_PREFIX = 'sdn';

export function cx(component: string, ...inputs: ClassValue[]) {
  return clsx(`${CLASS_PREFIX}-${component}`, ...inputs);
}
