import React,{useState, useSyncExternalStore} from 'react'

function Value() {

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [address, setaddress] = useState('')

    const display =(e)=>{

        e.preventDefault()
        console.log(name,age,address)

    }

  return (
    <div>

        <input type="text" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" placeholder='age' value={age} onChange={(e)=>setage(e.target.value)}/>
        <input type="text" placeholder='address' value={address} onChange={(e)=>setaddress(e.target.value)}/>
        <button onClick={display}>Click</button>
        
    </div>
  )
}

export default Value