import React from 'react';
import './styles/MediaGallery.css'; // Import specific styles

const MediaGallery = () => {
  return (
    <section className="media-gallery">
      <h2>Media Gallery</h2>
      <p>Explore our gallery to see the impact we’ve made and the events we’ve hosted:</p>
      <div className="gallery">
        <img src="/src/images/event1.jpg" alt="Event 1" />
        <img src="/src/images/event2.jpg" alt="Event 2" />
        {/* Add more images */}
      </div>
    </section>
  );
};

export default MediaGallery;
