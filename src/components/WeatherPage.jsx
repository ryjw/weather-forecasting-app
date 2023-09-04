import { useEffect, useState } from "react";
import DisplayTemp from "./DisplayTemp";

export default function WeatherPage({
  hourlyForecast,
  setHourlyForecast,
  currentWeather,
  setCurrentWeather,
  cityName,
  setCityName,
}) {
  const [tempUnits, setTempUnits] = useState("C");
  const [descriptionCapitalised, setDescriptionCapitalised] = useState("");
  // capitalises first word of the description for aesthetics
  useEffect(() => {
    const weather = currentWeather.weather[0].description;
    const amended = weather.charAt(0).toUpperCase() + weather.slice(1);
    setDescriptionCapitalised(amended);
  }, [currentWeather]);
  return (
    <div className="weather-container">
      <h1>{cityName}</h1>
      <h2>{descriptionCapitalised}</h2>
      <h2>
        <DisplayTemp tempUnits={tempUnits} currentWeather={currentWeather} />°
        {tempUnits}
      </h2>
    </div>
  );
}
