/**
 * title: 基础用法
 * desc: 刷新页面 状态保持
 */
import React from "react";
import useSesesionState from "..";

export default function App() {
  const [text, setText] = useSesesionState('text')
  return <>
    <input type="text" value={text as string} onChange={(e) => setText(e.target.value)} />
  </>
}