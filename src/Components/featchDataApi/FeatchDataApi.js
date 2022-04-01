import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FeatchDataApi() {
    const [post,setPost]=useState({});
    const [id,setID] = useState(1);
    const [error,setError] = useState('');
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)


    const handleClick =()=>{
        setIdFromButtonClick(id);
    }


    useEffect(()=>{
        console.log(id)
        axios.get(`http://127.0.0.1:7500/api/get/${idFromButtonClick}/`)
        .then(response=>{
            console.log(response.data);
            if(typeof response.data !==typeof "" ){
                setError("");
                setPost(response.data);
            }
            else{
                setPost({})
                setError(response.data)
            }
        })
        .catch(error=>{
            console.log(error);
        })
    },[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={e=>{setID(e.target.value)}} />
        <button onClick={handleClick}>Search Post By Id</button>
        <h1>{post.title}</h1>
        <div>{post.post}</div>
        <div>
            <h1>{
                error
                }
            </h1>
        </div>
        {/* <ul>
        {
            posts.map(post=><li key={post.id}>{post.title}</li>)
        }
        </ul> */}
    </div>
  )
}

export default FeatchDataApi