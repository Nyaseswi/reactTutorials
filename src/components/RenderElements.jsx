import React, { useEffect, useState } from 'react'

const RenderElements = () => {
 const [currentTime, setCurrentTime] =   useState(new Date().toLocaleTimeString());
 useEffect(() =>{
   const intervalid=  setInterval(() =>{
        setCurrentTime(new Date().toLocaleTimeString())
    },1000);
    return() => clearInterval(intervalid)
 }, []);
  return (
    <div>
      <h3>
      Time is {currentTime}
      </h3>
    </div>
  )
}

export default RenderElements
