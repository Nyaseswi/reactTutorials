import React, { useState } from 'react'

const CountExample = () => {
    const [count, setCount] = useState(0)
    // const increment = () => {
    //     setCount(count + 1)
    // }
    // const decrement = () =>{
    //     setCount(count - 1)
    // }
  return (
    <div>
        {/* <button onClick={increment}>+</button> */}
        <button onClick={() =>{
            setCount(count + 1)
        }}>+</button>
      <h1>Count: {count}</h1>
      {/* <button onClick={decrement}>-</button> */}
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button>
    </div>
  )
}

export default CountExample
