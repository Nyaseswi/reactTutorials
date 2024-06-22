import React, { useState } from 'react'

const FunctionUseState = () => {
    function intialFunction(){
      return({
        firstName:'John',
        age:30,
        job:'Mechanic'
      })

    }

    const [data, setData] = useState(intialFunction);

    const changeFirstName = () =>{
        setData({
            ...data,
            firstName:'Yaseswi'
        })
    }
    const changeAge = () =>{
        setData({
            ...data,
            age:25
        })
    }
    const changeJob = () =>{
        setData({
            ...data,
            job:'Medical Scribe'
        })
    }
  return (
    <div>
      <h4>{data.firstName}</h4>
      <button onClick={changeFirstName}>Click to change</button>
      <h4>{data.age}</h4>
      <button onClick={changeAge}>Click to change</button>
      <h4>{data.job}</h4>
      <button onClick={changeJob}>Click to change</button>
    </div>
  )
}

export default FunctionUseState
