import React from 'react';
import './Reviews.css'; // Import specific CSS for Reviews

function Reviews() {
  return (
    <div className="reviews">
      <h3>Product Reviews</h3>
      <ul>
        <li>
          <p>Review 1: Excellent quality and fast delivery!</p>
        </li>
        <li>
          <p>Review 2: Good value for money, will buy again.</p>
        </li>
        {/* Add more reviews as needed */}
      </ul>
    </div>
  );
}

export default Reviews;
