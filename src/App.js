import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Youtube } from './pages/Youtube';
import { GraphicDesign } from './pages/GraphicDesign';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Navbar /> {/* Navbar component with useLocation */}
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer /> {/* Footer component with copyright and icons */}
      </div>
    </Router> 
  );
};

export default App;
