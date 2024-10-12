---
nav:
  path: '/hooks'
---

# useSessionState

保存到sessionStorage里的状态

## 代码演示

### 基本效果

<code src="./demo/demo1.tsx"></code>

### 传入函数

<code src="./demo/demo2.tsx"></code>



## API

```typescript
type State = string | undefined;

type SetState = (
  value: State
) => void;
const [state, setState]: [State, SetState] = useSessionState(
  key: string,
)
```

注意：如果想从 document.cookie 中删除这条数据，可以使用 `setState()` 或 `setState(undefined)`。

## Params

| 参数      | 说明                     | 类型      | 默认值 |
|-----------|--------------------------|-----------|--------|
| key | cookie 的 key            | `string`  | -      |



## Result

| 参数     | 说明           | 类型                    |
| -------- | -------------- | ----------------------- |
| state    | 本地 Cookie 值 | `string` \| `undefined` |
| setState | 设置 Cookie 值 | `SetState`              |

setState 可以更新 cookie options，会与 `useCookieState` 设置的 options 进行 merge 操作。

