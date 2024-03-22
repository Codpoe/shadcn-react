import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export function useControl<T, K = T>(
  defaultState: T,
  propState?: T,
  propSetState?: (value: K) => any,
): [T, React.Dispatch<React.SetStateAction<K>>] {
  const isUnderControlRef = useRef(false);

  if (!isUnderControlRef.current) {
    isUnderControlRef.current = typeof propState !== 'undefined';
  }

  const propSetStateRef = useRef(propSetState);

  const [_state, _setState] = useState<T>(() => defaultState);
  const state = isUnderControlRef.current ? propState! : _state;
  const stateRef = useRef(state);
  stateRef.current = state;

  const setState: React.Dispatch<React.SetStateAction<K>> = useCallback(
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
