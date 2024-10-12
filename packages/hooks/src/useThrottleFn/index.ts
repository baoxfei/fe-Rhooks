import { useMemo, useRef, useEffect } from 'react';
import type { ThrottleOptions } from './throttleOptions';
import { throttle } from 'lodash';
import { isDev } from '../utils/isDev';
import { isFunction } from '../utils';
import useLast from '../useLast';
import useUnmount from '../useUnmount';
type noop = (...args: any[]) => any;

export default function useThrottleFn<T extends noop>(
  fn: T,
  options?: ThrottleOptions
) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useThrottleFn expected parameter is a function, got ${typeof fn}`
      );
    }
  }

  const wait = options?.wait ?? 1000;

  const fnRef = useLast<T>(fn);
  const throttleFn = useMemo(
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options
      ),
    []
  );

  useUnmount(() => {
    throttleFn.cancel();
  });

  return {
    run: throttleFn,
    cancel: throttleFn.cancel,
    flush: throttleFn.flush,
  };
}

function useLiteThrottle(fn: () => void, wait, deps) {
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timer.current) return;
    timer.current = setTimeout(() => {
      fn();
      clearTimeout(timer.current);
    }, wait);
  }, deps);

  return [];
}
