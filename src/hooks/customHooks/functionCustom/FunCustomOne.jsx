import React, { useState } from 'react';
import OwnFunHook from './OwnFunHook';

const FunCustomOne = () => {
const [count, onIncrement, onDecrement, onReset] =  OwnFunHook();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default FunCustomOne
