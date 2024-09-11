// src/components/Testimonials.js

import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <blockquote>
        <p>"Ask Mkulima has transformed the way we connect with local farmers. The platform is user-friendly and effective!"</p>
        <footer>- Jane Doe, Urban Consumer</footer>
      </blockquote>
      <blockquote>
        <p>"The support from Ask Mkulima has been invaluable. They have helped me reach more customers and improve my farming practices."</p>
        <footer>- John Smith, Local Farmer</footer>
      </blockquote>
      {/* Add more testimonials as needed */}
    </section>
  );
};

export default Testimonials;
