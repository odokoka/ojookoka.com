import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useGlitch } from 'react-powerglitch'; // Use the correct export

const Footer = () => {
  const glitch = useGlitch({ playMode: 'hover' });

  return (
    <footer className="footer">
      <div className="icons">
        <a href="https://www.linkedin.com/in/ojookoka/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/ojookoka/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
        </a>
        <a href="https://github.com/odokoka" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
        <a href="https://www.youtube.com/@ojookoka" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
        </a>
      </div>
      <div className="copyright">
        <span ref={glitch.ref}>
          &copy; 2024 OJO OKOKA 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
