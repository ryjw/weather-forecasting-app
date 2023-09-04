import { useEffect, useState } from "react";
import DisplayTemp from "./DisplayTemp";

export default function ThreeHourForecast({
  hourlyForecast,
  timezone,
  tempUnits,
}) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let localTime = hourlyForecast.dt + timezone;
    // convert the UNIX timestamp to a JS friendly one by multiplying by 1000
    localTime = localTime * 1000;
    localTime = new Date(localTime);
    localTime = localTime.getUTCHours();
    setTime(localTime);
  }, [hourlyForecast]);
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
    </div>
  );
}
