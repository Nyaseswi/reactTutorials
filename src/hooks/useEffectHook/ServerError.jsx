import React, { useEffect, useState } from 'react'

const ServerError = () => {
    const URL = 'https://jsonplaceholder.typicode.cm/users';
    const [userData, setUserData] =  useState([]);
    const [load, setLoad] = useState(false);
    const [isError, setIsError] = useState({status:false, msg:''})

    const fetchURL = async (urlapi) =>{
        setLoad(true)
        setIsError({status:false, msg:''})
        try {
            const response = await fetch(urlapi)
        const data = await response.json()
        setUserData(data)
        setLoad(false)
        setIsError({status:false, msg:''})   
        } catch (error) {
            setLoad(false) 
            setIsError({status:true, msg:'check URL '})
        }
        
    }

    useEffect(() =>{
        fetchURL(URL)
    }, []);

    if(load){
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

    if(isError?.status){
        return(
            <div>
                <h3 style={{color:'red'}}>{isError?.msg}</h3>
            </div>
        )
    }


  return (
    <div>
        {
            userData.map((eachUser) =>{
                const {name, email, username, phone, website} =  eachUser
                return(
                    <section>
                        <ul>
                            <li>{name}</li>
                            <li>{email}</li>
                            <li>{username}</li>
                            <li>{phone}</li>
                            <li>{website}</li>
                        </ul>
                    </section>
                )
            })
        }
    </div>
  )
}

export default ServerError