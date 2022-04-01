import React,{useContext} from 'react'
import { UserContext,UserId } from '../../App'

function ComponentF() {
    const fullName = useContext(UserContext);
    const id = useContext(UserId)
    console.log(fullName,id);
  return (
    <div>
            User Context Value is:{fullName} and user Id is :{id}
    </div>
  )
}

export default ComponentF