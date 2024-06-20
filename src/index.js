import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { UsersDataProvider } from './context/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersDataProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </UsersDataProvider>
);
