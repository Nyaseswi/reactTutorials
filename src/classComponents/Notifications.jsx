import React, { Component } from 'react'

class Notifications extends Component{
    state = {
        text:true
    }
    displayNotification = () =>
        this.setState({
            text: !this.state.text
        })
    render(){
        return(
            <React.Fragment>
                <button 
                onClick={this.displayNotification}
                style={{
                    textAlign:'center',
                    padding:'50px',
                    margin:'50px',
                    background:'orange',
                    fontSize:'20px'
                }}>
                    {
                        this.state.text ? 'N' : 'No notifications'
                    }</button>
                
            </React.Fragment>
        )
    }
}

export default Notifications