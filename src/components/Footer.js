import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // Import the X icon from Simple Icons
import './styles/Footer.css';

const Footer = () => (
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
          Contact us: <a href="mailto:info@askmkulima.com">info@askmkulimakenya.com</a>
        </p>
        <div className="social-media">
          <a href="https://facebook.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="https://x.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="X">
            <SiX size={24} />
          </a>
          <a href="https://instagram.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
          <a href="https://tiktok.com/@askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
