import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/FinancialOverview.css'; // Import specific styles

const FinancialOverview = () => {
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchFinancialData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/financial-overview'); // Replace with your backend API endpoint
      setFinancialData(response.data);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error fetching financial data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFinancialData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchFinancialData(); // Fetch data every 30 seconds
    }, 30000); // 30000 ms = 30 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  if (loading) return <div className="loading">Loading financial data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="financial-overview">
      <h2>Financial Overview</h2>
      <p>Here’s a brief overview of our financial health and achievements:</p>
      <ul>
        <li><strong>Revenue Growth:</strong> {financialData.revenueGrowth}% increase year-over-year.</li>
        <li><strong>Investment:</strong> Secured ${financialData.investment} in funding.</li>
        <li><strong>Profit Margin:</strong> Maintained a {financialData.profitMargin}% profit margin.</li>
        {/* Add more financial highlights as needed */}
      </ul>
    </section>
  );
};

export default FinancialOverview;
