import React from 'react';

import './Home.css';
import Weather from '../../components/current-weather/Props';
import CurrentWeatherData from '../../db/CurrentWeather';
import CurrentWeather from '../../components/current-weather/CurrentWeather';
import HTTP from '../../services/http';
import Province from '../../components/province/Province';
import provinces from '../../constants/cities'

type State = {
  currentWeather: Weather,
  provinces: any
}

export default class Home extends React.Component<{}, State> {

  constructor(props: any) {
    super(props); 
    this.state = {
      currentWeather: CurrentWeatherData,
      provinces: provinces
    }
  }

  componentDidMount() {
    this.getCurrentWeather('Kathmandu');
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
      <div className="home">
        <div className="title">
          <h1>Weather Forecast</h1>
        </div>
        <div className="weather">
          <div className="weather__today">
            <CurrentWeather {...this.state.currentWeather} />
          </div>
          <div className="weather__forecast">
            {this.state.provinces.map((province: any, index: number) => {
              return <Province key={index} {...province} />
            })}
          </div>
        </div>
      </div>
    )
  }
}