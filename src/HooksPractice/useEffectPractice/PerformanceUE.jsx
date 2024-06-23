import React, { useEffect, useState } from 'react'

const PerformanceUE = () => {
   const [pageWidth, setPageWidth] = useState(window.innerWidth);
   useEffect(() =>{
    const resizeHandler = () =>{
        setPageWidth(window.innerWidth)
    }
    window.addEventListener('resize', resizeHandler)
    return () =>{
        window.removeEventListener('resize', resizeHandler)
    }
   });
  return (
    <div>
        <h1>Page Width: {pageWidth}</h1>
      
    </div>
  )
}

export default PerformanceUE
