import React, { useState } from 'react'

const HOCResolve = (enhancedCounter) => {
    const NewComponent = () =>{
        const [count, setCount] =  useState(0);
        const [clickCount, setClickCount] =  useState(0);

        const clickHandler = () =>{
            setClickCount(clickCount + 1)
        }

        const mounseEnter = () =>{
            setCount(count + 1)
        }
        return (
            <enhancedCounter count={count} clickCount={clickCount} clickHandler={clickHandler} mounseEnter={mounseEnter}/>
          )
    }
    return NewComponent
  
}

export default HOCResolve
