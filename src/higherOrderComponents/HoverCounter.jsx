import React, { useState } from 'react'

const HoverCounter = () => {
 const [count, setCount] =   useState(0);
const [clickCount, setClickCount]= useState(0);
 const mounseEnter = () =>{
    setCount(count + 1)
 }
 const clickHandler = () =>{
    setClickCount(clickCount + 1)
 }
  return (
    <>
      <button onMouseEnter={mounseEnter}>Count: {count}</button>
      <button onClick={clickHandler}>Onclick Count:{clickCount}</button>
    </>
  )
}

export default HoverCounter
