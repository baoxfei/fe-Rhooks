import { useAsyncEffect } from 'encodeHooks';
import { sleep } from '../../utils';
import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';

function useTest() {
  const [x, setX] = useState(0);

  useAsyncEffect(async () => {
    await sleep(100);
    setX(1);
  });
  return x;
}

describe('useAsyncEffect', () => {
  it('should work', async () => {
    const hook = renderHook(() => useTest());
    expect(hook.result.current).toBe(0);
    await act(async () => {
      await sleep(80);
    });
    expect(hook.result.current).toBe(0);
    await act(async () => {
      await sleep(50);
    });
    expect(hook.result.current).toBe(1);
  });

  it('should work with yield break', async () => {
    const hook = renderHook(() => {
      const [x, setX] = useState(1);
      const [y, setY] = useState(0);
      useAsyncEffect(
        async function* () {
          await sleep(100);
          yield;
          setY(x);
        },
        [x]
      );
      return {
        y,
        setX,
      };
    });
    expect(hook.result.current.y).toBe(0);

    await act(async () => {
      await sleep(50);
      hook.result.current.setX(2);
    });
    expect(hook.result.current.y).toBe(0);

    await act(async () => {
      await sleep(20);
    });
    expect(hook.result.current.y).toBe(0);

    await act(async () => {
      await sleep(50);
      hook.result.current.setX(3);
    });
    expect(hook.result.current.y).toBe(0);

    await act(async () => {
      await sleep(80);
    });
    expect(hook.result.current.y).toBe(0);

    await act(async () => {
      await sleep(50);
    });
    expect(hook.result.current.y).toBe(3);
  });
});
