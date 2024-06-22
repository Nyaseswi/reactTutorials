import React, { useState } from 'react'

const FormHandleUS = () => {
    const [name, setName] = useState('');
    const changeName = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
        // setName('Yaseswi')
    }

    const submitHandler = (e) =>{
        e.preventDefault();
    }
   
  return (
    <div>
      <form action="/" onSubmit={submitHandler}>
      <input type='name' id='name' name='name' value={name} placeholder='enter your name' onChange={changeName}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default FormHandleUS
