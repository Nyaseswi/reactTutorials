import React from 'react'

const App = () => {
    const clickHandler = (e, firstName) => {
        console.log('Passing parameters in click Handler', e, firstName)
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
            <button style={styles.buttonStyles} onClick={function (e) {
                return clickHandler(e, 'Yaseswi')
            }}>Submit </button>
        </div>
    )
}

export default App
