import axios from "axios";
import { useEffect, useState } from "react";

const useWeather = (api, key, userSearch, type, userSubmit) => {
  const [weatherData, setWeatherData] = useState("");
  console.log(userSearch);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `${api}/${type}.json?key=${key}${
            userSearch ? `&q=${userSearch}` : ``
          }`
        );

        setWeatherData(data);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchWeather();
  }, [userSubmit]);
  return weatherData;
};

export default useWeather;
