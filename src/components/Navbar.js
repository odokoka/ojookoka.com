import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Make sure to add your custom styles here

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to control the full-screen menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu on click
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md navbar-light navbar-custom">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
          <img 
            src="/images/MADEBYOJO-LOGO.png" 
            alt="OJOOKOKA.COM"
            style={{ width: '100px', height: 'auto', marginLeft: '15px' }}
          />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button"
          onClick={toggleMenu} // Toggle the full-screen menu when clicked
        >
          <img 
            src="/images/Bars.png" // Jail bar icon (your bars.png image)
            alt="Menu" 
            style={{ width: '30px', height: '30px' }} 
          />
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

        {/* Full-screen overlay menu */}
        {menuOpen && (
          <div className="fullscreen-nav">
            <button className="close-btn" onClick={toggleMenu}>&times;</button>
            <ul className="fullscreen-nav-list">
              <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
              <li><Link to="/aboutme" onClick={toggleMenu}>ABOUT ME</Link></li>
              <li><Link to="/youtube" onClick={toggleMenu}>YOUTUBE</Link></li>
              <li><Link to="/graphicdesign" onClick={toggleMenu}>GRAPHIC DESIGN</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
