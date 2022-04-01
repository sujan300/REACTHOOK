import React, { useState } from 'react'

function HookCounterFive() {
    const [items,setItems] = useState([])
    const addItem = () =>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random() *10)+1,
        }])
    }
    const listStyleul = {
        color: 'red',
        listStyle:'none',
     }
  return (
    <div>
        <button onClick={addItem}>Add a Number</button>
        <ul style={listStyleul}>
            {
                items.map(item =>(
                    <li key={item.id}>{item.value} and id is: {item.id}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HookCounterFive