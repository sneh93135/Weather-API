import React from 'react';

const WeatherDisplay = ({ weather, unit }) => {
  return (
    <div className="weather-display">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp} °{unit === 'metric' ? 'C' : 'F'}</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
    </div>
  );
};

export default WeatherDisplay;
