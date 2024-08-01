import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/FeaturesSection.css';

import beansImage from '../images/beans.jpeg';
import kalesImage from '../images/kales.jpg';
import farmerConsumerImage from '../images/farmer-consumer.jpg';

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
    </Row>
  </Container>
);

export default FeaturesSection;
