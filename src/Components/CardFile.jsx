import React,{useContext} from 'react'
import { UserContext } from './Context'

function CardFile() {

    const {User} = useContext(UserContext)


  return (
    <div>

        {User.map((dt)=>(

        
        <h1></h1>

        ))}



        
    </div>
  )
}

export default CardFile