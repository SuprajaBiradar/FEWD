import React, {useState} from 'react';
import axios from 'axios';

function Weather () {
  const [city, setCity] = useState ('Hyderabad');
  const [weather, setWeather] = useState (null);
  const [error, setError] = useState ('');

  const API_KEY = '2c99acb0ff88748983c8187fda81f33f';

  const fetchWeather = async () => {
    if (!city.trim ()) {
      setError ('Please enter a city name');
      return;
    }

    try {
      const response = await axios.get (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather (response.data);
      setError ('');
    } catch (err) {
      setError ('City not found. Try another one.');
      setWeather (null);
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={e => setCity (e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{color: 'red'}}>{error}</p>}

      {weather &&
        <div>
          <h2>Weather in {weather.name}</h2>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>}
    </div>
  );
}

export default Weather;
