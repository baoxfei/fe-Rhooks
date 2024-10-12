import { useLast } from '../../';
import { renderHook, act } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { sleep } from '../../utils';

function useTest() {
  const [count, setCount] = useState(0);
  const countRef = useLast(count);
  useEffect(() => {
    setInterval(() => {
      setCount(countRef.current + 1);
    }, 1000);
  }, []);
  return {
    countRef,
  };
}

describe('useLast', () => {
  it('should work', async () => {
    const { result } = renderHook(() => useTest());
    expect(result.current.countRef.current).toBe(0);
    await act(async () => {
      await sleep(2000);
    });
    expect(result.current.countRef.current).toBe(2);
  });
});
