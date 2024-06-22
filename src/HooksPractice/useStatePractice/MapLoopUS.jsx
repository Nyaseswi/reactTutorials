import React, { useState } from 'react'

const MapLoopUS = () => {
    const profile = [
        {
            name:'Yaseswi',
            age:50,
            id:1
        },
        {
            name:'Kiran',
            age:40,
            id:2
        },
        {
            name:'Naveen',
            age:30,
            id:3
        },
        {
            name:'Ruby',
            age:10,
            id:4
        }
    ]
    const [profileData, setProfileData] = useState(profile);

    const deleteHandler = (comingid) =>{
      const filteredData =  profileData.filter((deleteProfile) => {
            return deleteProfile.id !== comingid
        })
        setProfileData(filteredData)
    }
  return (
    <div>
      {
        profileData.map((eachProfileData) =>{
            const {id,name, age} = eachProfileData
            return(
                <section key={id}>
                    <h4>{name}</h4>
                    <h4>{age}</h4>
                    <button onClick={() => deleteHandler(id)}>Delete</button>
                </section>
            )
        })
      }
    </div>
  )
}

export default MapLoopUS
