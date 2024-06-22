import React, { useState } from 'react'

const ArrayOfObjMapLoop = () => {
    const intialArrays = [
        {
            name: "Alice",
    age: 30,
    occupation: "Engineer"
        },
        {
            name: "Bob",
    age: 25,
    occupation: "Designer"
        }
    ]
    const [data] = useState(intialArrays);
   
  return (
    <div>
        {
            data.map((eachItem,index) => {
                const {name, age, occupation } = eachItem
                return(
                    <section key={index}>
                        <h1>My name is {name}</h1>
                        <button >Set Name</button>
                        <h2>My age is {age}</h2>
                        <button>Set Age</button>
                        <h3>My occupation is {occupation}</h3>
                        <button>Set occupation </button>

                    </section>
                    
                )
            })
        }
      
    </div>
  )
}

export default ArrayOfObjMapLoop;
