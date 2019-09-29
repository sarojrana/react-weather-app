import React from 'react';

import './CityWeather.css';
import HTTP from '../../services/http';
import CurrentWeather from '../../components/current-weather/CurrentWeather';
import CurrentWeatherData from '../../db/CurrentWeather';
import CurrentWeatherDataType from '../../components/current-weather/Props';

type State = {
  cityId: number,
  cityName: string,
  currentWeather: CurrentWeatherDataType
}

export default class CityWeather extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      cityName: this.props.match.params.city,
      cityId: this.props.match.params.cityName,
      currentWeather: CurrentWeatherData
    }
  }

  componentDidMount() {
    this.getCurrentWeather(this.state.cityName);
  }

  getCurrentWeather(city: string) {
    HTTP.getCurrentWeather(city).then(data => {
      this.setState({
        currentWeather: data
      })
    });
  }

  render() {
    return (
      <div id="city__weather">
        <div className="city__title">
          <h2>Weather Forecast, {this.state.cityName}</h2>
        </div>
        <div className="weather__container">
          <div className="weather__now">
            <CurrentWeather {...this.state.currentWeather} />
          </div>
          <div className="weather__forecast">
            <div className="weather__forecast__details">
              <div className="icon">
                <img src="http://openweathermap.org/img/wn/10d.png" alt="Img" />
              </div>
              <div className="details">
                <div>32 C</div>
                <div>1.4 m/s</div>
                <div>1000 hPa</div>
              </div>
            </div>
            <div className="weather__forecast__details">
              <div className="icon">
                <img src="http://openweathermap.org/img/wn/10d.png" alt="Img" />
              </div>
              <div className="details">
                <div>32 C</div>
                <div>1.4 m/s</div>
                <div>1000 hPa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}