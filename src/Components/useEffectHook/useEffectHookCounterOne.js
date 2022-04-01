import React, { useEffect, useState } from 'react'

function UseEffectHookCounterOne() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect(()=>{
        console.log("useEffect - Updating document title")
        document.title = ` you Clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>{setCount(count+1)}}>Clicked {count} time</button>
    </div>
  )
}

export default UseEffectHookCounterOne


// const ans = {
//     right: '✅',
//     wrong: '❌'
// }
