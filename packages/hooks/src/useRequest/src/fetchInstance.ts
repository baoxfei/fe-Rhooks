import { isFunction } from './../../utils/index';
import { MutableRefObject } from 'react';
import { FetchState, Options, Service } from './types';

class FetchInstance<TData, TParams extends any[]> {
  state: FetchState<TData, TParams> = {
    loading: false,
    data: undefined,
    error: undefined,
    params: undefined,
  };
  count: number = 0;

  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public subscribe: () => void,
    public initialState?: FetchState<TData, TParams>
  ) {
    this.state = {
      ...this.state,
      ...initialState,
      loading: !options.manual,
    };
  }

  setState(state: Partial<FetchState<TData, TParams>>) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.subscribe();
  }

  cancel() {
    this.count += 1;
    this.setState({
      loading: false,
    });
  }

  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      if (this.options.onError) {
        this.options.onError(error);
      }
    });
  }

  async runAsync(...params: TParams) {
    this.count += 1;
    const currentCount = this.count;
    try {
      this.setState({
        loading: true,
      });
      const servicePromise = this.serviceRef.current(...params);
      const result = await servicePromise;
      if (this.count !== currentCount) {
        return new Promise((resolve) => resolve({}));
      }
      this.setState({
        loading: false,
        data: result,
        error: undefined,
      });
    } catch (error) {
      if (this.count !== currentCount) {
        return new Promise((resolve) => resolve({}));
      }
      if (this.options.onError) {
        this.options.onError(error);
      }
      this.setState({
        error,
        loading: false,
      });

      throw error;
    }
  }

  mutate(data?: TData | ((oldData?: TData) => TData | undefined)) {
    const newData = isFunction(data)
      ? data(this.state.data || ({} as TData))
      : data;
    this.setState({
      data: newData,
    });
  }

  refresh() {
    // @ts-ignore
    return this.run(...(this.state.params || []));
  }
  refreshAsync() {
    // @ts-ignore
    return this.runAsync(...(this.state.params || []));
  }
}

export default FetchInstance;
