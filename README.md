# react 自定义hooks

## 流程
  1. lint配置 
  2. ts配置
  3. dumi配置
  4. jest配置
  5. gulp 实现 es lib 和 dts
  6. webpack 实现umd
  7. 生成MetaData
  8. upakg

## hooks
  解决闭包问题
  1. useLatest
  2. useMemoizedFn 和 useCallback的区别是什么
## 总结
  1. pnpm-workspace +》 workspace 《-》 packages
  2. 为什么要有pro。json
  3. AMD 是什么
  4. encode-bundle 编译工具
  5. gulp 编码大于约定 webpack 约定大于编码
  6. github trend 趋势图 对比两者使用量
  7. jest.setup.js 什么作用
  8. pnpm -r
  9. if else 里放hook 1. 是使用链表结构保存 保证hooks的顺序的一致性
  10. 闭包的原理 是保存了之前的上下文
  11. 封装hooks的思路 怎么使用 明确功能 - 应用场景
      1.  具有一定逻辑的代码封装起来，强调的函数式的变成思路。如何使用
      2.  提供的时机，遵循实行顺序什么时候执行什么事，达到什么效果
      3.  通过状态来驱动 经过组件内部的逻辑 最后输出的UI

  12. cookie 的操作 d.toGMTString

## pnpm
  1. 安装失败 node 不同版本原因

## todo
  1. 背书
  2. 一天两个个state useMount useUnMount useAsyncEffect useRequest useThrottle
  3. git actions
  4. 多包环境下 tsconfig.json 和 包里的tsconfig.json