import React, { useRef, useState } from 'react'

const AccessDOM = () => {
   const [inputValue, setInputValue] = useState('');
   const inputDom = useRef('');
   const focus = () =>{
    inputDom.current.focus();
    inputDom.current.value = 'some data'
   }
  return (
    <div>
     <h1>Accessing DOM elements using Use ref hook</h1> 
     <input name='inputValue' id='inputValue' type='text' onChange={(e) => setInputValue(e.target.value)} ref={inputDom} />
     <h5>Texting: {inputValue}</h5>
     <button onClick={focus}>Focus</button>
    </div>
  )
}
export default AccessDOM
