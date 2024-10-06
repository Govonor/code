import React from 'react';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Dropdown.css';

const Dropdown = () => {
  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle id="dropdown-basic">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item as={Link} to="/">Home</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/contact">Contact Us</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/about">About Us</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/market">Market</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/purchase">Purchase</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

export default Dropdown;
