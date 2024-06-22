import React, { useState } from 'react'

const MuntipleStatesUS = () => {

    const [name, setName ] = useState('Yaseswi');
    const [job, setJob ] = useState('Scribing');
    const [city, setCity ] = useState('UK');

    const changeName = () =>{
        setName('Yaseswi Namala')
    }
    const changeJob = () =>{
        setJob('Software')
    }
    const changeCity = () =>{
        setCity('USA')
    }
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={changeName}>Click to view</button>
      <h4>{job}</h4>
      <button onClick={changeJob}>Click to view</button>
      <h4>{city}</h4>
      <button onClick={changeCity}>Click to view</button>
    </div>
  )
}

export default MuntipleStatesUS
