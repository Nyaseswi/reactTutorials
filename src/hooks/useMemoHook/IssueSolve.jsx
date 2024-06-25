import React, { useMemo, useState } from 'react'

const IssueSolve = () => {
   const [number, setNumber] = useState(0);
   const [theme, setTheme] = useState(false);
   const doubleNumber = useMemo(() =>{
    return doubleFunction(number);
   },[number]);
   const themeChange = {
    background: theme? 'red' : 'white',
    color: theme? 'blue' : 'black'
   }
  return (
    <div>
      <input type='number' name='number' id='number' value={number} 
      onChange={(e) => Number(setNumber(e.target.value))} />
      <hr/>
      <button onClick={(e) => setTheme(!theme) }>Change Theme</button>
      <h1 style={themeChange}>The number is : {doubleNumber}</h1>
    </div>
  )
}

const doubleFunction = (number) =>{
    for (let index = 0; index < 100000; index++) {
        // applicaton becomes slow performance is reducer 
        // to solve this issue use useMemo hook 
        console.log('for loop running')
        
    }
    return number *  2 
}

export default IssueSolve
