import { isFunction } from './../utils/index';
import { useMemoizedFn, useUpdateEffect } from 'encodeHooks';
import { useState } from 'react';

type State = string | undefined;
export interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: unknown) => void;
}
export default function createWebStorageState(
  getStorage: () => Storage | undefined
) {
  return function <T>(key: string, options: Options<T> = {}) {
    let storage: Storage | undefined;

    const onError = options.onError ?? ((e) => console.error(e));

    try {
      storage = getStorage();
      if (!storage) {
        throw new Error('current environment not support webSorage');
      }
    } catch (error) {
      onError(error);
    }

    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };

    const deserializer = (value: string) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };

    const getStoredValue = () => {
      try {
        const raw = storage?.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (error) {
        onError(error);
      }
      if (isFunction(options.defaultValue)) {
        return options.defaultValue();
      }
      return options.defaultValue;
    };

    useUpdateEffect(() => {
      setState(getStoredValue());
    }, [key]);
    const [state, setState] = useState<T>(getStoredValue());

    const updateState = useMemoizedFn((value: T | ((v?: T) => T)) => {
      const newValue = isFunction(value) ? value(state) : value;
      setState(newValue);

      if (!newValue) {
        storage?.removeItem(key);
      } else {
        storage?.setItem(key, serializer(newValue));
      }
    });
    // todo 为什么要加as const
    return [state, updateState] as const;
  };
}
