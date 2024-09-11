// src/pages/About.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles/About.css'; // Import the About.css file
import Testimonials from '../components/Testimonials'; // Adjust paths as needed
import OurJourney from '../components/OurJourney'; // Adjust paths as needed
import AwardsRecognition from '../components/AwardsRecognition'; // Adjust paths as needed
import MediaGallery from '../components/MediaGallery'; // Adjust paths as needed
import FAQs from '../components/FAQs'; // Adjust paths as needed
import TeamCarousel from '../components/TeamCarousel'; // Import TeamCarousel component

const About = () => {
  return (
    <div className="about">
      <section className="hero">
        <div className="hero-content">
          <h1>About Ask Mkulima Kenya</h1>
          <p>Welcome to Ask Mkulima! We are dedicated to providing farmers and consumers with an innovative platform to connect and collaborate.</p>
          <p>Our mission is to support farmers by offering valuable resources, information, and a marketplace to enhance their agricultural practices.</p>
          <Link to="/contact" className="contact-link">Get in Touch</Link>
        </div>
      </section>

      {/* Add TeamCarousel */}
      <TeamCarousel />

      {/* Rest of the About section */}
      <Testimonials />
      <OurJourney />
      <AwardsRecognition />
      <MediaGallery />
      <FAQs />
    </div>
  );
};

export default About;
