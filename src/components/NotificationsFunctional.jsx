import React, { useState } from 'react';

const NotificationText = ({ initialText }) => {
    const [text, setText] = useState(initialText  || 'Intialise' );

    const noNotifications = () => {
        setText('No Notifications');
    }

    return (
        <button
            onClick={noNotifications}
            style={{
                textAlign: 'center',
                padding: '50px',
                margin: '50px',
                background: 'orange',
                fontSize: '20px'
            }}>
            {text}
        </button>
    );
}

const NotificationsFunctional = (props) => {
    return (
        <NotificationText initialText={props.initialText} />
    );
}

export default NotificationsFunctional;
