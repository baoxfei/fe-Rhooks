export type DebounceOptions = {
  /**
   * 是否在延迟开始前调用函数
   */
  leading?: boolean;
  /**
   * 是否在延迟开始后调用函数
   */
  trailing?: boolean;
  /**
   * 等待时间，单位为毫秒
   */
  wait?: number;
  /**
   * 最大等待时间，单位为毫秒
   */
  maxWait?: number;
};
