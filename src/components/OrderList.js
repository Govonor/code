// src/components/OrderList.js
import React from 'react';
import './OrderList.css'; // Ensure this path is correct

function OrderList() {
  // Dummy data for orders
  const orders = [
    { id: 1, customer: 'John Doe', status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', status: 'Pending' },
  ];

  return (
    <div className="order-list">
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <span>Order #{order.id}</span>
            <span>Customer: {order.customer}</span>
            <span>Status: {order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
