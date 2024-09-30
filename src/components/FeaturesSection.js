import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/FeaturesSection.css';

import beansImage from '../images/beans.jpeg';
import kalesImage from '../images/kales.jpg';
import farmerConsumerImage from '../images/farmer-consumer.jpg';
import qualityImage from '../images/quality.jpg'; 
import deliveryImage from '../images/delivery.jpg';
import communityImage from '../images/community.jpg';

const FeaturesSection = () => (
  <Container className="features-section">
    <h2 className="text-center">Why Choose Us?</h2>
    <Row>
      <Col md={4} className="mb-4">
        <Card className="feature-card">
          <Card.Img variant="top" src={beansImage} />
          <Card.Body>
            <Card.Title>Fresh Produce</Card.Title>
            <Card.Text>Get access to the freshest local produce directly from farmers.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="feature-card">
          <Card.Img variant="top" src={kalesImage} />
          <Card.Body>
            <Card.Title>Fair Prices</Card.Title>
            <Card.Text>Enjoy fair prices by eliminating middlemen.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="feature-card">
          <Card.Img variant="top" src={farmerConsumerImage} />
          <Card.Body>
            <Card.Title>Support Farmers</Card.Title>
            <Card.Text>Support local farmers and sustainable agriculture.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* New Features */}
      <Col md={4} className="mb-4">
        <Card className="feature-card">
          <Card.Img variant="top" src={qualityImage} />
          <Card.Body>
            <Card.Title>High Quality</Card.Title>
            <Card.Text>Our produce is carefully selected to ensure high quality and freshness.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="feature-card">
          <Card.Img variant="top" src={deliveryImage} />
          <Card.Body>
            <Card.Title>Fast Delivery</Card.Title>
            <Card.Text>Experience quick and reliable delivery straight to your doorstep.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="feature-card">
          <Card.Img variant="top" src={communityImage} />
          <Card.Body>
            <Card.Title>Community Focused</Card.Title>
            <Card.Text>We build strong relationships within the community to foster growth.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default FeaturesSection;
