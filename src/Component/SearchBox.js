import React from 'react';

const SearchBox = ({ city, setCity, fetchWeather }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
  );
};

export default SearchBox;
