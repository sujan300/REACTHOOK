import React, { useState } from 'react'
import UseEffectHookMouse from './UseEffectHookMouse';

function UseEffectMouseContainer() {
    const [display,setDisplay] = useState(true);    
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {
            display && <UseEffectHookMouse />
        }
    </div>
  )
}

export default UseEffectMouseContainer