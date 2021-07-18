import React, { useContext } from "react";
import { Context } from "../Context";
import "./Card.css";

function Card({ weather, bg }) {
  let URL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  const date = useContext(Context);
  console.log(date);
  return (
    <div className="main">
      <div className="main-card"
      style={{
        color: bg ? "#f1f1f1" : "#3a3a3a"
      }}
      >
        <div className="cardHeader">
          <img
            src={URL}
            alt={weather.weather[0].description}
          />
          <h1>
            {weather.main.temp.toFixed(1)}
            <sup>&deg;</sup>C
          </h1>
        </div>
        <div className="cardBody">
          <h2>
            {weather.name}
            {weather.sys.country ? ", " + weather.sys.country : null}
          </h2>
          <p className="desc">{weather.weather[0].description}</p>
          <p>
            Time {date.getHours()}:{date.getMinutes()}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
