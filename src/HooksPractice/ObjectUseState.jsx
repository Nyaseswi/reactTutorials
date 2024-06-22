import React, { useState } from 'react'

const ObjectUseState = () => {
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        occupation: "Software Developer"
    }
    
const [samePerson, changePerson] =  useState(person);
const changeFirstName = () =>{
    changePerson({
        ...person,
        firstName:'Yaseswi'
    })  
}

const changeLastName = () =>{
    changePerson({
        ...person,
        lastName:'Namala'
    })
}

const changeAge = () =>{
    changePerson({
        ...person,
        age:25
    })
}

const changeOccupation = () =>{
    changePerson({
        ...person,
        occupation:'Medical Scribe'
    })
}

  return (
    <div>
      <h4>{samePerson.firstName}</h4>
      <button onClick={changeFirstName}>Change firstname</button>
      <h4>{samePerson.lastName}</h4>
      <button onClick={changeLastName}>Change lastname</button>
      <h4>{samePerson.age}</h4>
      <button onClick={changeAge}>Change age</button>
      <h4>{samePerson.occupation}</h4>
      <button onClick={changeOccupation}>Change occupation</button>
    </div>
  )
}

export default ObjectUseState
