import React, { useEffect, useState } from 'react'
import UseTitleHook from '../UseTitleHook';

const PartTwoCH = () => {
   const [count, setCount] = useState(0);
//    useEffect(() =>{
//     document.title = `count:${count}`
//    },[count]);
UseTitleHook(count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )
}

export default PartTwoCH
