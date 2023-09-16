import React,{useEffect,useReducer,createContext} from "react";

const INITIAL_STATE ={
    User:JSON.parse(localStorage.getItem('User')) || null
}

export const UserContext = createContext(INITIAL_STATE)

const userReducer = (state,action)=>{
    switch (action.type) {

        case 'LoginSuccess':
            return {User:action.payload}
    
        default:
            return state;
    }
}


export const UserInfoContextProvider = ({children})=>{
    const [state,dispatch]=useReducer(userReducer,INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem('User',JSON.stringify(state.User))
    },[state.User])

    return(
        <UserContext.Provider value={{User:state.User,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}


