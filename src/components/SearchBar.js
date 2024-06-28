import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ location, setLocation, searchLocation, handleKeyPress, error }) => (
  <div className="search">
    <input
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={handleKeyPress}
      placeholder='Enter Location'
      type="text"
    />
    <button onClick={searchLocation}>Search</button>
    <div className="error-container">
      {error && <p className="error">{error}</p>}
    </div>
  </div>
);

export default SearchBar;
