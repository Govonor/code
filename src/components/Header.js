import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';

const Header = ({ isDark = false }) => {
  return (
    <Navbar className={`header-navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`} expand="lg" variant={isDark ? 'dark' : 'light'}>
      <Navbar.Brand as={Link} to="/">
        <img
          src={isDark ? '/images/logo-white.png' : '/images/logo.png'}
          alt="Ask Mkulima"
          width="100"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isDark && (
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/farmer-dashboard">
                Farmer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/consumer-dashboard">
                Consumer
              </NavDropdown.Item>
            </NavDropdown>
          )}
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          {/* Add Dropdown component here */}
          <Dropdown />
          {/* Cart Icon */}
          <Nav.Link as={Link} to="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;
