import React from 'react'

class HelloReactPractice extends React.Component{
    constructor(){
        super();
        this.state = {
            text:'Hello React From Prism',
            emptyText: ''
        }
    }
    render(){
        return(
            <React.Fragment>
                <input type='text' placeholder='Enter text here...' onChange={e => this.setState({emptyText: e.target.value})} />
                <h1>{this.state.text}</h1>
                <h2>{this.state.emptyText}</h2>
                <h2>{this.state.emptyText.split('').reverse().join('')}</h2>
            </React.Fragment>
        )
    }
}

export default HelloReactPractice
