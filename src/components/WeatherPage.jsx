import { useEffect, useState } from "react";
import DisplayTemp from "./DisplayTemp";
import ThreeHourForecast from "./ThreeHourForecast";

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
  console.log(hourlyForecast);
  console.log(currentWeather);
  return (
    <div className="weather-container">
      <h1>{cityName}</h1>
      <h2>{descriptionCapitalised}</h2>
      <h2>
        <DisplayTemp
          tempUnits={tempUnits}
          temperature={currentWeather.main.temp}
        />
        °{tempUnits}
      </h2>
      <h4>Three hour forecast</h4>
      <div className="forecast-container">
        <ThreeHourForecast
          hourlyForecast={hourlyForecast.list[0]}
          timezone={currentWeather.timezone}
          tempUnits={tempUnits}
        />
        <ThreeHourForecast
          hourlyForecast={hourlyForecast.list[1]}
          timezone={currentWeather.timezone}
          tempUnits={tempUnits}
        />
        <ThreeHourForecast
          hourlyForecast={hourlyForecast.list[2]}
          timezone={currentWeather.timezone}
          tempUnits={tempUnits}
        />
        <ThreeHourForecast
          hourlyForecast={hourlyForecast.list[3]}
          timezone={currentWeather.timezone}
          tempUnits={tempUnits}
        />
      </div>
    </div>
  );
}
