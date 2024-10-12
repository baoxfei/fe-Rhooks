import type { DebounceOptions } from './../useDebounceFn/debounceOptions';
import useDebounceFn from '../useDebounceFn';
import { useState, useEffect } from 'react';

export default function useDebounce<T>(
  v: T,
  debounceOptions?: DebounceOptions
) {
  const [value, setValue] = useState<T>(v);

  const { run } = useDebounceFn(() => {
    setValue(v);
  }, debounceOptions);

  useEffect(() => {
    run();
  }, [v]);

  return value;
}
