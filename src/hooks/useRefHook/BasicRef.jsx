import React, { useEffect, useRef, useState } from 'react'

const BasicRef = () => {
   const [inputValue, setInputValue] = useState('');
   const count = useRef(1);
   useEffect(() =>{
    // console.log(count)
    count.current = count.current + 1
   })
  return (
    <div>
      <input name='inputValue' id='inputValue' type='text' onChange={(e) =>{
        setInputValue(e.target.value)
      }}/>
      <h5>Typing: {inputValue}</h5>
      <h5>{count.current} times refreshed</h5>
    </div>
  )
}

export default BasicRef
