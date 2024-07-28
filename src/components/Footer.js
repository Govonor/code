import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Ask Mkulima. All rights reserved.</p>
          <p>
            Contact us: <a href="mailto:info@askmkulima.com">info@askmkulima.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
