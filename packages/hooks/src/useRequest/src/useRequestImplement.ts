import { useEffect, useRef } from 'react';
import { Options, Service } from './types';
import { isDev } from '../../utils/isDev';
import { useCreation, useUpdate, useMemoizedFn } from 'encodeHooks';
import FetchInstance from './fetchInstance';
export default function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {}
) {
  const { manual = false } = options;
  const serviceRef = useRef(service);

  const update = useUpdate();

  if (isDev) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn(
        `expected defaultParams is array, got ${typeof options.defaultParams}`
      );
    }
  }

  const fetchInstance = useCreation(() => {
    return new FetchInstance(serviceRef, options, update);
  }, []);

  useEffect(() => {
    if (!manual) {
      const params = fetchInstance.state.params || options.defaultParams || [];
      fetchInstance.run(...(params as TParams));
    }
  }, []);

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  };
}
