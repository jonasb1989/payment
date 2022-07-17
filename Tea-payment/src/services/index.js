import axios from "axios";

export async function getWeatherData(lat, lon) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=dd4c5d66f3079220949fdd9c7bf13c91`
  );

  return response;
}
