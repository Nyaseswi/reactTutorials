import React from 'react';
import Data from './UserData';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      {
        Data.map((eachData) => {
          const {id,name} = eachData
          return(
            <Link to={`/users/${id}`} key={id}>
            <article>
              <h3>Name: {name}</h3>
            </article>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Users
