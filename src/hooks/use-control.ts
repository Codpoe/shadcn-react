import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export function useControl<T>(
  defaultState: T,
  propState?: T,
  propSetState?: (value: T) => any,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const isUnderControlRef = useRef(false);

  if (!isUnderControlRef.current) {
    isUnderControlRef.current = typeof propState !== 'undefined';
  }

  const propSetStateRef = useRef(propSetState);

  const [_state, _setState] = useState<T>(() => defaultState);
  const state = isUnderControlRef.current ? propState! : _state;
  const stateRef = useRef(state);
  stateRef.current = state;

  const setState: React.Dispatch<React.SetStateAction<T>> = useCallback(
    value => {
      const newValue =
        typeof value === 'function' ? (value as any)(stateRef.current) : value;
      _setState(newValue);
      propSetStateRef.current?.(newValue);
    },
    [],
  );

  useLayoutEffect(() => {
    if (isUnderControlRef.current) {
      _setState(propState!);
    }
  }, [propState]);

  return [state, setState];
}
