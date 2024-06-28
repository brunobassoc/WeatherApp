import React from 'react';
import '../styles/WeatherInfo.css';

const WeatherInfo = ({ data }) => {
  const iconUrl = data.weather ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : '';

  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="description">
          {data.weather ? (
            <>
              <img src={iconUrl} alt="weather icon" />
              <p>{data.weather[0].main}</p>
            </>
          ) : null}
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
          <p>Thermal Sensation</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KM/H</p> : null}
          <p>Wind{'\n'}Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
