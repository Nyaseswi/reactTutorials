import React, { useState } from 'react'

const MultipleStates = () => {
    const[firstName, setFirstName] = useState('emma');
    const[lastName, setLastName] = useState('watson');
    const[age, setAge] = useState(27);
    const changeFirstName = () =>{
        setFirstName('Yaseswi')
    }
    const changeLastName = () =>{
        setLastName('Namala')
    }
    const changeAge = () =>{
        setAge(25)
    }
  return (
    <div>
      <ul>
        <li>{firstName}</li>
        <button onClick={changeFirstName}>change first name</button>
        <li>{lastName}</li>
        <button onClick={changeLastName}>change last name</button>
        <li>{age}</li>
        <button onClick={changeAge}>change age</button>
      </ul>
    </div>
  )
}

export default MultipleStates
