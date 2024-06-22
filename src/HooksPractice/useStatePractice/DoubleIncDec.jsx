import React, { useState } from 'react'
const DoubleIncDec = () => {
    const [count, setCount] =useState(0);
    const increment = () =>{
        setCount((previousCount) =>{
            return previousCount + 1
        })
        setCount((previousCount) =>{
            return previousCount + 1
        })
    }
    const decrement = () =>{
        setCount((previousCount)=> previousCount -1)
        setCount((previousCount)=> previousCount -1)
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={decrement}>-</button>
    </div>
  )
}
export default DoubleIncDec
