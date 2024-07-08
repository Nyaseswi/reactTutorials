import React from 'react';
import ReactDOM from 'react-dom/client';
import AddItem from './classComponents/AddItem';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <NotificationsFunctional initialText={'You have few notifications'} /> */}
        <AddItem />
    </React.StrictMode>

)