/**
 * title: setState 可以接收函数
 * desc: useCookieState 的 setState 可以接收 function updater，就像 useState 那样。
 */

import React from 'react';
import { useSessionState } from 'encodeHooks';

export default function App() {
  const [value, setValue] = useSessionState<string>('useCookieStateUpdater');

  return (
    <>
      <p>{value}</p>
      <button
        type="button"
        style={{ marginRight: '16px' }}
        onClick={() => setValue((v) => String(Number(v) + 1))}
      >
        inc +
      </button>
      <button
        type="button"
        style={{ marginRight: '16px' }}
        onClick={() => setValue((v) => String(Number(v) - 1))}
      >
        dec -
      </button>
      <button type="button" onClick={() => setValue('0')}>
        reset
      </button>
    </>
  );
}
