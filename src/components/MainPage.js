import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './MainPage.css'; // Optional: For custom styles

const MainPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle search submission
  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Search error:', error);
      setError('An error occurred while fetching search results.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-page">
      <SearchBar onSearch={handleSearch} />

      {loading && <div className="loading">Loading...</div>}

      {error && <div className="error">{error}</div>}

      <SearchResults results={results} />
    </div>
  );
};

export default MainPage;
