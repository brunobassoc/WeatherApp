import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import './styles/App.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ec7aa682f09faf0415bd3535d4bb0ff4`;

  const searchLocation = async () => {
    if (location.trim() === '') {
      setError('Please enter the name of a city.');
      setData({});
      return;
    }

    try {
      const response = await axios.get(url);
      setData(response.data);
      setError('');
    } catch (err) {
      setError('City not found.\nPlease try again.');
      setData({});
    }

    setLocation('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
        handleKeyPress={handleKeyPress}
        error={error} // Passa a mensagem de erro como prop
      />
      {data.name && <WeatherInfo data={data} />}
    </div>
  );
}

export default App;
