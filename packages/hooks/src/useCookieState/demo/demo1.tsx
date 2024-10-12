/**
 * title: 基础用法
 * desc: 刷新页面 状态保持
 */
import React, { } from "react";
import useCookieState from "..";

export default function App() {
  const [text, setText] = useCookieState('text')
  return <>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  </>
}