import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Import specific CSS for Profile

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user-profile'); // Adjust to your API endpoint
        setUserProfile(response.data);
      } catch (err) {
        setError('Error fetching user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="profile">
      <h3>Profile Information</h3>
      {userProfile ? (
        <div className="profile-detail">
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Address:</strong> {userProfile.address}</p>
          {/* Add more profile details as needed */}
        </div>
      ) : (
        <p>No profile information available.</p>
      )}
      <button className="edit-button">Edit Profile</button>
    </div>
  );
}

export default Profile;
