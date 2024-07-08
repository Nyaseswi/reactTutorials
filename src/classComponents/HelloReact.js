import React from 'react'

class HelloReact extends React.Component {
    constructor() {
        super();
        this.state = {
            // text: 'Hello React'
            text: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                <input type='text' onChange={e => this.setState({ text: e.target.value })} />
                <h1>{this.state.text.split('').reverse().join('')}</h1>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

export default HelloReact
