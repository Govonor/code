import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderList';
import FarmerProfile from '../components/FarmerProfile';
import AddProduceForm from '../components/AddProduceForm';
import SalesStatistics from '../components/SalesStatistics';
import UpcomingEvents from '../components/UpcomingEvents';
import Messages from '../components/Messages';
import Notifications from '../components/Notifications';
import InventoryManagement from '../components/InventoryManagement';
import MarketTrends from '../components/MarketTrends';
import FinancialOverview from '../components/FinancialOverview';
import FeedbackForm from '../components/FeedbackForm';
import DeliverySelection from '../components/DeliverySelection'; // New import
import './FarmerDashboard.css';

function FarmerDashboard() {
  const [produce, setProduce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]); // To manage orders
  const [deliveryOptions, setDeliveryOptions] = useState([]); // To manage delivery options

  useEffect(() => {
    // Fetch produce data
    axios.get('http://localhost:5000/api/produce') // Replace with your backend API endpoint
      .then(response => {
        setProduce(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching produce:', error);
        setLoading(false);
      });
      
    // Fetch orders data
    axios.get('http://localhost:5000/api/orders') // Replace with your backend API endpoint
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });

    // Fetch delivery options
    axios.get('http://localhost:5000/api/delivery-options') // Replace with your backend API endpoint
      .then(response => {
        setDeliveryOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching delivery options:', error);
      });
  }, []);

  const handleAddProduce = (newProduce) => {
    setProduce([...produce, newProduce]);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="farmer-dashboard">
      <h1>Farmer Dashboard</h1>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h2>Your Orders</h2>
          <OrderList orders={orders} />
        </section>
        <section className="dashboard-section">
          <h2>Your Profile</h2>
          <FarmerProfile />
        </section>
        <section className="dashboard-section">
          <h2>Add New Produce</h2>
          <AddProduceForm onAddProduce={handleAddProduce} />
        </section>
        <section className="dashboard-section">
          <h2>Sales Statistics</h2>
          <SalesStatistics />
        </section>
        <section className="dashboard-section">
          <h2>Upcoming Events</h2>
          <UpcomingEvents />
        </section>
        <section className="dashboard-section">
          <h2>Messages</h2>
          <Messages />
        </section>
        <section className="dashboard-section">
          <h2>Notifications</h2>
          <Notifications />
        </section>
        <section className="dashboard-section">
          <h2>Inventory Management</h2>
          <InventoryManagement />
        </section>
        <section className="dashboard-section">
          <h2>Market Trends</h2>
          <MarketTrends />
        </section>
        <section className="dashboard-section">
          <h2>Financial Overview</h2>
          <FinancialOverview />
        </section>
        <section className="dashboard-section">
          <h2>Feedback</h2>
          <FeedbackForm />
        </section>
        <section className="dashboard-section">
          <h2>Delivery Management</h2>
          <DeliverySelection 
            orders={orders} 
            deliveryOptions={deliveryOptions} 
          />
        </section>
      </div>
    </div>
  );
}

export default FarmerDashboard;
