import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderList';
import Wishlist from '../components/Wishlist';
import UserProfile from '../components/UserProfile';
import RecommendedProduce from '../components/RecommendedProduce';
import RecentReviews from '../components/RecentReviews';
import SpecialOffers from '../components/SpecialOffers';
import OrderStatus from '../components/OrderStatus'; 
import Map from '../components/Map'; // Use the Map component for locations
import './styles/ConsumerDashboard.css';

function ConsumerDashboard() {
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [recommendedProduce, setRecommendedProduce] = useState([]);
  const [recentReviews, setRecentReviews] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orderResponse, wishlistResponse, profileResponse, produceResponse, reviewsResponse, offersResponse] = await Promise.all([
          axios.get('http://localhost:5000/api/orders'),
          axios.get('http://localhost:5000/api/wishlist'),
          axios.get('http://localhost:5000/api/user-profile'),
          axios.get('http://localhost:5000/api/recommended-produce'),
          axios.get('http://localhost:5000/api/recent-reviews'),
          axios.get('http://localhost:5000/api/special-offers')
        ]);
        setOrders(orderResponse.data);
        setWishlist(wishlistResponse.data);
        setUserProfile(profileResponse.data);
        setRecommendedProduce(produceResponse.data);
        setRecentReviews(reviewsResponse.data);
        setSpecialOffers(offersResponse.data);
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
    <div className="consumer-dashboard">
      <h1>Consumer Dashboard</h1>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h2>Your Orders</h2>
          <OrderList orders={orders} />
          <OrderStatus orders={orders} />
          <Map orders={orders} /> {/* Use Map component for order locations */}
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
