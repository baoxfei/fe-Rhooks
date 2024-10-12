import { Service, Options } from './src/types';
import useRequestImplement from './src/useRequestImplement';

export default function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams>
) {
  return useRequestImplement(service, options);
}
