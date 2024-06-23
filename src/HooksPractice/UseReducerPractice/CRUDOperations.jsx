import React, {  useReducer, useState } from 'react'

const intialState = []

const reducer = (state, action) =>{
    switch (action.type){
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map(eachState => 
                eachState.id === action.payload.id ? action.payload : eachState
              );
        case 'DELETE':
            return state.filter(eachState => eachState.id !== action.payload);
        default:
            return state;
    }

}

const CRUDOperations = () => {
   
   const [inputValue, setInputValue] = useState('');
   const [state, dispatch] = useReducer(reducer,intialState);
   const [updateID, setUpdateId] = useState(null);

//create
const handleCreate = () =>{
    dispatch({
        type:'CREATE',
        payload:{
            id:Date.now(), text: inputValue
        }
    })
    setInputValue('')
} 
// update
const handleUpdate = () =>{
    dispatch({
        type:'UPDATE',
        payload:{id: updateID, text: inputValue}
    })
    setInputValue('')
    setUpdateId(null)
}

// delete 

const handleDelete = (id) =>{
    dispatch({
        type:'DELETE',
        payload: id
    })
}
//  edit 
const handleEdit = (id,text) =>{
    setInputValue(text);
    setUpdateId(id);
}


 
  return (
    <div>
      <h1>CRUD Operations</h1>
      <input type='text' name='inputValue' id='inputValue' value={inputValue} onChange={(e) =>{
        setInputValue(e.target.value)
      }}/>
      {
        updateID ? (<button onClick={handleUpdate}> UPDATE </button> ) : (<button onClick={handleCreate}> CREATE </button>)
      }
      <ul>
        {
            state.map((eachState) =>{
                const {text,id} = eachState
                return(
                    <section key={id}>
                        <li>{text}</li>
                        <button onClick={() => handleEdit(id,text)} >Edit</button>
                        <button onClick={() => handleDelete(id)} >Delete</button>
                    </section>
                )
            })
        }
      </ul>
    </div>
  )
}

export default CRUDOperations
