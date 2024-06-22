import React from 'react'

const CreateComponents = () => {
    const body = {
        title:'Kidney',
        department:'Nephrologist'
    }

    const doctor = (body) => {
        return `My ${body.title} is treated by ${body.department}`
    }
    // creating function declaration 
    function printName(name){
        return name
    }
    
    // access objects
    const userObject = {
        userName: 'Kiran',
        userAge: 27,
        address : {
            country:'UK',
            city:'Europe'
        }
    }
    // accessing array of objects 
    const userProfile = [
        {
            profileName: 'Veda',
            profileAge:30,
            profileSex:'Female'
        },
        {
            profileName: 'Vinila',
            profileAge:20,
            profileSex:'Male'
        }
    ]
// accessing variables 
    const name = 'Yaseswi'
    const surName = 'Namala'
  return (
    <>
     <h3>Creating Components</h3>
     <h4>multiple components </h4>
     <h4>Accessing Variables: My name is {name} {surName}</h4>
     <img src='image' alt={name}/>
     <h4>Accessing Objects: User name and age is {userObject.userName} {userObject.userAge}</h4>
     <h4>Accessing Nested Objects: {userObject.userName} lives in {userObject.address.country} {userObject.address.city}</h4>
     <h4> {userProfile[0].profileName} gender is {userProfile[0].profileSex}</h4>
     <h4> {userProfile[1].profileName} gender is {userProfile[1].profileSex}</h4>
     <h4>{printName('Name is SSV')}</h4>
     <h4>Doctor : {doctor(body)}</h4>
     <h4>Arthematic Operations: Addition of 10+10= {10+10}</h4>

    </>
   
  )
}

export default CreateComponents
