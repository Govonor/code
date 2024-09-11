import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './HomePage.css'; // Ensure this path is correct
import FeaturesSection from '../components/FeaturesSection'; // Correctly import the FeaturesSection component

import product1 from '../images/tomatoes.jpg';
import product2 from '../images/onions.jpg'; 
const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Ask Mkulima</h1>
        <p>Your go-to platform for connecting farmers and consumers.</p>
        <div className="hero-buttons">
          <Button href="/farmer-dashboard" variant="primary" size="lg">
            Farmer Dashboard
          </Button>
          <Button href="/consumer-dashboard" variant="secondary" size="lg">
            Consumer Dashboard
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection /> {/* Use the FeaturesSection component */}

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>
                "Ask Mkulima has transformed the way I buy fresh produce. The quality is excellent, and the prices are fair."
              </Card.Text>
              <Card.Footer>
                <small className="text-muted">Ali Malala, Consumer</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>
                "Being a farmer on Ask Mkulima has increased my sales and connected me with more customers than ever before."
              </Card.Text>
              <Card.Footer>
                <small className="text-muted">Fredrick Odhiambo, Farmer</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          <Card className="product-card">
            <Card.Img variant="top" src={product1} />
            <Card.Body>
              <Card.Title>Tomato</Card.Title>
              <Card.Text>$3.00 per kg</Card.Text>
              <Button variant="primary">View Product</Button>
            </Card.Body>
          </Card>
          <Card className="product-card">
            <Card.Img variant="top" src={product2} />
            <Card.Body>
              <Card.Title>Onion</Card.Title>
              <Card.Text>$2.50 per kg</Card.Text>
              <Button variant="primary">View Product</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates and offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <Button type="submit" variant="success">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
