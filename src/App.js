import React, { useState } from 'react';
import SearchBox from './Component/SearchBox';
import WeatherDisplay from './Component/WeatherDisplay';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric');  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError('City not found!');
        setWeather(null);
      }
    } catch (err) {
      setError('Error fetching data.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🌦 Simple Weather App</h1>
      <SearchBox city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <div className="toggle-unit">
        <button onClick={() => setUnit('metric')}>Celsius</button>
        <button onClick={() => setUnit('imperial')}>Fahrenheit</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherDisplay weather={weather} unit={unit} />}
    </div>
  );
}

export default App;
