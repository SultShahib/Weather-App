import MediaCard from "../Card/Card";
import { useState } from "react";
import { API, KEY } from "../../App";
import axios from "axios";
import { useEffect } from "react";
import "./header.css";

const Realtime = () => {
  const [getReal, setGetReal] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  const getRealTimeWeather = async (api, key) => {
    try {
      const data = await axios.get(
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

  return (
    <>
      <div className="container">
        <MediaCard get={setGetReal} />
      </div>
    </>
  );
};

export default Realtime;
