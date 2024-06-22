import React, { useEffect, useState } from 'react'

const EmptyDependencies = () => {
const [count, setCount] =    useState(0);
useEffect(() =>{
    console.log('state- component render/refresh')
}, []);
  return (
    <div>
        <button onClick={() =>{
            setCount(count + 1)
        }} >+</button>
      <h1>Count: {count}</h1>
      <button onClick={() =>{
        setCount(count - 1)
      }}>-</button>
    </div>
  )
}

export default EmptyDependencies
