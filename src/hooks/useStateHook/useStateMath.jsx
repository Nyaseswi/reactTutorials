import React , {useState} from 'react'
const UseStateMath = () => {
   const [count, setCount] =  useState(0);
   const increment = () =>{
    setCount((previousCount) =>{
       return previousCount + 1
    })
    setCount((previousCount) =>{
        return previousCount + 1
     })
   }

   const decrement = () =>{
    setCount((previousCount) => previousCount -1)
    setCount((previousCount) => previousCount -1)
   }
  
  return (
    <div>
      <button onClick={decrement} >-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default UseStateMath
