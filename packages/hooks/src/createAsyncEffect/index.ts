import { useEffect, useLayoutEffect, DependencyList } from 'react';

type EffectType = typeof useEffect | typeof useLayoutEffect;

const isAsyncGenerator = (val): val is Generator =>
  typeof val[Symbol.asyncIterator] === 'function';
// todo 再看一遍中断机制
export default function createAsyncEffect(hook: EffectType) {
  return function (
    effect: () => AsyncGenerator<void, void, unknown> | Promise<void>,
    deps?: DependencyList
  ) {
    hook(() => {
      let cancel = false;
      const e = effect();
      async function execute() {
        if (isAsyncGenerator(e)) {
          while (true) {
            const result = await e.next();
            if (result.done || cancel) {
              break;
            }
          }
        } else {
          await e;
        }
      }
      execute();
      return () => {
        cancel = true;
      };
    }, deps);
  };
}
