import React from 'react'
import {Link} from 'react-router-dom';
export default function Links() {
  return (
    <div>
      <Link to= '/'>Home</Link> || 
      <Link to='/about'>About</Link> ||
      <Link to='/courses'>Courses</Link>
    </div>
  )
}
