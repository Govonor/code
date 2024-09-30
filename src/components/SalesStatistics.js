import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/SalesStatistics.css'; // Import specific styles if needed

const SalesStatistics = () => {
  const [stats, setStats] = useState({ totalSales: 0, totalOrders: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSalesStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sales-stats'); // Replace with your API endpoint
      setStats(response.data);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error fetching sales statistics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesStats(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchSalesStats(); // Fetch data every 30 seconds
    }, 30000); // 30000 ms = 30 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  if (loading) return <div className="loading">Loading sales statistics...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="sales-statistics">
      <h3>Sales Statistics</h3>
      <p>Total Sales: ${stats.totalSales.toFixed(2)}</p>
      <p>Total Orders: {stats.totalOrders}</p>
    </div>
  );
};

export default SalesStatistics;
