import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate= useNavigate();
const submitHandler = () =>{
  navigate('/success')
}
  return (
    <div>
      <h1>Home</h1>
      <button onClick={submitHandler}>SUBMIT</button>
    </div>
  )
}
