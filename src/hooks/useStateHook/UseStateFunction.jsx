import React, { useState } from 'react'

const UseStateFunction = () => {
    function intialFunction(){
        return({
            firstName: 'emma',
            lastName:'watson',
            age:27
        })
    }
    const [data, setData] = useState(intialFunction);
    const changeFirstName = () =>{
        setData({
            ...data,
            firstName:'Yaseswi'
        })
    }
    const changeLastName = () =>{
        setData({
            ...data,
            lastName:'Namala'
        })
    }
    const changeAge = () =>{
        setData({
            ...data,
            age: 25
        })
    }
  return (
    <div>
        <ul>
            <li>{data.firstName}</li>
            <button onClick={changeFirstName}> Tap to change first name</button>
            <li>{data.lastName}</li>
            <button onClick={changeLastName}> Tap to change last name</button>
            <li>{data.age}</li>
            <button onClick={changeAge}>Tap to change age</button>
        </ul>
      
    </div>
  )
}

export default UseStateFunction
