import React, { useEffect, useState } from 'react'

const UEDoubleDep = () => {
 const [count, setCount] =   useState(0);
 const [data, setData] = useState(true);
 useEffect(() =>{
    console.log('state/refresh')
 },[count, data]);
  return (
    <div>
        <button onClick={() =>{
            setCount(count +1)
        }}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={() =>{
        setCount(count -1 )
      }}>-</button>

      <hr/>
      {
        data ? 'data is true' : 'data is false'
      }
      <button onClick={() =>{
        setData(false)
      }}>Hide data </button>
    </div>
  )
}

export default UEDoubleDep
