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
      // Replace with actual API call
      const fetchedUser = {
        name: '',
        email: '',
        profilePicture: ''
      };
      setUser(fetchedUser);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!user.name) newErrors.name = 'Name is required';
    if (!user.email) newErrors.email = 'Email is required';
    if (user.password && user.password !== user.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('User updated:', user);
      setSuccessMessage('Profile updated successfully!');
      
      // Navigate to the next page, e.g., a dashboard or profile summary page
      navigate('/profile-summary'); // Replace with your desired route
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
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <div className="profile-picture-upload">
                <Image src={user.profilePicture} roundedCircle width="100" />
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
