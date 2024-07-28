import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Header.css'; // Import component-specific CSS

const Header = ({ isDark = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

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
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
            <Dropdown.Item as={Link} to="/about-us">About Us</Dropdown.Item>
            <Dropdown.Item as={Link} to="/market">Market</Dropdown.Item>
            <Dropdown.Item as={Link} to="/purchase">Purchase</Dropdown.Item>
            <Dropdown.Item as={Link} to="/contact-us">Contact Us</Dropdown.Item>
          </DropdownButton>

          {/* Conditional dropdown for user roles */}
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

          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav>

        <Form inline onSubmit={handleSearchSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
