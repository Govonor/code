import React, { useState } from 'react';

const FarmerProfile = () => {
  // Initialize state
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Handler to update profile information
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Handler to save profile information (e.g., submit to API)
  const handleSave = () => {
    // Example: Save profile data to a server or local storage
    console.log('Profile saved:', profile);
  };

  return (
    <div>
      <h2>Farmer Profile</h2>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleProfileChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleProfileChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={profile.phone}
        onChange={handleProfileChange}
        placeholder="Phone"
      />
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default FarmerProfile;
