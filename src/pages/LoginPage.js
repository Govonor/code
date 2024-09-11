import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for API calls
import './LoginPage.css'; // Import component-specific CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to handle login errors
  const [loading, setLoading] = useState(false); // State to handle loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error on new submission
    setLoading(true); // Show loading state

    // Basic client-side validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      // API endpoint for login
      const response = await axios.post('https://your-api-url.com/login', {
        email,
        password,
      });

      // Assuming response contains user role and other details
      const userRole = response.data.role;

      // Redirect based on user role
      if (userRole === 'consumer') {
        navigate('/consumer-dashboard');
      } else if (userRole === 'farmer') {
        navigate('/farmer-dashboard');
      } else {
        navigate('/profile'); // Default redirect if no specific role
      }
    } catch (err) {
      setError('Login failed. Please try again.'); // Handle login errors
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <Container className="login-container">
      <h1>Login</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading} // Disable input during loading
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading} // Disable input during loading
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
