import React, {useState} from 'react'

const UseStateObject = () => {
    const intialObject = {
        firstName:'emma',
        lastName:'Watson',
        age:27
    }
    const [data, setData] = useState(intialObject);
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
            <li>
                <ul>{data.firstName}</ul>
                <button onClick={changeFirstName}>Change First Name</button>
                <ul >{data.lastName}</ul>
                <button onClick={changeLastName}>Change Last Name</button>
                <ul >{data.age}</ul>
                <button onClick={changeAge}>Change Age</button>
            </li>
        </ul>
      
    </div>
  )
}

export default UseStateObject
