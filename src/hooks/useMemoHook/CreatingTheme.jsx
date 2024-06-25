import React, { useState } from 'react'

const CreatingTheme = () => {
   const [number, setNumber] = useState(0);
   const [theme, setTheme] = useState(false);
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
      <h1 style={themeChange}>The number is : {number}</h1>
    </div>
  )
}

export default CreatingTheme
