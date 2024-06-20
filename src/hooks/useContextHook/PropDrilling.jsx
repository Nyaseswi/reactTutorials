import React, { useEffect, useState } from 'react'

const PropDrilling = () => {
    const [userData]= useState({
        firstName : 'Yaseswi',
        lastName: 'Namala',
        email:'ssv@gmail.com'
    });
  return (
    <div>
      <h1>Parent Component </h1>
      <ChildComponent userData={userData} />
    </div>
  )
}

const ChildComponent = (props) =>{
    // console.log('cc',props.userData)
    return(
        <div>
              <h1>Child Component </h1>
              <h3>{props.userData.firstName}</h3>
              <h3>{props.userData.lastName}</h3>
              <h3>{props.userData.email}</h3>
              <SubChildComponent userData={props.userData} />
              
        </div>
      
    )
}

const SubChildComponent = ({userData}) => {
    const {firstName, lastName,email } = userData
    return(
       <div>
         <h1>Sub child Component </h1>
        <h3> Firstname: {firstName}</h3>
        <h3> Lastname: {lastName}</h3>
        <h3>Email: {email}</h3>
       </div>
    )
}




export default PropDrilling
