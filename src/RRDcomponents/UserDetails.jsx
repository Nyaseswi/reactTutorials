import React from 'react'
import {useParams} from 'react-router-dom';
import Data from './UserData';

const UserDetails = () => {
const {userId} =  useParams();
const userDataDetails = Data.find((eachData) => eachData.id == userId)
  return (
    <div>
      <h1>UserDetails</h1>
      <img src='https://shorturl.at/BY73X' width='30px' style={{float:'left'}}/>
      <h3> User Name: {userDataDetails.name}</h3>
     
    </div>
  )
}

export default UserDetails
