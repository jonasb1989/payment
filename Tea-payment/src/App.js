import React, { useState, useEffect } from "react";

//API call
import { getWeatherData } from "./services";

//components
import CityButton from "./components/CityButton";
import WeatherCard from "./components/WeatherCard";

//styles
import * as Styles from "./styles";

const cities = [
  "Porto Alegre",
  "London",
  "Dublin",
  "São Paulo",
  "Minneapolis",
  "Tokyo",
];
const latitude = [30.03, 51.5, 53.34, 23.55, 44.97, 35.67];
const longitude = [-51.2, 0.12, 6.26, -46.63, -93.26, 139.65];

const cities2 = [
  { name: "Porto Alegre", lat: 30.03, lon: -51.2 },
  { name: "London", lat: 51.5, lon: 0.12 },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetWeather() {
    setIsLoading(true);

    try {
      const response = await getWeatherData(selectedCity.lat, selectedCity.lon);
      setWeatherData(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setSelectedCity(cities2[0]);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      handleGetWeather();
    }
  }, [selectedCity]);

  return (
    <Styles.AppWrapper>
      <Styles.CityButtonsWrapper>
        {cities2.map((city) => (
          <CityButton
            city={city}
            key={city.name}
            isSelected={city.name === selectedCity?.name}
            onClick={setSelectedCity}
          />
        ))}
      </Styles.CityButtonsWrapper>
      <Styles.CityWeatherWrapper>
        {weatherData?.daily.map((day, index) => (
          <>
            {index <= 4 && (
              <WeatherCard day={day} key={day.dt} isLoading={isLoading} />
            )}
          </>
        ))}
      </Styles.CityWeatherWrapper>
    </Styles.AppWrapper>
  );
}

export default App;
