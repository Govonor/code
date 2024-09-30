import React from 'react';
import './styles/AwardsRecognition.css'; // Import specific styles

const AwardsRecognition = () => {
  const awards = [
    { name: 'Best Agricultural Platform', year: '2024', awardName: 'AgriTech Awards' },
    { name: 'Innovation in AgTech', year: '2024', awardName: 'Tech Innovation Awards' },
    { name: 'Sustainability Leader', year: '2024', awardName: 'Green Tech Awards' },
    // Add more awards as needed
  ];

  return (
    <section className="awards-recognition">
      <h2>Awards & Recognition</h2>
      <p>We are honored to have received recognition for our contributions to agriculture and technology:</p>
      <ul>
        {awards.map((award, index) => (
          <li key={index} className="award-item">
            <strong>{award.name}</strong> - {award.awardName}, <em>{award.year}</em>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AwardsRecognition;
