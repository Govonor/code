import React from 'react';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Dropdown.css';

const Dropdown = () => {
  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle id="dropdown-basic">
        <img src="/images/menu-icon.png" alt="Menu" width="24" height="24" />
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item as={Link} to="/">Home</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/contact-us">Contact Us</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/about-us">About Us</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/market">Market</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as={Link} to="/purchase">Purchase</BootstrapDropdown.Item>
        {/* Add more links as needed */}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

export default Dropdown;
