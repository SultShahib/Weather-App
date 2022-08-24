import { useState, useRef } from "react";
import { API, KEY } from "../../App";
import axios from "axios";
import { useEffect } from "react";
import "./header.css";
import MediaCard from "../Card/Card";
import BasicTextFields from "../Input-Field/Input";

const Realtime = () => {
  const [getReal, setGetReal] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const getRef = useRef();
  const [userSearch, setUserSearch] = useState("");

  const getRealTimeWeather = async (api, key) => {
    try {
      const { data } = await axios.get(
        `${api}/current.json?key=${key}&q=${userSearch}`
      );

      console.log(data);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRealTimeWeather(API, KEY);
  }, [getReal, userSearch]);

  const getCities = (e) => {
    e.preventDefault();

    if (!getRef.current.value.length > 1) {
      throw new Error("Please type a valid input");
    }

    setUserSearch(getRef.current.value);
  };

  return (
    <>
      <div className="container">
        {/* <BasicTextFields input={getInput} /> */}
        <form onSubmit={getCities}>
          <label htmlFor="user-input">Search for cities weather</label>
          <input id="user-input" ref={getRef} />
          <button>Search weather</button>
        </form>
        {weatherData && (
          <MediaCard
            condition={weatherData.current.condition.text}
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
