import React, { useEffect, useState } from 'react'

const Api = 'https://jsonplaceholder.typicode.com/users'
const PartOneApi = () => {
 const [userData, setUserData] =   useState([]);
 const [loading, isLoading] = useState(false);
 const [isError, setIsError] = useState(false)

 const fetchApi = async (url) =>{
    isLoading(true)
    setIsError(false)
    try{
        const response = await fetch(url);
        const data = await response.json();
        setUserData(data);
        isLoading(false)
    }catch(error){
        setIsError(true)
        isLoading(false)
    }

 }
 useEffect(() =>{
    fetchApi(Api)
 }, []);

//  loading 

if(loading){
    return(
        <h5>Loading Wait</h5>
    )
}

// error 

if(isError){
    return(
        <h3>Check error</h3>
    )
}


  return (
    <div>
      {
        userData.map((eachUser) => {
            const {name, id} = eachUser
            return(
                <section key={id}>
                    <h3>Name : {name}</h3>
                </section>
            )
        })
      }
    </div>
  )
}

export default PartOneApi
