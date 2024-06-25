import React, {useState, useCallback} from "react";
import Button from "./ButtonComponent";
import Title from './TitleComponent';
import Count from './CountComponent'




const ParentComponent = () => {
    const [age, setAge] = useState(0);
   const [salary, setSalary] = useState(1000);
 
   const incrementAge = useCallback(() =>{
    setAge(age + 1)
  },[age])
 
   const incrementSalary = useCallback(() =>{
    setSalary(salary + 1000)
  },[salary])
 
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