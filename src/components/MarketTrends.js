import React from 'react';

const MarketTrends = () => {
  const trends = [
    { product: 'Tomatoes', trend: 'Increasing' },
    { product: 'Potatoes', trend: 'Stable' },
  ];

  return (
    <div className="market-trends">
      <h3>Market Trends</h3>
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>{trend.product}: {trend.trend} trend</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketTrends;
