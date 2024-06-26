import React, { useState } from 'react'

const FunCustomTwo = () => {
   const [count, setCount] = useState(0);
   const onIncrement = () =>{
    setCount(count + 1)
   }
   const onDecrement = () =>{
    setCount(count - 1 )
   }
   const onReset = () =>{
    setCount(0)
   }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default FunCustomTwo
