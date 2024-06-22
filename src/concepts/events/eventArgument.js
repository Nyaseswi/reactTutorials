import React from 'react'

const App = () => {
    const onClickHandler = (e) => {
        console.log(e)
    }
    const styles = {
        buttonStyles: {
            color: 'red',
            width: '20%',
            background: 'white',
            borderRadius: '25px',
            fontFamily: 'monospace',
            padding: '20px',
            margin: '10px',
            fontSize: '20px',
            cursor: 'pointer'
        }
    }
    return (
        <div>
            <button style={styles.buttonStyles} onClick={onClickHandler}>Submit </button>
        </div>
    )
}

export default App
