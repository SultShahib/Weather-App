import axios from "axios";
import { useEffect, useState } from "react";

const useWeather = (api, key, userSearch, type) => {
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `${api}/${type}.json?key=${key}?q=${userSearch}`
        );

        setWeatherData(data);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchWeather();
  }, []);
  return weatherData;
};

export default useWeather;
