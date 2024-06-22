import React, { useState } from 'react'

const TenInputFields = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    // const setNameChange = (e) => {
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }
    // const setAgeChange = (e) => {
    //     console.log(e.target.value)
    //     setAge(e.target.value)
    // }
    // const setEmailChange = (e) => {
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    const submitHandler = (e) =>{
        e.preventDefault();
    }
  return (
    <div style={{
        display:'grid',
        justifyContent:'center',
        padding:'10px',
        margin:'2rem'
    }}>
      <form action="/" onSubmit={submitHandler}>
      <input type='name' name='name' id='name' placeholder='Enter Your Name..' value={name} onChange={(e) => setName(e.target.value)} />
      <br/>
      <input type='number' name='age' id='age' placeholder='Enter Your Age..' value={age} onChange={(e) => setAge(e.target.value)} />
      <br/>
      <input type='email' name='email' id='email' placeholder='Enter Your email..' value={email} onChange={(e) => setEmail(e.target.value)}  />
      <br/>
      <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default TenInputFields
