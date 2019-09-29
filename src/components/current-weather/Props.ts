export default interface Props {
  coord: {
    lon: number,
    lat: number
  },
  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }],
  main: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number
  },
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  dt: number,
  timezone: number,
  id: number,
  name: string,
  cod: number,
  base: string,
  visibility: number
}