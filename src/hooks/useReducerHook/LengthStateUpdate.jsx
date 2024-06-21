import React, {  useReducer } from 'react'

const reducer = (state, action) =>{
    if(action.type === 'DELETE_PERSON'){
    const DeletedPersons =    state.data.filter((eachPerson) =>{
            return eachPerson.id !== action.payload
        });
        return{
            data: DeletedPersons 
        }
        
    }
    return state
    // throw new Error('edit action not defined in reducer ')
}

const intialState = {
    data:[{
        id:'as78hkh',
            name:'Leanne Graham',
            username:'Bret',
            email:'Sincere@april.biz'
    },{
        id:'as79hkh',
            name:'Romaguera-Crona',
            username:'Antonette',
            email:'Shanna@melissa.tv'
    }]
}

const LengthStateUpdate = () => {
   const [state, dispatch] =  useReducer(reducer, intialState);
   const deleteHandler = (id) =>{
    // console.log(id)
    dispatch({
        type:'DELETE_PERSON',
        payload:id
    })
   }
   const editHandler = (id) =>{
    dispatch({
        type:'EDIT_PERSON',
        payload:id
    })
   }
  return (
    <div>
      <h1>Printing length in state after deleting </h1>
      <h3>Length: {state.data.length}</h3>
      {
        state.data.map((eachData) => {
            const {id, name, username, email} = eachData
            return(
                <section key={id}>
                    <h5>{name}</h5>
                    <h5>{username}</h5>
                    <h5>{email}</h5>
                    <button onClick={() => deleteHandler(id)}>Delete</button>
                    <button onClick={ () => editHandler(id)}>Edit</button>
                </section>
            )
        })
      }
    </div>
  )
}

export default LengthStateUpdate
