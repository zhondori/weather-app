import React, { useState, useEffect } from "react";
import Form from "./components/form/form";
import Card from "./components/card/Card";
import { Provider } from "./components/Context";
import Error from "./components/notFound/Error";
import BgOne from "./media/bg1.jfif";
import BgTwo from "./media/bg2.jfif";
import Welcome from "./components/Welcome/WelcomePage";
import "./styles.css";

export default function App() {
  const api_key = "cae9a3541a3cc068eb51ffee7a3b1f90",
    [cityName, setCityName] = useState(null),
    [weather, setWeather] = useState({}),
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`,
    time = new Date(),
    hour = time.getHours(),
    [night, setNight] = useState(false),
    [error, setError] =useState(false);

  const FetchWeather = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setError(false);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    setNight(hour > 17 ? true : false);
    console.log(night);
  }, [])

  return (
    <Provider value={time}>
      <div
        className="App"
        style={{
          backgroundImage: night
            ? `url("${BgTwo}")`
            : `url("${BgOne}")`
        }}
      >
        <Form city={setCityName} handleEvent={FetchWeather} />
        {cityName === null ?  <Welcome /> : weather.main && error === false ? <Card weather={weather} bg={night}/> : <Error />}
      </div>
    </Provider>
  );
}