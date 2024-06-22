import React, { useEffect, useState } from 'react'

const FetchPractice = () => {
const [userData, setUserData] = useState([]);
const URI = 'https://jsonplaceholder.typicode.com/albums';

const fetchURI = async (url) =>{
    const response = await fetch(url)
    const data = await response.json()
    setUserData(data)
}

useEffect(() =>{
    fetchURI(URI)
}, [])
  return (
  <div>
    {
        userData.map((eachUser, index) => {
            const {id, userId, title} = eachUser
           return(
            <ul key={index}>
            <li>{id}</li>
            <li>{userId}</li>
            <li>{title}</li>
        </ul>
           )
        })
    }
  </div>
   
  )
}

export default FetchPractice;