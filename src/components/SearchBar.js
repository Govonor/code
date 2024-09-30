import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchBar.css'; 

const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchBarRef = useRef(null);

  // Highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  // Fetch suggestions
  const fetchSuggestions = async () => {
    setLoading(true);
    // Simulate fetch
    setTimeout(() => {
      setLoading(false);
      setFilteredSuggestions(
        suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);
  };

  // Handle input changes
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setShowSuggestions(true);
    fetchSuggestions();
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
    setRecentSearches((prev) => [suggestion, ...prev.filter((s) => s !== suggestion)]);
  };

  // Handle key down for keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredSuggestions.length - 1)
      );
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
        handleSuggestionClick(filteredSuggestions[highlightedIndex]);
      }
    }
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
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="search-button" aria-label="Search">
          {loading ? <span className="loader"></span> : 'Search'}
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
      {recentSearches.length > 0 && (
        <ul className="recent-searches-list">
          {recentSearches.map((search, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(search)}
              className="recent-search-item"
              role="option"
              aria-selected={highlightedIndex === index}
            >
              {search}
            </li>
          ))}
        </ul>
      )}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-list" aria-live="polite">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`suggestion-item ${highlightedIndex === index ? 'highlighted' : ''}`}
              role="option"
              aria-selected={highlightedIndex === index}
            >
              {highlightText(suggestion, query)}
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
