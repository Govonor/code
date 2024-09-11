import React from 'react';
import './styles/About.css'; // Import the About.css file

const Timeline = () => {
  return (
    <section className="timeline">
      <h2>Our Journey</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Foundation</h3>
            <p>[Year] - Ask Mkulima was founded with a vision to bridge the gap between farmers and urban consumers.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>First Milestone</h3>
            <p>[Year] - Launched our first platform and connected with initial set of farmers and consumers.</p>
          </div>
        </div>
        {/* Add more timeline items as needed */}
      </div>
    </section>
  );
};

export default Timeline;
