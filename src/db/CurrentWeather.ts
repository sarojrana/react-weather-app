import CurrentWeather from '../components/current-weather/Props';

const weather: CurrentWeather = {
  "coord": {
      "lon": 85.33,
      "lat": 27.58
  },
  "weather": [
      {
          "id": 211,
          "main": "Thunderstorm",
          "description": "thunderstorm",
          "icon": "11n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 22,
      "pressure": 1011,
      "humidity": 100,
      "temp_min": 22,
      "temp_max": 22
  },
  "visibility": 8000,
  "wind": {
      "speed": 1.5,
      "deg": 30
  },
  "clouds": {
      "all": 75
  },
  "dt": 1567950068,
  "sys": {
      "type": 1,
      "id": 9201,
      "message": 0.0091,
      "country": "NP",
      "sunrise": 1567900839,
      "sunset": 1567945974
  },
  "timezone": 20700,
  "id": 1283154,
  "name": "Lalitpur",
  "cod": 200
}

export default weather;