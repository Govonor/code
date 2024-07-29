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
    // Placeholder for checkout logic
    alert('Proceeding to checkout');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length > 0 ? (
        <Table striped bordered hover className="cart-table">
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
                <td>${item.price.toFixed(2)}</td>
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
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
      <Button variant="success" onClick={handleCheckout} className="checkout-button">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Cart;
