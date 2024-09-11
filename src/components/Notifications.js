import React from 'react';

const Notifications = () => {
  const notifications = [
    'New order received from XYZ.',
    'Price change for produce ABC.',
    'Reminder: Upcoming market event.',
  ];

  return (
    <div className="notifications">
      {notifications.map((notification, index) => (
        <div key={index} className="notification-item">
          {notification}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
