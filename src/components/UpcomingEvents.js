import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events') // Replace with your API endpoint
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="upcoming-events">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.title} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
