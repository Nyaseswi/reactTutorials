import React, { useEffect, useState } from 'react'

const SingleDependency = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('count dependency ichav kabatti, state count marina prathi sari vastha', count)
        // empty dependency ichavy kabati
    }, [count]);
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
        </div>
    )
}

export default SingleDependency