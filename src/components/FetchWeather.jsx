import React from "react";

const FetchWeather = ({ URL, setWeather }) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      setWeather(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default FetchWeather;
