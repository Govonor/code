import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProduceList from '../components/ProductList';
import OrderList from '../components/OrderList';
import FarmerProfile from '../components/FarmerProfile';
import './FarmerDashboard.css';

function FarmerDashboard() {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/produce') // Replace with your backend API endpoint
      .then(response => setProduce(response.data))
      .catch(error => console.error('Error fetching produce:', error));
  }, []);

  return (
    <div className="farmer-dashboard">
      <h1>Farmer Dashboard</h1>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h2>Your Produce</h2>
          <ProduceList produce={produce} /> {/* Pass produce data to ProductList */}
        </section>
        <section className="dashboard-section">
          <h2>Your Orders</h2>
          <OrderList />
        </section>
        <section className="dashboard-section">
          <h2>Your Profile</h2>
          <FarmerProfile />
        </section>
      </div>
    </div>
  );
}

export default FarmerDashboard;
