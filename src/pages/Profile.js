import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Image, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/Profile.css'; // Ensure this file exists for styling

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: ''
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Mock function to simulate fetching user data
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const response = await fetch('/api/user');
        const fetchedUser = await response.json();
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({
        ...user,
        profilePicture: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!user.name) newErrors.name = 'Name is required';
    if (!user.email) newErrors.email = 'Email is required';
    if (user.password && user.password !== user.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Replace with actual API call
        await fetch('/api/user/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        });
        setSuccessMessage('Profile updated successfully!');
        navigate('/profile-summary'); // Replace with your desired route
      } catch (error) {
        console.error('Error updating profile:', error);
        setSuccessMessage('Failed to update profile.');
      }
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="profile-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Profile</h2>
          {successMessage && <div className={`alert ${successMessage.includes('success') ? 'alert-success' : 'alert-danger'}`}>{successMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <div className="profile-picture-upload">
                {user.profilePicture && <Image src={user.profilePicture} roundedCircle width="100" />}
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-2"
                />
              </div>
            </Form.Group>
            
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
              <InputGroup>
                <FormControl
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter a new password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={handlePasswordToggle} style={{ cursor: 'pointer' }}>
                  {showPassword ? 'Hide' : 'Show'}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <FormControl
                type={showPassword ? 'text' : 'password'}
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
            
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Update Profile'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
