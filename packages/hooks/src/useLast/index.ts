import { useRef } from 'react';

export default function useLast<T>(value: T) {
  const last = useRef<T>(value);
  last.current = value;
  return last;
}
