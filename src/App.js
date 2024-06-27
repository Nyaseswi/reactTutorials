import React from 'react';
import Home from './RRDcomponents/Home';
import About from './RRDcomponents/About';
import Courses from './RRDcomponents/Courses';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
      </Routes>

    </div>
  );
};

export default App;
