import React from 'react';

const RecommendedProduce = ({ produce }) => {
  return (
    <div className="recommended-produce">
      <ul>
        {produce.length > 0 ? (
          produce.map(item => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Description: {item.description}</p>
            </li>
          ))
        ) : (
          <p>No recommended produce available.</p>
        )}
      </ul>
    </div>
  );
};

export default RecommendedProduce;
