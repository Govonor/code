import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderHistory.css'; // Import specific CSS for OrderHistory

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders') // Replace with your backend API endpoint
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="order-history">
      <ul>
        {orders.map(order => (
          <li key={order.id} className="order-item">
            <h4>Order #{order.id}</h4>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Status: {order.status}</p>
            <p><strong>Total: ${order.total.toFixed(2)}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;
