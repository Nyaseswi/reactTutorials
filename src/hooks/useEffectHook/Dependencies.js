import React, { useEffect, useState } from 'react'

const Dependencies = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Hi added dependecy so one time executes')
    }, []);
    return (
        <div>
            <h1>Added dependecy for Use Effect Hook</h1>
            <p>use state change chesina prathi sari console avadhu </p>
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

export default Dependencies