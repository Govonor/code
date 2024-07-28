import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Header.css'; // Import component-specific CSS

const Header = ({ isDark = false }) => {
  return (
    <Navbar className="header-navbar" expand="lg" variant={isDark ? 'dark' : 'light'}>
      <Navbar.Brand as={Link} to="/">
        {isDark ? (
          <img src="/images/logo-white.png" alt="Ask Mkulima (dark)" width="100" />
        ) : (
          <img src="/images/logo.png" alt="Ask Mkulima" width="100" />
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

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

          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/orders">
            Orders
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
