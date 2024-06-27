import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavLinks from './LinksInRRD/NavLinks';
import Home from './RRDcomponents/Home';
import About from './RRDcomponents/About';
import Courses from './RRDcomponents/Courses'
const App = () => {
  return (
    <div>
      <NavLinks />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
      </Routes>

    </div>
  );
};

export default App;
