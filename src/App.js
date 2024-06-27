import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavLinks from './LinksInRRD/NavLinks';
import Home from './RRDcomponents/Home';
import About from './RRDcomponents/About';
import Courses from './RRDcomponents/Courses';
import Success from './HooksInReactRouterDom/Success';
import NotFound from './404DataNotFound/NotFound'

const App = () => {
  return (
    <div>
      <NavLinks />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
};

export default App;
