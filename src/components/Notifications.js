import React from 'react';
import './Notifications.css'; // Import specific CSS for Notifications

function Notifications() {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        <li>
          <p>Notification 1: New product added to your favorite list!</p>
        </li>
        <li>
          <p>Notification 2: Your order has been shipped.</p>
        </li>
        {/* Add more notifications as needed */}
      </ul>
    </div>
  );
}

export default Notifications;
