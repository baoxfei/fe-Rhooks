import React, { useState } from "react"
import useAsyncEffect from ".."
import { sleep } from '../../utils'

export default () => {
  const [pass, setPass] = useState<boolean>(false)

  useAsyncEffect(async () => {
    await sleep(3000)
    setPass(true)
  })

  return (
    <>
      <p>{pass === true && 'pass'}</p>
      <p>{pass === false && 'check'}</p>
    </>
  )
}