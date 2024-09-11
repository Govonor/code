import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchBar.css'; 

const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchBarRef = useRef(null);

  // Handle input changes
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setShowSuggestions(true);
    
    if (value) {
      setFilteredSuggestions(
        suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  // Handle click outside to close suggestions
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-bar" ref={searchBarRef}>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for produce..."
          value={query}
          onChange={handleChange}
          className="search-input"
          aria-label="Search"
        />
        <button type="submit" className="search-button" aria-label="Search">
          Search
        </button>
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="clear-button"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </form>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-list" aria-live="polite">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
              role="option"
              aria-selected="false"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string)
};

SearchBar.defaultProps = {
  suggestions: []
};

export default SearchBar;
