import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { UsersDataProvider } from './context/Users';
import { BrowserRouter } from 'react-router-dom';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersDataProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </UsersDataProvider>
);
