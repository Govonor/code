// src/components/OrderList.js
import React from 'react';
import PropTypes from 'prop-types';

const OrderList = ({ orders = [] }) => {
  // Check if orders is an array and has elements
  if (!Array.isArray(orders)) {
    console.error('Invalid data format for orders:', orders);
    return <div>Error loading orders.</div>;
  }

  return (
    <div className="order-list">
      {orders.length === 0 ? (
        <p>No orders to display.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <h4>Order #{order.id}</h4>
              <p>Product: {order.product}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Price: ${order.price}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define prop types to ensure that `orders` is an array
OrderList.propTypes = {
  orders: PropTypes.array
};

export default OrderList;
