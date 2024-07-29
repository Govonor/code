import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderList';
import FarmerProfile from '../components/FarmerProfile';
import AddProduceForm from '../components/AddProduceForm';
import SalesStatistics from '../components/SalesStatistics';
import UpcomingEvents from '../components/UpcomingEvents';
import Messages from '../components/Messages';
import './FarmerDashboard.css';

function FarmerDashboard() {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/produce') // Replace with your backend API endpoint
      .then(response => setProduce(response.data))
      .catch(error => console.error('Error fetching produce:', error));
  }, []);

  const handleAddProduce = (newProduce) => {
    setProduce([...produce, newProduce]);
  };

  return (
    <div className="farmer-dashboard">
      <h1>Farmer Dashboard</h1>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h2>Your Orders</h2>
          <OrderList />
        </section>
        <section className="dashboard-section">
          <h2>Your Profile</h2>
          <FarmerProfile />
        </section>
        <section className="dashboard-section">
          <AddProduceForm onAddProduce={handleAddProduce} />
        </section>
        <section className="dashboard-section">
          <SalesStatistics />
        </section>
        <section className="dashboard-section">
          <UpcomingEvents />
        </section>
        <section className="dashboard-section">
          <Messages />
        </section>
      </div>
    </div>
  );
}

export default FarmerDashboard;
