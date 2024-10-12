/**
 * title: 使用 option 配置 Cookie
 * desc: 可配置属性：默认值、有效时间、路径、域名、协议、跨域等，详见 Options 文档。
 */
import React from "react";
import useCookieState from "..";

export default function App() {
  const [text, setText] = useCookieState('text')
  return <>
    <p>{text}</p>
    <button
      type="button"
      style={{ marginRight: 16 }}
      onClick={() =>
        setText((v) => String(Number(v) + 1), {
          expires: (() => new Date(+new Date() + 10000))(),
        })
      }
    >
      inc + (10s expires)
    </button>
    <button
      type="button"
      style={{ marginRight: 16 }}
      onClick={() =>
        setText((v) => String(Number(v) - 1), {
          expires: (() => new Date(+new Date() + 10000))(),
        })
      }
    >
      dec - (10s expires)
    </button>
    <button type="button" onClick={() => setText('0')}>
      reset
    </button>
  </>
}