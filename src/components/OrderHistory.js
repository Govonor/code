import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderHistory.css'; // Import specific CSS for OrderHistory

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders'); // Update with your backend API endpoint
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    const intervalId = setInterval(() => {
      fetchOrders(); // Fetch new orders every 10 seconds
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  if (loading) return <div className="loading">Loading orders...</div>;

  return (
    <div className="order-history">
      <h3>Your Order History</h3>
      <ul>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map(order => (
            <li key={order.id} className="order-item">
              <h4>Order #{order.id}</h4>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Status: {order.status}</p>
              <p><strong>Total: ${order.total.toFixed(2)}</strong></p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default OrderHistory;
