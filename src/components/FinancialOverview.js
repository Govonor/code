import React from 'react';
import './styles/FinancialOverview.css'; // Import specific styles

const FinancialOverview = () => {
  return (
    <section className="financial-overview">
      <h2>Financial Overview</h2>
      <p>Here’s a brief overview of our financial health and achievements:</p>
      <ul>
        <li><strong>Revenue Growth:</strong> 20% increase year-over-year.</li>
        <li><strong>Investment:</strong> Secured $500,000 in funding.</li>
        <li><strong>Profit Margin:</strong> Maintained a 15% profit margin.</li>
        {/* Add more financial highlights as needed */}
      </ul>
    </section>
  );
};

export default FinancialOverview;
