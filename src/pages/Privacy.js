import React from 'react';
import './styles/Privacy.css'; // Import the Privacy.css file

const Privacy = () => {
  return (
    <div className="privacy">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
      
      <section className="data-collection">
        <h2>Data Collection</h2>
        <p>We may collect personal information such as your name, email address, and contact details when you register or contact us. We also collect information about your interactions with our site, such as your IP address, browser type, and usage data.</p>
        <p>Information collected is used to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Personalize your experience on our platform.</li>
          <li>Communicate with you, including sending updates and promotional materials.</li>
        </ul>
      </section>

      <section className="data-use">
        <h2>Data Use</h2>
        <p>We use the collected data to:</p>
        <ul>
          <li>Process transactions and manage your orders.</li>
          <li>Enhance our website and services based on your feedback.</li>
          <li>Send periodic emails, including information about your account or updates on our services.</li>
        </ul>
        <p>We do not sell or rent your personal information to third parties. We only share your information with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>
      </section>

      <section className="data-security">
        <h2>Data Security</h2>
        <p>We implement various security measures to ensure the protection of your personal information. These measures include data encryption, secure servers, and access controls.</p>
        <p>While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.</p>
      </section>

      <section className="user-rights">
        <h2>Your Rights</h2>
        <p>You have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
          <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain legal conditions.</li>
          <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications from us at any time.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the information provided below.</p>
      </section>

      <section className="cookies">
        <h2>Cookies</h2>
        <p>We use cookies to enhance your experience on our site. Cookies are small files that are stored on your device and help us understand how you use our website. You can choose to disable cookies through your browser settings, but this may affect your experience on our site.</p>
      </section>

      <section className="changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes via email or through our website.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
        <p>Email: <a href="mailto:info@askmkulima.com">info@askmkulima.com</a></p>
        <p>Address: 123 Mshomoroni , Mombasa, Kenya</p>
      </section>
    </div>
  );
};

export default Privacy;
