import { useState, useMemo } from 'react'

interface Actions<T> {
  set: (value: T) => void;
  setLeft: () => void;
  setRight: () => void
  toggle: () => void;
}

function useToggle<T = boolean>(): [T, Actions<T>]
function useToggle<T>(defaultValue: T): [T, Actions<T>]

function useToggle<T, D>(defaultValue: T, reverseValue: D): [T | D, Actions<T | D>]


function useToggle<T, D>(defaultValue = false as T, reverseValue?: D) {
  const [value, setState] = useState<T | D>(defaultValue)
  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | T;

    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | T) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    return {
      toggle,
      set,
      setLeft,
      setRight
    }
  }, [])
  return [value, actions]
}


export default useToggle
