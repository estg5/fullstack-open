import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_KEY;
function getCapitalWeather(capital) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`;
  return axios.get(url).then((resp) => resp.data);
}

export default { getCapitalWeather };
