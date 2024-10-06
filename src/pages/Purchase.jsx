import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './styles/Purchase.css';

const Purchase = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <h4>Your Shopping Cart</h4>
          {/* Replace with dynamic cart items */}
          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col md={8}>
                  <h5>Tomatoes</h5>
                  <p>Quantity: 2</p>
                  <p>KSh 600</p>
                </Col>
                <Col md={4} className="text-end">
                  <Button variant="danger">Remove</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Add more cart items as needed */}
        </Col>
        <Col md={4}>
          <h4>Checkout</h4>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="address" className="mt-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
                <Form.Group controlId="paymentMethod" className="mt-3">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control as="select">
                    <option>Cash on Delivery</option>
                    <option>M-Pesa</option>
                    <option>Credit Card</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" className="mt-3" type="submit">Place Order</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Purchase;
