import React from 'react'
import { useCustomState } from './CsHook'


function ComponentOne() {

    const [state,display,setstate]=useCustomState()




  return (
    <div>
        <h1>{state}</h1>
        <button onClick={display}>Click</button>
    </div>
  )
}

export default ComponentOne