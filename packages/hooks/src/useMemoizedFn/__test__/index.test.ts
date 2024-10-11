import { renderHook, act } from '@testing-library/react';
import React, { useState } from 'react';
import { useMemoizedFn } from '../../';

const useCount = () => {
  const [count, setCount] = useState(0);

  const memoizedFn = useMemoizedFn(() => count);
  const addCount = () => {
    setCount(count + 1);
  };

  return {
    memoizedFn,
    addCount,
  };
};

let hook;

describe('useMemoized', () => {
  it('useMemoizedFn should word', async () => {
    await act(() => {
      hook = renderHook(() => useCount());
    });
    const currentFn = hook.result.current.memoizedFn;
    expect(hook.result.current.memoizedFn()).toBe(0);
    await act(() => {
      hook.result.current.addCount();
    });
    expect(hook.result.current.memoizedFn()).toBe(1);
    expect(hook.result.current.memoizedFn).toEqual(currentFn);
  });
});
