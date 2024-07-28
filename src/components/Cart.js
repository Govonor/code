import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Example cart items
    { id: 1, name: 'Tomato', price: 3.00, quantity: 2 },
    { id: 2, name: 'Onion', price: 2.50, quantity: 1 }
  ]);

  const handleCheckout = () => {
    // Logic for checkout
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-right">Total</td>
              <td>${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</td>
            </tr>
          </tfoot>
        </Table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Button variant="success" onClick={handleCheckout}>Proceed to Checkout</Button>
    </div>
  );
};

export default Cart;
