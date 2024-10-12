import React, { useState } from "react"
import useAsyncEffect from ".."
import { sleep } from '../../utils'

export default () => {
  const [pass, setPass] = useState<boolean>()

  const [value, setValue] = useState('')

  useAsyncEffect(async function* () {
    setPass(undefined)
    await sleep(3000)
    setPass(true)
  }, [])

  return (
    <>
      <p>{pass === true && 'pass'}</p>
      <p>{pass === undefined && 'check'}</p>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  )
}