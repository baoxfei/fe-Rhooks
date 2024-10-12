/**
 * title: 基础用法
 * desc: 用于获取最后一次的值
 */
import { useLast } from 'encodeHooks';
import React, { useEffect, useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0);
  const countRef = useLast(count);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount(++countRef.current)
      setCount2(count2 + 1)
    }, 1000)
    return () => {
      console.log('---');

      clearInterval(timer1)
    }
  }, [])

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(defult): {count2}</p>
    </>

  )
}