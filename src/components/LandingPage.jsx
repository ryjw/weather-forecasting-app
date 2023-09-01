import { useEffect, useState } from "react";
import Picker from "./Picker";

export default function LandingPage({ setWeather }) {
  const [season, setSeason] = useState("spring");

  useEffect(() => {
    let seas;
    const month = new Date().getMonth();
    switch (month) {
      case 5 || 6 || 7:
        seas = "summer";
        break;
      case 8 || 9 || 10:
        seas = "autumn";
        break;
      case 11 || 0 || 1:
        seas = "winter";
        break;
      case 2 || 3 || 4:
        seas = "spring";
        break;
    }
    setSeason(seas);
  }, []);

  return (
    <div className={`landing-container ${season}`}>
      <h1>Weather Forecast</h1>
      <h2>Please enter your city</h2>
      <Picker setWeather={setWeather} />
    </div>
  );
}
