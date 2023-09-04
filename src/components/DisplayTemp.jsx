import { useEffect, useState } from "react";

export default function DisplayTemp({ tempUnits, temperature }) {
  const [convertedTemperature, setConvertedTemperature] = useState(0);
  useEffect(() => {
    let converted;
    if (tempUnits === "C") {
      converted = temperature - 273.15;
    } else if (tempUnits === "F") {
      converted = (temperature - 273.15) * 1.8 + 32;
    }
    converted = converted.toFixed(0);
    setConvertedTemperature(converted);
  }, [tempUnits]);

  return convertedTemperature;
}
