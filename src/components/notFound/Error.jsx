import React from "react";
import ErrorImage from "../../media/error.png";
import "./error.css";

function Error() {
  return (
    <div className="main-err">
      <div className="err-sect">
        <img
          src={ErrorImage}
          alt="err"
        />
        <div className="err-text">
          <h2>Sorry, Weather data for this city was not found</h2>
          <h3>
            Enter the city name correctly, otherwise you will not get the
            required information!
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Error;