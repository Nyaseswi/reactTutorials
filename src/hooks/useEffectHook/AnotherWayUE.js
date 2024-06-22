import React, { useEffect, useState } from 'react'

const Anotherway = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Hi useEffect part 1...')
    });
    return (
        <div>
            <h1>Learning Use Effect Hook</h1>
            <h2>Example of useState is below, count default value is set 0 in use state</h2>
            <h3> Count: {count}</h3>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1)
            }} > - </button>
        </div>
    )
}

export default Anotherway
