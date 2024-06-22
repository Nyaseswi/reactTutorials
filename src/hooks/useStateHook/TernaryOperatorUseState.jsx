import React,{useState} from 'react'

const TernaryOperatorUseState = () => {
    const [showData, setShowData] = useState(false);
    const showContent = () =>{
        setShowData(true)
    }
  return (
    <div>
        <button onClick={showContent}>{showData ? 'hide' : 'Show'}</button>
            {
                showData ? (
                     <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, dicta debitis tempore maiores cumque at mollitia vitae ratione saepe. 
                        </div>
                         ) : (
                            <h3>Data is hidden </h3>
                         )
                        }
                        </div>)}

export default TernaryOperatorUseState
