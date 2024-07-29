import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesStatistics = () => {
  const [stats, setStats] = useState({ totalSales: 0, totalOrders: 0 });

  useEffect(() => {
    axios.get('http://localhost:5000/api/sales-stats') // Replace with your API endpoint
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching sales statistics:', error));
  }, []);

  return (
    <div className="sales-statistics">
      <h3>Sales Statistics</h3>
      <p>Total Sales: ${stats.totalSales}</p>
      <p>Total Orders: {stats.totalOrders}</p>
    </div>
  );
};

export default SalesStatistics;
