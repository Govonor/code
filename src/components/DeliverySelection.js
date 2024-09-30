import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeliverySelection from '../components/DeliverySelection';

const DeliveryManagement = () => {
  const [orders, setOrders] = useState([]);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await axios.get('http://localhost:5000/api/orders');
        const optionsResponse = await axios.get('http://localhost:5000/api/delivery-options');
        setOrders(ordersResponse.data);
        setDeliveryOptions(optionsResponse.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h1>Delivery Management</h1>
      <DeliverySelection orders={orders} deliveryOptions={deliveryOptions} />
    </div>
  );
};

export default DeliveryManagement;
