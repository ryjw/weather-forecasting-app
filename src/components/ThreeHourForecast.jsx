import { useEffect, useState } from "react";
import DisplayTemp from "./DisplayTemp";

export default function ThreeHourForecast({
  hourlyForecast,
  timezone,
  tempUnits,
  dayNight,
}) {
  const [time, setTime] = useState(0);
  const [iconCode, setIconCode] = useState("");
  // displays the time
  useEffect(() => {
    let localTime = hourlyForecast.dt + timezone;
    // convert the UNIX timestamp to a JS friendly one by multiplying by 1000
    localTime = localTime * 1000;
    localTime = new Date(localTime);
    localTime = localTime.getUTCHours();
    setTime(localTime);
  }, [hourlyForecast]);
  // sets the appropriate icon code according to day/night and conditions
  useEffect(() => {
    let day = true;
    if (
      hourlyForecast.dt < dayNight.sunrise ||
      hourlyForecast.dt > dayNight.sunset
    ) {
      day = false;
    }
    switch (true) {
      case hourlyForecast.weather[0].id >= 200 &&
        hourlyForecast.weather[0].id <= 232:
        setIconCode("11");
        break;
      case hourlyForecast.weather[0].id >= 300 &&
        hourlyForecast.weather[0].id <= 321:
        setIconCode("09");
        break;
      case hourlyForecast.weather[0].id >= 500 &&
        hourlyForecast.weather[0].id <= 504 &&
        day:
        setIconCode("10");
        break;
      case hourlyForecast.weather[0].id >= 500 &&
        hourlyForecast.weather[0].id <= 504 &&
        !day:
        setIconCode("10n");
        break;
      case hourlyForecast.weather[0].id === 511:
        setIconCode("13");
        break;
      case hourlyForecast.weather[0].id >= 520 &&
        hourlyForecast.weather[0].id <= 531:
        setIconCode("09");
        break;
      case hourlyForecast.weather[0].id >= 600 &&
        hourlyForecast.weather[0].id <= 622:
        setIconCode("13");
        break;
      case hourlyForecast.weather[0].id >= 701 &&
        hourlyForecast.weather[0].id <= 781:
        setIconCode("50");
        break;
      case hourlyForecast.weather[0].id === 800 && day:
        setIconCode("01d");
        break;
      case hourlyForecast.weather[0].id === 800 && !day:
        setIconCode("01n");
        break;
      case hourlyForecast.weather[0].id === 801 && day:
        setIconCode("02d");
        break;
      case hourlyForecast.weather[0].id === 801 && !day:
        setIconCode("02n");
        break;
      case hourlyForecast.weather[0].id === 802:
        setIconCode("03");
        break;
      case hourlyForecast.weather[0].id === 803 ||
        hourlyForecast.weather[0].id === 804:
        setIconCode("04");
    }
  }, [dayNight]);

  return (
    <div className="three-hour-forecast">
      <div>{time}:00</div>
      <div>
        <DisplayTemp
          temperature={hourlyForecast.main.temp}
          tempUnits={tempUnits}
        />
        °{tempUnits}
      </div>
      <div>{hourlyForecast.weather[0].main}</div>
      <img src={`/img/${iconCode}.png`} alt="weather icon" />
    </div>
  );
}
