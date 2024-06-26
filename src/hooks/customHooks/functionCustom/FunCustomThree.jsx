import React from 'react'
import ArgumentFunction from './ArgumentFunction'

const FunCustomThree = () => {
  const [count, onIncrement, onDecrement, onReset] = ArgumentFunction(10)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default FunCustomThree
