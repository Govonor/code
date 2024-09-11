import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, please don't hesitate to reach out.</p>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:info@askmkulima.com">info@askmkulima.com</a></p>
        <p>Phone: +254 711 475 289</p>
        <p>Address: 123 Mshomoroni, Mombasa, Kenya</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form
          action="https://example.com/contact-form" // Replace with your form handling URL
          method="post"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <a href="https://facebook.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF size={24} />
        </a>
        <a href="https://x.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="X">
          <SiX size={24} />
        </a>
        <a href="https://instagram.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
        <a href="https://youtube.com/askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube size={24} />
        </a>
        <a href="https://tiktok.com/@askmkulimakenya" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok size={24} />
        </a>
      </section>

      <section className="map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31692.814049337897!2d39.6597645642166!3d-4.043477920026246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1234567890ab%3A0x1234567890abcdef!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sus!4v1633624072877!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>

      <section className="business-hours">
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </section>
    </div>
  );
};

export default Contact;
