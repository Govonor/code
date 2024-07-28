import React from 'react';
import './HomePage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to Ask Mkulima</h1>
      <p>Your go-to platform for connecting farmers and consumers.</p>
      <div className="homepage-buttons">
        <a href="/farmer-dashboard" className="btn btn-primary">Farmer Dashboard</a>
        <a href="/consumer-dashboard" className="btn btn-secondary">Consumer Dashboard</a>
      </div>
    </div>
  );
};

export default Homepage;