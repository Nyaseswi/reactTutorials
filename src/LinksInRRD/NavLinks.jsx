import React from 'react';
import {NavLink} from 'react-router-dom';
export default function NavLinks() {
    const navLinkStyles = ({isActive}) =>{
        return{
            textDecoration: isActive ? 'underline' : 'none',
            background: isActive ? 'red' : 'none',
            color: isActive ? 'blue' : 'none',
            fontSize: isActive ? '50px' : '100px',
        }
    }
  return (
    <div>
      <NavLink to='/' style={navLinkStyles}>Home</NavLink>
      <NavLink to='/about' style={navLinkStyles}>About</NavLink>
      <NavLink to='/courses' style={navLinkStyles}>Courses</NavLink>
    </div>
  )
}
