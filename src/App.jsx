import { useState } from "react";
import LandingPage from "./components/LandingPage";
import WeatherPage from "./components/WeatherPage";

function App() {
  const [weather, setWeather] = useState(undefined);

  return (
    <>
      {!weather ? (
        <LandingPage weather={weather} setWeather={setWeather} />
      ) : (
        <WeatherPage weather={weather} setWeather={setWeather} />
      )}
    </>
  );
}

export default App;
