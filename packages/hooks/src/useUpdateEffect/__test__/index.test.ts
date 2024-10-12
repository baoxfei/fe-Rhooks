import { useUpdateEffect } from 'encodeHooks';
import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';

function useTest(effect) {
  const [count, setCount] = useState(0);
  useUpdateEffect(effect, [count]);
  function addCount() {
    setCount(count + 1);
  }
  return {
    addCount,
  };
}

describe('useUpdateEffect', () => {
  it('should be work', async () => {
    const fn = jest.fn();
    const hook = renderHook(() => useTest(fn));
    expect(fn).toBeCalledTimes(0);
    await act(() => {
      hook.result.current.addCount();
    });
    expect(fn).toBeCalledTimes(1);
  });
});
