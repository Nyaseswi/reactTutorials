import React, { useState } from 'react'
const HideAndShowTrueFalse = () => {
    const [showData, setShowData] = useState(false);
    const showContent = () =>{
        setShowData(true)
    }
  return (
    <div>
        <button onClick={showContent}>Show</button>
            {
                showData && (
                     <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, dicta debitis tempore maiores cumque at mollitia vitae ratione saepe. 
                        </div> )}
                        </div>)}

export default HideAndShowTrueFalse
