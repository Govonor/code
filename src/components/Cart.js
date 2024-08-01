import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './styles/Cart.css'; // Ensure you create and style this file

const Cart = () => {
  // Use context
  const { cart = [], removeFromCart, clearCart } = useContext(CartContext);

  if (!Array.isArray(cart)) {
    console.error('Cart is not an array');
    return <div>There was an error loading your cart.</div>;
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is currently empty.</h2>
        <p>It looks like you haven't added any items to your cart yet.</p>
        <Link to="/products" className="btn btn-primary">Go to Products</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total Amount: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
        <button onClick={clearCart} className="btn btn-secondary">Clear Cart</button>
        <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
