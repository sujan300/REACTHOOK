import React, { useEffect, useState } from 'react'

function IntervalhookCounter() {
    const [count,setCount] = useState(0);

    const countInterval = () =>{
        setCount(previousCount=>previousCount+1);
    }

    useEffect(
       ()=> {
           console.log("useEffect hooks ...")
           const interval = setInterval(countInterval,1000)
           return (()=>{
               clearInterval(interval);
           })
    },[])


  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default IntervalhookCounter