import React, { useState } from 'react'

const ConditionBoolUS = () => {
const [data, setData] =    useState(true);
const [info, setInfo] =useState(true);

  return (
    <div>
      {
        data ? 'Showing' : 'Not showing'
        
      }
      <button onClick={() =>{
    setData(false)
      }}>Hide</button>
      <hr/>
      {
        info && 'See information here '
      }
      <button onClick={() =>{
        setInfo(false)
      }}>Hide info</button>
    </div>
  )
}

export default ConditionBoolUS
