import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/MarketTrends.css'; // Add your CSS file for styling

const MarketTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/market-trends'); // Update with your API endpoint
        setTrends(response.data);
      } catch (err) {
        setError('Error fetching market trends');
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  if (loading) return <div className="loading">Loading trends...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="market-trends">
      <h3>Market Trends</h3>
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>
            {trend.product}: <span className={`trend ${trend.trend.toLowerCase()}`}>{trend.trend} trend</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketTrends;
