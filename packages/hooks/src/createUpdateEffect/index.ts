import { useEffect, useLayoutEffect, useRef } from 'react';

type EffectType = typeof useEffect | typeof useLayoutEffect;

export default function createUpdateEffect(hook: EffectType) {
  return function (effect: () => void, deps: any[]) {
    const isMount = useRef(false);

    // todo 组件卸载才会执行一次
    hook(() => {
      return () => {
        isMount.current = false;
      };
    }, []);

    hook(() => {
      if (isMount.current) {
        effect();
      } else {
        isMount.current = true;
      }
      // todo 在这里会每次更新都会去执行
      return () => {};
    }, deps);
  };
}
