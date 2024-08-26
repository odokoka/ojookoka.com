import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import { useGlitch } from 'react-powerglitch'; // Use the correct export

import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Youtube } from './pages/Youtube';
import { Oboe } from './pages/Oboe';

const Navbar = () => {
  const location = useLocation();
  const glitch = useGlitch();
 

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light navbar-custom">
      <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
        <span ref={glitch.ref}>
          <img 
            src="images/MadeByOjo-Logo-Transaprent.png" 
            alt="OJOOKOKA.COM"
            style={{ width: '100px', height: 'auto' }}
            />
        </span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/aboutme' ? 'active' : ''}`} 
              to="/aboutme"
            >
              ABOUT ME
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/youtube' ? 'active' : ''}`} 
              to="/youtube"
            >
              YOUTUBE
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/oboe' ? 'active' : ''}`} 
              to="/oboe"
            >
              OBOE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar component with useLocation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/oboe" element={<Oboe />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
