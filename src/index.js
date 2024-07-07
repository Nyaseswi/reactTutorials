import React from 'react';
import ReactDOM from 'react-dom/client';
import NotificationsFunctional from './components/NotificationsFunctional';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NotificationsFunctional initialText={'You have few notifications'} />
    </React.StrictMode>

)