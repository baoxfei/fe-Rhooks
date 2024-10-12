import { useMemo, useRef, useEffect } from 'react';
import type { DebounceOptions } from './debounceOptions';
// import { debounce } from 'lodash-es';
import { debounce } from 'lodash';
import { isDev } from '../utils/isDev';
import { isFunction } from '../utils';
import useLast from '../useLast';
import useUnmount from '../useUnmount';
type noop = (...args: any[]) => any;

export default function useDebounceFn<T extends noop>(
  fn: T,
  options?: DebounceOptions
) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useDebounceFn expected parameter is a function, got ${typeof fn}`
      );
    }
  }

  const wait = options?.wait ?? 1000;

  const fnRef = useLast<T>(fn);
  const debouncedFn = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options
      ),
    []
  );

  useUnmount(() => {
    debouncedFn.cancel();
  });

  return {
    run: debouncedFn,
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
}

function useLiteDebounce(fn: () => void, wait, deps) {
  const fnRef = useRef(fn);
  const debounceFnRef = useRef<Function>();
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fn();
      clearTimeout(timer.current);
    }, wait);
  }, deps);

  return {
    run: debounceFnRef.current,
  };
}
