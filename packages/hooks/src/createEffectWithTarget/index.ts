import { BasicTarget, getTargetElement } from './../utils/domTarget';
import { useEffect, useLayoutEffect, useRef } from 'react';

import type { DependencyList, EffectCallback } from 'react';
import { depsAreSame } from '../utils';
import useUnmount from '../useUnmount';

export default function createEffectWithTarget(
  hook: typeof useEffect | typeof useLayoutEffect
) {
  return function (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget
  ) {
    const hasInited = useRef<boolean>(false);
    const lastDepsRef = useRef<DependencyList>([]);
    const lastElementRef = useRef<(Element | null)[]>([]);

    const unloadFnRef = useRef<any>();

    hook(() => {
      const targets = Array.isArray(target) ? target : [target];
      const eles = targets.map((n) => getTargetElement(n));

      if (!hasInited.current) {
        hasInited.current = true;
        lastDepsRef.current = deps;
        lastElementRef.current = eles;
        unloadFnRef.current = effect();
        return;
      }
      if (
        lastDepsRef.current.length !== deps.length ||
        !depsAreSame(lastDepsRef.current, deps) ||
        !depsAreSame(eles, lastElementRef.current)
      ) {
        unloadFnRef.current?.();
        lastDepsRef.current = deps;
        lastElementRef.current = eles;
        unloadFnRef.current = effect();
      }
    });

    useUnmount(() => {
      hasInited.current = false;
      unloadFnRef.current?.();
    });
  };
}
