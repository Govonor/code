import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/Checkout.css';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [shippingDetails, setShippingDetails] = useState({ address: '', phone: '', paymentMethod: 'mpesa' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const validateForm = () => {
    if (!shippingDetails.address || !shippingDetails.phone) {
      setError('Please fill in all fields.');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, shippingDetails }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to place order. Please try again.');
      }

      clearCart();
      navigate('/order-confirmation');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Address:
          <input type="text" name="address" value={shippingDetails.address} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={shippingDetails.phone} onChange={handleInputChange} />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={shippingDetails.paymentMethod} onChange={handleInputChange}>
            <option value="mpesa">M-Pesa</option>
            <option value="credit-card">Credit Card</option>
          </select>
        </label>
        <button type="button" onClick={handlePlaceOrder} disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
      <h3>Items in Cart:</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
