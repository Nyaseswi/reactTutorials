import React from 'react';

const FormInput = ({type, placeholder}) =>{
    return(
        <input type={type} placeholder={placeholder}  />
    )
    
}

const FormButton = ({clicked}) =>{
    return(
        <button onClick={clicked}>Login</button>
    )
    
}

const LoginComponent = () => {
  return (
    <div>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <FormInput type='text' placeholder='E-mail' />
      <FormInput type='password' placeholder='Password' />
      <FormButton clicked={() => alert('Login now')} />
    </div>
  )
}

export default LoginComponent
