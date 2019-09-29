import CONFIG from '../config';

export default class HTTP {
  static getCurrentWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},np&units=metric` +
                `&appid=${CONFIG.openWeatherApiKey}`;
    return fetch(url).then(response => response.json());
  }
}