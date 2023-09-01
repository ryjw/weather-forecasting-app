import { useState } from "react";
import LandingPage from "./components/LandingPage";
import WeatherPage from "./components/WeatherPage";

function App() {
  const [weather, setWeather] = useState(undefined);
  const [cityName, setCityName] = useState("");

  return (
    <>
      {!weather ? (
        <LandingPage setWeather={setWeather} setCityName={setCityName} />
      ) : (
        <WeatherPage weather={weather} />
      )}
    </>
  );
}

export default App;
