import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/FeaturesSection.css';

const FeaturesSection = () => (
  <Container className="features-section">
    <h2>Why Choose Ask Mkulima?</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="/path-to-icon1.png" />
          <Card.Body>
            <Card.Title>Fresh Produce</Card.Title>
            <Card.Text>Get farm-fresh produce directly delivered to your home.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="/path-to-icon2.png" />
          <Card.Body>
            <Card.Title>Support Local Farmers</Card.Title>
            <Card.Text>Empower Kenyan farmers by purchasing directly from them.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="/path-to-icon3.png" />
          <Card.Body>
            <Card.Title>Transparent Pricing</Card.Title>
            <Card.Text>Enjoy fair pricing with no middlemen involved.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default FeaturesSection;
