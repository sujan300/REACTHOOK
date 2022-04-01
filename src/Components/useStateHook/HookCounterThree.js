import React , {useState} from 'react'

function HookCounterThree() {
    const [name,setName] = useState({firstName:'',lastName:''})
    console.log(name)

  return (
      <form>
          <input
            type="text"
            placeholder='first name'
            value={name.firstName}
            onChange={e=>setName({...name,firstName:e.target.value})} 
          /><br />

          <input 
            type="text"
            placeholder='last name'
            value={name.lastName}
            onChange={e=>setName({...name,lastName:e.target.value})}
          /><br />

          <h2>Your first Name-{name.firstName}</h2>
          <h2>Your last Name-{name.lastName}</h2>

          <h1>{JSON.stringify(name)}</h1>
      </form>
  )
}

export default HookCounterThree