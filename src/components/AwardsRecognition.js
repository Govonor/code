import React from 'react';
import './styles/AwardsRecognition.css'; // Import specific styles

const AwardsRecognition = () => {
  return (
    <section className="awards-recognition">
      <h2>Awards & Recognition</h2>
      <p>We are honored to have received recognition for our contributions to agriculture and technology:</p>
      <ul>
        <li>Best Agricultural Platform - [Award Name], [Year]</li>
        <li>Innovation in AgTech - [Award Name], [Year]</li>
        {/* Add more awards and recognitions */}
      </ul>
    </section>
  );
};

export default AwardsRecognition;
