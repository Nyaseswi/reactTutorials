import React, { useEffect, useState } from 'react'
import UseTitleHook from '../UseTitleHook';

const PartOneCH = () => {
   const [count, setCount] = useState(0);
   UseTitleHook(count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )
}

export default PartOneCH
