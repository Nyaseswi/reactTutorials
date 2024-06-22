import React, { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users';

const FetchAPIUE = () => {
const [usersData, setUserData] =  useState([]);

const fetchURLData = async (urlData) => {
    const response = await fetch(urlData)
    const data = await response.json()
    // console.log(data)
    setUserData(data);
}

useEffect(() =>{
    fetchURLData(URL)
}, []);




  return (
    <div>
        {
            usersData.map((eachUser) => {
                const {id, name, email, phone} = eachUser
                return(
                    <ul key={id}>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{phone}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default FetchAPIUE