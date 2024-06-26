import React,{useEffect, useState} from 'react';
const URL = 'https://jsonplaceholder.typicode.com/users'

const UserCustom = () => {
    const [userData, setUserData] = useState([]);

//    Api function 

const makeApi = async () =>{
   const response = await fetch(URL)
   const data = await response.json()
   setUserData(data)
}

useEffect(() =>{
    makeApi(URL)
}, []);


  return (
    <div>
      <h5>{JSON.stringify(userData)}</h5>
    </div>
  )
}

export default UserCustom
