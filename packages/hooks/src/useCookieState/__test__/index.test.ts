import Cookie from 'js-cookie';
import type { Options } from '..';
import useCookieState from '..';
import { renderHook, act } from '@testing-library/react';

describe('useCookieState', () => {
  const setUp = (key: string, options?: Options) =>
    renderHook(() => {
      const [state, setState] = useCookieState(key, options);
      return {
        setState,
        state,
      };
    });

  it('getKey should work', async () => {
    const COOKIE_NAME = 'cookie-name';
    const hook = setUp(COOKIE_NAME, {
      defaultValue: 'A',
    });
    expect(hook.result.current.state).toBe('A');

    await act(() => {
      hook.result.current.setState('B');
    });
    expect(Cookie.get(COOKIE_NAME)).toBe('B');
  });

  it('should support undefined', async () => {
    const COOKIE_NAME = 'support-undefined';
    const hook = setUp(COOKIE_NAME, {
      defaultValue: 'A',
    });
    expect(hook.result.current.state).toBe('A');

    await act(() => {
      hook.result.current.setState();
    });
    expect(Cookie.get(COOKIE_NAME)).toBe(undefined);
  });
  it('should be support function updater', async () => {
    const COOKIE_NAME = 'cookie-name-function';
    const hook = setUp(COOKIE_NAME, {
      defaultValue: 'A',
    });
    expect(hook.result.current.state).toBe('A');

    await act(() => {
      hook.result.current.setState(() => 'B');
    });
    expect(Cookie.get(COOKIE_NAME)).toBe('B');
  });
});
