import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Hook for getting route parameters
import './styles/FarmerProfile.css'; // Ensure this CSS file exists

const FarmerProfile = () => {
  const { id } = useParams(); // Get the farmer ID from route parameters
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const response = await axios.get(`/api/farmers/${id}`);
        setFarmer(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching farmer data:', error);
        setError('Failed to load farmer profile.');
        setLoading(false);
      }
    };

    fetchFarmer();
  }, [id]);

  if (loading) return <div className="loading-indicator">Loading...</div>; // Improved loading state
  if (error) return <div className="error-message">{error}</div>; // Improved error handling

  return (
    <div className="farmer-profile">
      <h1>{farmer.name}</h1>
      <p>{farmer.bio}</p>
      <p><strong>Location:</strong> {farmer.location}</p>
      <h2>Products:</h2>
      <ul>
        {farmer.products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerProfile;
