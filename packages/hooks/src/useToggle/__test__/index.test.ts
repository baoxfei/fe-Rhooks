import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../../';

describe('useToggle', () => {
  it('should init', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBeFalsy();
  });

  it('test on method', async () => {
    const { result } = renderHook(() => useToggle('hello'));
    await act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBeFalsy();
    await act(() => {
      result.current[1].setLeft();
    });
    expect(result.current[0]).toBe('hello');
    await act(() => {
      result.current[1].setRight();
    });
    expect(result.current[0]).toBeFalsy();
  });

  it('test on optional', async () => {
    const { result } = renderHook(() => useToggle('hello', 'world'));
    await act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe('world');
    await act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe('hello');
  });
});
