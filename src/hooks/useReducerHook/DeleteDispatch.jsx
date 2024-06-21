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

const DeleteDispatch = () => {
   const [state, dispatch] =  useReducer(reducer, intialState);
   const deleteHandler = (id) =>{
    // console.log(id)
    dispatch({
        type:'DELETE_PERSON',
        payload:id
    })
   }
  return (
    <div>
      <h1>Fliter Delete with Dispatch </h1>
      {
        state.data.map((eachData) => {
            const {id, name, username, email} = eachData
            return(
                <section key={id}>
                    <h5>{name}</h5>
                    <h5>{username}</h5>
                    <h5>{email}</h5>
                    <button onClick={() => deleteHandler(id)}>Delete</button>
                </section>
            )
        })
      }
    </div>
  )
}

export default DeleteDispatch
