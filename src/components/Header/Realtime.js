import { useState } from "react";
import { API, KEY } from "../../App";
import axios from "axios";
import { useEffect } from "react";
import "./header.css";
import MediaCard from "../Card/Card";

const Realtime = () => {
  const [getReal, setGetReal] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  const getRealTimeWeather = async (api, key) => {
    try {
      const { data } = await axios.get(
        `${api}/current.json?key=${key}&q=51.52,-0.11`
      );
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRealTimeWeather(API, KEY);
  }, [getReal]);

  console.log(weatherData);

  return (
    <>
      <div className="container">
        {weatherData && (
          <MediaCard
            state={weatherData.current.text}
            tempInC={weatherData.current.temp_c}
            tempInF={weatherData.current.temp_f}
            humidity={weatherData.current.humidity}
            wind={weatherData.current.wind_kph}
            setGetReal={setGetReal}
          />
        )}
      </div>
    </>
  );
};

export default Realtime;
