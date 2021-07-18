import React from "react";
import "./welcomeStyle.css";
import WeatherImage from "../../media/weather.png";

function Welcome() {
  return (
    <div className="welcome">
      <img src={WeatherImage} alt="" />
      <h2>Welcome to Weather Application</h2>
      <h4>
        Author:{" "}
        <a
          href="https://github.com/Alisher-Usmonov"
          target="_blank"
          rel="noreferrer"
        >
          Alisher Usmonov
        </a>
      </h4>
    </div>
  );
}
export default Welcome;
