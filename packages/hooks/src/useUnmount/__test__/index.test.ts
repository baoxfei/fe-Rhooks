import { renderHook } from '@testing-library/react';
import { useUnmount } from '../../';

describe('useUnmount', () => {
  it('should work', () => {
    const fn = jest.fn();
    const { rerender, unmount } = renderHook(() => useUnmount(fn));
    expect(fn).not.toBeCalled();
    rerender();
    expect(fn).not.toBeCalled();
    unmount();
    expect(fn).toBeCalled();
  });
});
