import { useReducer, useState } from "react"

export const useCustomState = ()=>{
    const [state,setstate] = useState(0)
    function display(){
        setstate(state+1)
    }

    return [state,display,setstate]
}

export const useCustomReducer = ()=>{
    const INITIAL_STATE ={
        value:0
    }

    const reducer=(state,action)=>{
        switch (action.type) {
            case 'Inc':
                
                return {value:state.value+1};
            
            case 'Dec':
                
                return {value:state.value>0?state.value-1:0};

            case 'Reset':
                
                return {value:state.value=0};
        
            default:
                return {value:state.value}
        }
    }

    const [state,dispatch]=useReducer(reducer,INITIAL_STATE)

    return [state,dispatch]
}

