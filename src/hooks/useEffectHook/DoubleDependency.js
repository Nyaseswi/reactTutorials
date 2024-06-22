import React, { useEffect, useState } from 'react'

const DoubleDependency = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        console.log('2 dep executes', count, toggle)
    }, [count, toggle]);
    return (
        <div>
            SingleDependency
            <h3>Count: {count}</h3>
            <button onClick={() => {
                setCount(count + 1)
            }}> + </button>
            <button onClick={() => {
                setCount(count - 1)
            }}> - </button>
            <h1 onClick={() => {
                setToggle(!toggle)
            }}>Double Dependency</h1>
            <h3 >{toggle ? 'show' : 'hide'}</h3>
        </div>
    )
}

export default DoubleDependency