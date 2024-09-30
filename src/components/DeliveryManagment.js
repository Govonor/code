import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeliveryManagement.css'; // Import specific CSS for DeliveryManagement

const DeliveryManagement = () => {
  const [deliveryServices, setDeliveryServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDeliveryServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/delivery-services'); // Adjust API endpoint
        setDeliveryServices(response.data);
      } catch (err) {
        setError('Error fetching delivery services');
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveryServices();
  }, []);

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission with the selected delivery service
    console.log('Selected Delivery Service:', selectedService);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="delivery-management">
      <h2>Select Delivery Service for Orders</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Delivery Service:
          <select value={selectedService} onChange={handleServiceSelect} required>
            <option value="">Select a service</option>
            {deliveryServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Confirm Delivery Service</button>
      </form>
    </div>
  );
};

export default DeliveryManagement;
