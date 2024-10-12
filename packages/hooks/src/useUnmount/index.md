---
nav:
  path: '/hooks'
---

# useUnMount

在组件卸载（unmount）时执行的 Hook。


## 代码演示

### 基本效果

<code src="./demo/demo1.tsx"></code>


## API

```typescript
useUnMount(fn: () => void)
```

## Params

| 参数 | 说明             | 类型         | 默认值 |
|------|------------------|--------------|--------|
| fn   | 组件卸载执行函数 | `() => void` | -      |