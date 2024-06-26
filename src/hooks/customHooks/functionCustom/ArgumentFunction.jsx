import {useState} from 'react'

function ArgumentFunction(intialState = 5){
    const [count, setCount] = useState(intialState);
    const onIncrement = () =>{
     setCount(count + 1)
    }
    const onDecrement = () =>{
     setCount(count - 1 )
    }
    const onReset = () =>{
     setCount(intialState)
    }

    return [count, onIncrement, onDecrement, onReset]
}

export default ArgumentFunction
