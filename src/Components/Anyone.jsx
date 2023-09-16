import React,{useEffect,useContext} from 'react'
import axios from 'axios';
import { UserContext } from './Context';


function Anyone() {

    const {dispatch} = useContext(UserContext)

    useEffect(()=>{
        const Dataget = async () => {
            try {
               const result = await axios.get('') ;
               dispatch({type:'LoginSuccess',payload:result.data})

            } catch (error) {
                console.log(error);
                
            }
        };

        Dataget()

    },[])
  return (
    <div>
        
    </div>
  )
}

export default Anyone