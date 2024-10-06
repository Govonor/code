import React from 'react';

const RecentReviews = ({ reviews }) => {
  return (
    <div className="recent-reviews">
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h4>{review.title}</h4>
              <p>Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
              <p><strong>By:</strong> {review.author}</p>
            </li>
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecentReviews;
