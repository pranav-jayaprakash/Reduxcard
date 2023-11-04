import React,{useReducer} from 'react'
import { useCustomReducer } from './CsHook'

function CustomTwo() {

    const [state,dispatch]=useCustomReducer()

  return (
    <div>
        <h1>{state.value}</h1>
        <button onClick={()=>dispatch({type:'Inc'})}>Increment</button>
        <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
        <button onClick={()=>dispatch({type:'Dec'})}>Decrement</button>
        
    </div>
  )
}

export default CustomTwo