import React from 'react';

import Props from './Props';
import CONFIG from '../../config';
import './CurrentWeather.css';

const CurrentWeather: React.FC<Props> = (props) => {
  return (
    <div id="weather__today">
      <div className="location">
        <h2>Weather in {props.name}, {props.sys.country}</h2>
      </div>
      <div className="temperature">
        <div className="icon">
          <img src={CONFIG.openWeatherIconPath + props.weather[0].icon + '@2x.png'}
          alt={props.weather[0].description} />
        </div>
        <div className="temp">
          {props.main.temp} &#8451;
        </div>
      </div>
      <div className="description">
        <p>{props.weather[0].description}</p>
        <p>
          {new Intl.DateTimeFormat('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit' 
          }).format(props.dt * 1000)}
        </p>
      </div>
      <div className="details">
        <div className="table">
            <div className="row">
              <div className="cell">Wind</div>
              <div className="cell">{props.wind.speed} m/s</div>
            </div>
            <div className="row">
              <div className="cell">Cloudiness</div>
              <div className="cell">{props.clouds.all}</div>
            </div>
            <div className="row">
              <div className="cell">Pressure</div>
              <div className="cell">{props.main.pressure} hPa</div>
            </div>
            <div className="row">
              <div className="cell">Humidity</div>
              <div className="cell">{props.main.humidity} %</div>
            </div>
            <div className="row">
              <div className="cell">Sunrise</div>
              <div className="cell">
                {new Intl.DateTimeFormat('en-US', { 
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit' 
                }).format(props.sys.sunrise * 1000)}
              </div>
            </div>
            <div className="row">
              <div className="cell">Sunset</div>
              <div className="cell">
                {new Intl.DateTimeFormat('en-US', { 
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit' 
                }).format(props.sys.sunset * 1000)}
              </div>
            </div>
            <div className="row">
              <div className="cell">Geo coords</div>
              <div className="cell">[{props.coord.lat}, {props.coord.lon}]</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;