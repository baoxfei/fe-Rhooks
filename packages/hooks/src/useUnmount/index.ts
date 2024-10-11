import { isFunction } from './../utils/index';
import { isDev } from './../utils/isDev';
import { useEffect } from 'react';
import useLast from '../useLast';

type noop = (...args: any[]) => any;

export default function useUnmount<T extends noop>(callback: T) {
  if (isDev) {
    if (!isFunction(callback)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof callback}`
      );
    }
  }

  const callbackRef = useLast<T>(callback);

  useEffect(() => () => callbackRef.current(), []);
}
