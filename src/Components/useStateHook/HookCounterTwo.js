import React ,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount);
    const  increamentFive = () =>{
        for(let i=0;i<5;i++){
            setCount(previousCount=>previousCount+1);
        }
    }
  return (
    <div>
        count : {count}<br />
        <button onClick={()=>setCount(previousCount=>previousCount+1)}> increamentCount</button><br />
        <button onClick={()=>setCount(previousCount=>previousCount-1)}> decreamentCount</button><br />
        <button onClick={()=>setCount(initialCount)}>Reset Count Value</button><br />
        <button onClick={increamentFive}>increament Five</button>
    </div>
  )
}

export default HookCounterTwo