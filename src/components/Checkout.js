import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/Checkout.css';

const Checkout= () => {
  const { cart, clearCart } = useContext(CartContext);
  const [shippingDetails, setShippingDetails] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePlaceOrder = async () => {
    // Process the order
    await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart, shippingDetails }),
    });

    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>
          Address:
          <input type="text" name="address" onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" onChange={handleInputChange} />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" onChange={handleInputChange}>
            <option value="mpesa">M-Pesa</option>
            <option value="credit-card">Credit Card</option>
          </select>
        </label>
        <button type="button" onClick={handlePlaceOrder}>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
