import { useEffect, useState } from 'react';
import '../App.css'



function UserList() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  
  

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((res)=>setUser(res))
    .catch((err)=>{setError
      return(
        <p>error all the way</p>
      )
        
      
    })
  },[])


  return (
    <>
    <div className='App'>
    {user.map((han, prop) => {
      return(
              <ul>
                <li>
              <p key={prop} className='k1'>{han.name}</p>
              </li>
              </ul>
           
      )
    })}
    </div>
    </>
  )
}

export default UserList

