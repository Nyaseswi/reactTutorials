import React, { useState } from 'react';

const Title = () =>{
    console.log('title component')
return(
    <div>
        <h3>Use Call Back & React Memo</h3>
    </div>
)
}

const Button = ({children, clickHandler}) =>{
    console.log(`${children} rendered`)
    return(
        <div>
            <button onClick={clickHandler}>{children}</button>
        </div>
    )
}

const Count = ({text, number}) =>{
    console.log(`${text} rendered`)
    return(
        <h3>{text}: {number}</h3>
    )
}

const ParentComponent = () => {
   const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () =>{
    setAge(age + 1)
  }

  const incrementSalary = () =>{
    setSalary(salary + 1000)
  }

  return (
    <div>
      <Title/>
      <Count text={'age'} number={age }/>
      <Button clickHandler={incrementAge}>incrementAge</Button>
      <Count text={'salary'} number={salary }/>
      <Button clickHandler={incrementSalary}> incrementSalary </Button>

    </div>
  )
}

export default ParentComponent
