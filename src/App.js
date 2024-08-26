import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Youtube } from './pages/Youtube';
import { Oboe } from './pages/Oboe';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light navbar-custom">
      <Link className="navbar-brand" to="/">MyApp</Link>
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
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/aboutme' ? 'active' : ''}`} 
              to="/aboutme"
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/youtube' ? 'active' : ''}`} 
              to="/youtube"
            >
              Youtube
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${location.pathname === '/oboe' ? 'active' : ''}`} 
              to="/oboe"
            >
              Oboe
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
