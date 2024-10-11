---
nav:
  path: /hooks
---

# useMemoizedFn

持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback。

在某些场景中，我们需要使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。

## 代码演示
### 基础用法
<code src="./demo/demo1.tsx"></code>

### 高级用法

<code src="./demo/demo2.tsx"></code>

## API

```typescript
const fn = useMemoizedFn<T>(fn: T): T;
```

### Result

| 参数 | 说明                      | 类型                      |
| ---- | ------------------------- | ------------------------- |
| fn   | 引用地址永远不会变化的 fn | `(...args: any[]) => any` |


### Params

| 参数 | 说明              | 类型                      | 默认值 |
|------|-------------------|---------------------------|--------|
| fn   | 需要持久化的函数  | `(...args: any[]) => any` | -      |




