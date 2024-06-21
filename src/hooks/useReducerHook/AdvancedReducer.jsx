import React, { useEffect, useReducer } from 'react'

const reducer = (state,action) =>{
    return state
}

const initialState = {
    userData: [],
    isLoading: false,
    isError:{
        status: false,
        msg:''
    }
}

const AdvancedReducerPartOne = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchData = async (fetchDataUrl) =>{
    const response =  await  fetch(fetchDataUrl)
    const data = await response.json()
    // console.log(data)
    dispatch({
        type:'UPDATE_USERS_DATA',
        payload:data
    })
    }
   useEffect( () => {
    fetchData('https://jsonplaceholder.typicode.com/users')
   }, []);
   
  return (
    <div>
      <h1>User Information</h1>
    </div>
  )
}

export default AdvancedReducerPartOne
