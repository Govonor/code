import React, { useState } from 'react';
import './styles/Review.css';

function Review({ productId }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log({ productId, review, rating });
  };

  return (
    <div className="review-form">
      <h4>Leave a Review</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}

export default Review;
