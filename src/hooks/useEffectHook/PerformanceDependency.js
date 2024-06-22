import React, { useEffect, useState } from 'react'

const PerformanceDependency = () => {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => {
            setPageWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }

    });
    return (
        <div>PerformanceDependency
            <h1>{pageWidth}</h1>
        </div>

    )
}

export default PerformanceDependency