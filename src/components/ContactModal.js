// src/components/ContactModal.js

import React, { useState } from 'react';
import './About.css'; // Import the About.css file for styling

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="contact-button">Get in Touch</button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={handleClose} className="modal-close">&times;</button>
            <h2>Contact Us</h2>
            <form action="https://example.com/contact-form" method="post">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
