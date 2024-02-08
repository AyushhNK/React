import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = '28a10b750cb699fcccf93c656372db0c';


const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Error fetching weather data');
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Weather App</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button onClick={getWeatherData} className="button">
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="weatherContainer">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className="weatherDescription">{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Weather;

