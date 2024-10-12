---
nav:
  path: /hooks
---

# useDebounceFn

防抖函数 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
type DebounceOptions = {
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
type noop = (...args: any[]) => any;

useDebounceFn(fn: noop, options?: DebounceOptions)
```

### Params

| 参数    | 说明                   | 类型                | 默认值 |
|---------|------------------------|---------------------|--------|
| fn      | 需要防抖执行的函数     | `(...args) => void` | -      |
| options | 可选项，配置防抖的行为 | `Options`           | -      |

### Options

参数`leading、trailing、wait、maxWait`参考[lodash](https://www.lodashjs.com/docs/lodash.debounce#_debouncefunc-wait0-options)           
