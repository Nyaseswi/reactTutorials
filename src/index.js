import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginComponent from './components/LoginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <NotificationsFunctional initialText={'You have few notifications'} /> */}
        <LoginComponent />
    </React.StrictMode>

)