import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloReact from './components/HelloReact';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelloReact />
    </React.StrictMode>

)