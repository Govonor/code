// src/pages/ConsumerDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderList';
import Wishlist from '../components/Wishlist';
import UserProfile from '../components/UserProfile';
import RecommendedProduce from '../components/RecommendedProduce';
import RecentReviews from '../components/RecentReviews';
import SpecialOffers from '../components/SpecialOffers';
import './styles/ConsumerDashboard.css';

function ConsumerDashboard() {
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [recommendedProduce, setRecommendedProduce] = useState([]);
  const [recentReviews, setRecentReviews] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);

  useEffect(() => {
    // Fetch orders
    axios.get('http://localhost:5000/api/orders') // Replace with your backend API endpoint
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));

    // Fetch wishlist
    axios.get('http://localhost:5000/api/wishlist') // Replace with your backend API endpoint
      .then(response => setWishlist(response.data))
      .catch(error => console.error('Error fetching wishlist:', error));

    // Fetch user profile
    axios.get('http://localhost:5000/api/user-profile') // Replace with your backend API endpoint
      .then(response => setUserProfile(response.data))
      .catch(error => console.error('Error fetching user profile:', error));

    // Fetch recommended produce
    axios.get('http://localhost:5000/api/recommended-produce') // Replace with your backend API endpoint
      .then(response => setRecommendedProduce(response.data))
      .catch(error => console.error('Error fetching recommended produce:', error));

    // Fetch recent reviews
    axios.get('http://localhost:5000/api/recent-reviews') // Replace with your backend API endpoint
      .then(response => setRecentReviews(response.data))
      .catch(error => console.error('Error fetching recent reviews:', error));

    // Fetch special offers
    axios.get('http://localhost:5000/api/special-offers') // Replace with your backend API endpoint
      .then(response => setSpecialOffers(response.data))
      .catch(error => console.error('Error fetching special offers:', error));
  }, []);

  return (
    <div className="consumer-dashboard">
      <h1>Consumer Dashboard</h1>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h2>Your Orders</h2>
          <OrderList orders={orders} />
        </section>
        <section className="dashboard-section">
          <h2>Your Wishlist</h2>
          <Wishlist wishlist={wishlist} />
        </section>
        <section className="dashboard-section">
          <h2>Your Profile</h2>
          <UserProfile profile={userProfile} />
        </section>
        <section className="dashboard-section">
          <h2>Recommended Produce</h2>
          <RecommendedProduce produce={recommendedProduce} />
        </section>
        <section className="dashboard-section">
          <h2>Recent Reviews</h2>
          <RecentReviews reviews={recentReviews} />
        </section>
        <section className="dashboard-section">
          <h2>Special Offers</h2>
          <SpecialOffers offers={specialOffers} />
        </section>
      </div>
    </div>
  );
}

export default ConsumerDashboard;
