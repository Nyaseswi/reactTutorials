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

const ErrorHandlingPartTwo = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchData = async (fetchDataUrl) =>{
    try{
        const response =  await  fetch(fetchDataUrl)
    const data = await response.json()
    // console.log(data)
    dispatch({
        type:'UPDATE_USERS_DATA',
        payload:data
    })
    } catch(error){
        console.log(error)
        dispatch({type:'ERROR', payload:error})
    }
    }
   useEffect( () => {
    fetchData('https://jsonplaceholder.typicode.com/users')
   }, []);
   
  return (
    <div>
      <h1>User Information .......</h1>
    </div>
  )
}

export default ErrorHandlingPartTwo
