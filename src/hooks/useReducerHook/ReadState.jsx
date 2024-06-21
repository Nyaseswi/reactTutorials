import React, { useReducer } from 'react'

const reducer = () => {}

const intialState = {
    data:[
        {
            id:'as78hkh',
            name:'Leanne Graham',
            username:'Bret',
            email:'Sincere@april.biz'
        },
        {
            id:'as79hkh',
            name:'Romaguera-Crona',
            username:'Antonette',
            email:'Shanna@melissa.tv'
        }
    ]
}

const ReadState = () => {
 const [state] = useReducer(reducer, intialState);  
  return (
    <div>
      <h1>Using Use Reducer hook we understood how to read data, how to access state </h1>
      {
        state.data.map((eachData) => {
            const {id, name, username, email} = eachData
            return(
                <section key={id}>
                    <h4>{name}</h4>
                    <h4>{username}</h4>
                    <h4>{email}</h4>
                    <button>Delete</button>
                </section>
            )
        })
      }
    </div>
  )
}

export default ReadState
