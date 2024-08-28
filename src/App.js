import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Youtube } from './pages/Youtube';
import { GraphicDesign } from './pages/GraphicDesign';
import Footer from './components/Footer';

const Navbar = () => {
  const location = useLocation();
 
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light navbar-custom">
      <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
        <img 
            
            src="images/MADEBYOJO-LOGO.png" 
            alt="OJOOKOKA.COM"
            style={{width: '100px', height: 'auto', marginLeft: '15px'}}
          />
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
              className={`nav-link ${location.pathname === '/graphicdesign' ? 'active' : ''}`} 
              to="/graphicdesign"
            >
              GRAPHIC DESIGN
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
