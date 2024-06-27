import React from 'react'
import {useNavigate} from 'react-router-dom';
const NotFound = () => {
   const navigate = useNavigate();
  return (
    <div>
         <button onClick={() => navigate('/')}>Go To Back</button>
      <img src='https://shorturl.at/yjFAw' alt='notFound' />
     
    </div>
  )
}

export default NotFound
