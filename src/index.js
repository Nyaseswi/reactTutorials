import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import UserDetails from './components/UserDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
      <App />
    </BrowserRouter>
  </Provider>
);
