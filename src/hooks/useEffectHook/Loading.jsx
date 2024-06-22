import React, { useEffect, useState } from 'react'

const Loading = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const [userData, setUserData] =  useState([]);
    const [load, setLoad] = useState(false);

    const fetchURL = async (urlapi) =>{
        setLoad(true)
        try {
            const response = await fetch(urlapi)
        const data = await response.json()
        setUserData(data)
        setLoad(false)   
        } catch (error) {
            setLoad(false) 
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

export default Loading