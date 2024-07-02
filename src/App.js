import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavLinks from './LinksInRRD/NavLinks';
import Home from './RRDcomponents/Home';
import About from './RRDcomponents/About';
import Courses from './RRDcomponents/Courses';
import Success from './HooksInReactRouterDom/Success';
import NotFound from './404DataNotFound/NotFound';
import Projects from './RRDcomponents/Projects';
import FeaturedProjects from './RRDcomponents/FeaturedProjects';
import NewProjects from './RRDcomponents/NewProjects';
import Users from './RRDcomponents/Users';
import UserDetails from './RRDcomponents/UserDetails'
import HoverCounter from './higherOrderComponents/HoverCounter'

// dynamic routing 

const LazyAbout = React.lazy(() => import('./RRDcomponents/About'));

const App = () => {
  return (
    <div>
      <NavLinks />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hovercounter' element={<HoverCounter />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/about' element={<React.Suspense fallback='Loading Wait'> <LazyAbout /> </React.Suspense>} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/projects' element={<Projects />}>
          <Route path='featured' element={<FeaturedProjects />} />
          <Route path='new' element={<NewProjects />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />} />
      </Routes>

    </div>
  );
};

export default App;
