import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const navigate = useNavigate();

  // Load Facebook SDK
  useEffect(() => {
    const loadFacebookSDK = () => {
      if (window.FB) return;

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.onload = () => {
        window.FB.init({
          appId: 'YOUR_FACEBOOK_APP_ID', // Replace with your Facebook app ID
          cookie: true,
          xfbml: true,
          version: 'v12.0',
        });
      };
      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);

  // Load Google SDK
  useEffect(() => {
    const loadGoogleSDK = () => {
      if (window.gapi) return;

      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.onload = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
          });
        });
      };
      document.body.appendChild(script);
    };

    loadGoogleSDK();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/ask_mkulima/login', {
        email,
        password,
      });

      const userRole = response.data.role;

      if (userRole === 'consumer') {
        navigate('/consumer-dashboard');
      } else if (userRole === 'farmer') {
        navigate('/farmer-dashboard');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubscribe = async (event) => {
    event.preventDefault();
    if (!newsletterEmail) {
      alert('Please enter an email to subscribe');
      return;
    }

    try {
      await axios.post('http://localhost:5000/ask_mkulima/subscribe-newsletter', {
        email: newsletterEmail,
      });
      alert('Subscribed to newsletter successfully!');
      setNewsletterEmail(''); // Clear the input field after successful subscription
    } catch (err) {
      console.error(err); // Log the error for debugging
      alert('Failed to subscribe to newsletter. Please try again.');
    }
  };

  const handleFacebookLogin = () => {
    if (!window.FB) {
      alert('Facebook SDK is not loaded yet');
      return;
    }

    window.FB.login((response) => {
      if (response.authResponse) {
        window.FB.api('/me', (userResponse) => {
          console.log('Good to see you, ' + userResponse.name + '.');
          // You can also handle user login and state here
        });
      } else {
        console.log('User cancelled login or failed.');
      }
    }, { scope: 'public_profile,email' });
  };

  const handleGoogleLogin = () => {
    if (!window.gapi) {
      alert('Google SDK is not loaded yet');
      return;
    }

    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      // Handle user login and state here
    }).catch((error) => {
      console.error('Google login error:', error);
    });
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6}>
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
                disabled={loading}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
          <div className="social-login">
            <h2>Or login with</h2>
            <Button variant="secondary" onClick={handleFacebookLogin}>
              Login with Facebook
            </Button>
            <Button variant="secondary" onClick={handleGoogleLogin}>
              Login with Google
            </Button>
          </div>
          <div className="links">
            <a href="/forgot-password">Forgot password?</a>
            <br />
            <a href="/register">Don't have an account? Sign up now</a>
          </div>
          <div className="newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <Form onSubmit={handleNewsletterSubscribe}>
              <Form.Group controlId="newsletterEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
