import { useMemoizedFn } from 'encodeHooks';
import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import { isFunction, isString } from '../utils';
import { isDev } from '../utils/isDev';

type State = string | undefined;
interface Options extends Cookie.CookieAttributes {
  defaultValue?: State;
}
// ! 获取可以使用() => 来初始化
// cookie document.cookie 获取的仅仅是cookie 的值 但是获取不到path 和domain等配置信息
export default function useCookieState(cookieKey: string, options?: Options) {
  // 我的想法：是从useEffect 获取cookie值
  // updateState  setState 再设置 cookie
  //
  const [state, setState] = useState<State>(() => {
    const cookieValue = Cookie.get(cookieKey);
    if (isString(cookieValue)) {
      return cookieValue;
    }
    if (options?.defaultValue) {
      return options.defaultValue;
    }
    return undefined;
  });

  const updateState = useMemoizedFn(
    (newValue: State | (() => State), newOptions: Options = {}) => {
      const { defaultValue, ...restOptions } = { ...options, ...newOptions };
      const value = isFunction(newValue) ? newValue() : newValue;
      setState(value);
      if (value === undefined) {
        Cookie.remove(cookieKey);
      } else {
        Cookie.set(cookieKey, value, restOptions);
      }
    }
  );
  return [setState, updateState];
}
