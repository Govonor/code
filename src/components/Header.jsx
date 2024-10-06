import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Modal, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './styles/Header.css';

const Header = ({ isDark = false, user, notificationsCount, cartCount }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleUserMenuToggle = () => setShowUserMenu(!showUserMenu);

  const handleLogout = async () => {
    setLoadingLogout(true);
    // Simulate a logout API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoadingLogout(false);
    setShowLogoutModal(false);
    // Add actual logout logic here
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && event.target.closest('#user-dropdown') === null) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

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
          <Nav.Link as={Link} to="/profile" className="profile-icon">
            {user?.avatar ? (
              <img src={user.avatar} alt="User Avatar" className="user-avatar" />
            ) : (
              <FontAwesomeIcon icon={faUser} size="lg" />
            )}
          </Nav.Link>

          {user ? (
            <NavDropdown
              title={<FontAwesomeIcon icon={faUserCircle} size="lg" />}
              id="user-dropdown"
              show={showUserMenu}
              onClick={handleUserMenuToggle}
              aria-haspopup="true"
              aria-expanded={showUserMenu}
              className="user-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout" onClick={() => setShowLogoutModal(true)}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
          )}

          <Dropdown />
          <Nav.Link as={Link} to="/notifications" className="notifications-icon">
            <FontAwesomeIcon icon={faBell} size="lg" />
            {notificationsCount > 0 && (
              <span className="notifications-badge">{notificationsCount}</span>
            )}
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout} disabled={loadingLogout}>
            {loadingLogout ? <Spinner animation="border" size="sm" /> : 'Logout'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

Header.propTypes = {
  isDark: PropTypes.bool,
  user: PropTypes.object,
  notificationsCount: PropTypes.number,
  cartCount: PropTypes.number.isRequired,
};

export default Header;
