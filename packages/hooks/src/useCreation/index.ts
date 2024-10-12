import { DependencyList, useRef } from 'react';
import { depsAreSame } from '../utils';

// 这个hooks 相比useMemo的优势在于 useMemo 可能存在闭包陷阱
export default function useCreation<T>(
  factory: () => T,
  deps: DependencyList = []
) {
  const ref = useRef({
    initialed: false,
    obj: null as T,
    deps,
  });
  if (!ref.current.initialed || !depsAreSame(ref.current.deps, deps)) {
    ref.current.obj = factory();
  }
  return ref.current.obj;
}
