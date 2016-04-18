import axios from 'axios';

const API_KEY = '4089ac307f04079b377369af90893fa4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // return promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
