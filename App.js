import React from 'react';
import Weather from './components/Weather';
import './style.css';

function App () {
  return (
    <div>
      <div className="app-container" />
      <h1>Welcome To Weather App</h1>
      <Weather />
    </div>
  );
}
export default App;
