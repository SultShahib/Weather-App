import { useState, useRef } from "react";
import { API, KEY } from "../../App";
import "./header.css";
import MediaCard from "../Card/Card";
import useWeather from "../../Custom-Hooks/useWeather";

const Realtime = () => {
  const [getReal, setGetReal] = useState(false);
  const getRef = useRef();
  const [userSearch, setUserSearch] = useState("");
  const fetchWeatherData = useWeather(API, KEY, userSearch, "current");
  console.log(fetchWeatherData);
  console.log(userSearch);

  // const getRealTimeWeather = async (api, key) => {
  //   try {
  //     const { data } = await axios.get(
  //       `${api}/current.json?key=${key}&q=${userSearch}`
  //     );

  //     console.log(data);
  //     setWeatherData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {}, [getReal, userSearch]);

  // const data = useWeather(API, KEY, userSearch, "current");

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
        <form onSubmit={getCities} className="search-container">
          <label className="label_cities" htmlFor="user-input">
            Search for cities weather:
          </label>
          <input id="user-input" ref={getRef} />
          <button
          // onClick={}
          >
            Search weather
          </button>
        </form>
      </div>
      <div className="card-container">
        {fetchWeatherData && (
          <MediaCard
            condition={fetchWeatherData.current.condition.text}
            tempInC={fetchWeatherData.current.temp_c}
            tempInF={fetchWeatherData.current.temp_f}
            humidity={fetchWeatherData.current.humidity}
            wind={fetchWeatherData.current.wind_kph}
            setGetReal={setGetReal}
          />
        )}
      </div>
    </>
  );
};

export default Realtime;
