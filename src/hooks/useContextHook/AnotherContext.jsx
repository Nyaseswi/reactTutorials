import React, { useContext } from 'react';
import { UsersDataContext } from '../../context/Users';
import {UserContext} from '../../context/UserContext';

const AnotherContext = () => {
   const data = useContext(UsersDataContext);
   const userContextData = useContext(UserContext);
   const {firstName, lastName} = userContextData;
   
   return (
     <div>
       {data.map((user, index) => (
         <div key={index}>
           <h3>{user.name}</h3>
           <h3>{user.phone}</h3>
           <h3>{user.website}</h3>
         </div>
       ))}
       <h1>My name is {firstName} {lastName} </h1>
     </div>
   );
}

export default AnotherContext;
