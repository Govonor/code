import React from 'react';

const UserProfile = () => {
  // In a real app, profile details would be fetched from an API and stored in state
  const user = {
    name: ' ',
    email: ' ',
    address: ' '
  };

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default UserProfile;
