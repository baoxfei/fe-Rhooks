import { useMemo, useRef } from 'react';
import { isDev } from '../utils/isDev';

// 1. ReturnType
// 2. global this
// 3. fnRef.current = fn

type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (typeof fn !== 'function') {
      throw new Error('fn 不是函数');
    }
  }
  const fnRef = useRef<T>(fn);
  // react devtool inspect 组件时会进行 shallow render，并且替换所有 hooks 为 mock hooks（用来获取 hook 信息，参考 bvaughn 评论）。这就会导致在选中时，触发 render，并且因为在 render 中修改 ref，导致 ref.current 被替换成 devtool mock 的空函数（无法触发更新）。但是用 useMemo 包一层，mock useMemo 会始终返回组件正常 render 时的 memorized value，也就不会破坏原有的功能了
  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current as T;
}

export default useMemoizedFn;
