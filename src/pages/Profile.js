import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './styles/Profile.css'; // Ensure this file exists for styling

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Mock function to simulate fetching user data
  useEffect(() => {
    // Fetch user data from API or local storage
    const fetchUserData = async () => {
      // Replace with actual API call
      const fetchedUser = {
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
      setUser(fetchedUser);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!user.name) newErrors.name = 'Name is required';
    if (!user.email) newErrors.email = 'Email is required';
    if (user.password && user.password !== user.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('User updated:', user);
      // Replace this with an actual API call
      setSuccessMessage('Profile updated successfully!');
    }
  };

  return (
    <Container className="profile-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Profile</h2>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="formPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter a new password "
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your new password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
