import React from 'react';
import './ConsumerProfile.css'; // Import specific CSS for ConsumerProfile

function ConsumerProfile() {
  return (
    <div className="consumer-profile">
      <h3>Profile Information</h3>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john.doe@example.com</p>
      <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
      {/* Add more profile details as needed */}
    </div>
  );
}

export default ConsumerProfile;
