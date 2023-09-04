import { useState } from "react";
import LandingPage from "./components/LandingPage";
import WeatherPage from "./components/WeatherPage";

function App() {
  const [currentWeather, setCurrentWeather] = useState(undefined);
  const [hourlyForecast, setHourlyForecast] = useState({});
  const [cityName, setCityName] = useState("");

  return (
    <>
      {!currentWeather ? (
        <LandingPage
          setCurrentWeather={setCurrentWeather}
          setHourlyForecast={setHourlyForecast}
          setCityName={setCityName}
        />
      ) : (
        <WeatherPage
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
          hourlyForecast={hourlyForecast}
          setHourlyForecast={setHourlyForecast}
          cityName={cityName}
          setCityName={setCityName}
        />
      )}
    </>
  );
}

export default App;
