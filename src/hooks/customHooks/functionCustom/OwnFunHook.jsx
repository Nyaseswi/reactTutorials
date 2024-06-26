import {useState} from 'react'

function OwnFunHook(){
    const [count, setCount] = useState(0);
    const onIncrement = () =>{
     setCount(count + 1)
    }
    const onDecrement = () =>{
     setCount(count - 1 )
    }
    const onReset = () =>{
     setCount(0)
    }

    return [count, onIncrement, onDecrement, onReset]
}

export default OwnFunHook
