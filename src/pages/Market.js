import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Market.css';

const products = [
  { id: 1, name: 'Tomatoes', price: 300, image: '/images/tomatoes.jpg' },
  { id: 2, name: 'Potatoes', price: 200, image: '/images/kales.jpg' },
  { id: 3, name: 'Onions', price: 150, image: '/images/onions.jpg' },
  // Add more products as needed
];

const Market = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <h4>Filter Products</h4>
          <Form>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select">
                <option>All Categories</option>
                <option>Vegetables</option>
                <option>Fruits</option>
                {/* Add more categories as needed */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="priceRange" className="mt-3">
              <Form.Label>Price Range</Form.Label>
              <Form.Control type="range" min="0" max="500" />
            </Form.Group>
            <Button variant="primary" className="mt-3" type="submit">Apply Filters</Button>
          </Form>
        </Col>
        <Col md={9}>
          <Row>
            {products.map(product => (
              <Col md={4} key={product.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      KSh {product.price}
                    </Card.Text>
                    <Link to={`/products/${product.id}`}>
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Market;
