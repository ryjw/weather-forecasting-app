import { useState } from "react";
import { API, APIKey } from "../API";

export default function Picker({ setWeather, setCityName }) {
  const [cityReturn, setCityReturn] = useState([]);
  const [citySearchName, setCitySearchName] = useState("");

  async function citySearch(e) {
    e.preventDefault();
    const res = await fetch(
      `${API}/geo/1.0/direct?q=${citySearchName}&limit=5&appid=${APIKey}`
    );
    const info = await res.json();
    setCityReturn(info);
  }

  async function handleCitySelected(e) {
    const index = e.target.value;
    const lat = cityReturn[index].lat;
    const lon = cityReturn[index].lon;
    const res = await fetch(
      `${API}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
    );
    const info = await res.json();
    setWeather(info);
    setCityName(
      `${cityReturn[index].name}, ${cityReturn[index].state}, ${cityReturn[index].country}`
    );
  }

  return (
    <>
      <form onSubmit={citySearch}>
        <input
          type="text"
          onChange={(e) => setCitySearchName(e.target.value)}
        />
      </form>
      {cityReturn.length > 0 && (
        <select onChange={handleCitySelected} name="pick-city" id="pick-city">
          <option value="">Please select your city</option>
          {cityReturn.map((city, index) => {
            return (
              <option value={index} key={index}>
                {city.name}, {city.state}, {city.country}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}
