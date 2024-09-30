import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Notifications.css'; // Ensure you have appropriate styles

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notifications'); // Update with your API endpoint
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const intervalId = setInterval(() => {
      fetchNotifications(); // Fetch new notifications every 10 seconds
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    // Optionally, you can also update the server to mark the notification as read
    // axios.post(`http://localhost:5000/api/notifications/${id}/read`);
  };

  if (loading) return <div className="loading">Loading notifications...</div>;

  return (
    <div className="notifications">
      <h3>Farmer Notifications</h3>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <p>{notification.message}</p>
            <small>{new Date(notification.timestamp).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;
