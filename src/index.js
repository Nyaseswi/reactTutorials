import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloReactPractice from './practice/HelloReactPractice';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelloReactPractice />
    </React.StrictMode>

)