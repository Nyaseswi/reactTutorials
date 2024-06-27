import React from 'react';
import {useNavigate} from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Successfully Submitted</h1>
      <button onClick={() => navigate('/')}>Back To Home Page</button>
    </div>
  )
}

export default Success
