import { isFunction, isBrowser } from './../utils/index';

import createWebStorageState from '../createWebStorageState';

// type State = string | undefined;

// export default function useSessionState(key: string) {
//   const [state, setState] = useState<State>(
//     sessionStorage.getItem(key) || undefined
//   );

//   const updateState = useMemoizedFn((value: State | ((v: State) => State)) => {
//     const newValue = isFunction(value) ? value(state) : value;
//     if (!newValue) {
//       sessionStorage.removeItem(key);
//       setState(undefined);
//     } else {
//       sessionStorage.setItem(key, newValue);
//       setState(newValue);
//     }
//   });
//   // todo 为什么要加as const
//   return [state, updateState] as const;
// }

const useSesesionState = createWebStorageState(() =>
  isBrowser ? sessionStorage : undefined
);

export default useSesesionState;
