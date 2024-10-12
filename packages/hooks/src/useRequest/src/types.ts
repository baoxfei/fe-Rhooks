export type Service<TData, TParams extends any[]> = (
  ...args: TParams
) => Promise<TData>;

export type Options<TData, TParams extends any[]> = {
  onBefore?: () => void;
  manual?: boolean;
  defaultParams?: TParams;
  onError?: (e: Error) => void;
};

export interface FetchState<TData, TParams extends any[]> {
  loading: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
}
