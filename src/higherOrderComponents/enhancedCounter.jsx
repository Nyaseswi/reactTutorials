import React from 'react';
import HOCResolve from './HOCResolve';

const HoverCounter = (props) => {
  return (
    <>
      <button onMouseEnter={props.mounseEnter}>Count: {props.count}</button>
      <button onClick={props.clickHandler}>Onclick Count:{props.clickCount}</button>
    </>
  )
}

export default HOCResolve(HoverCounter);
