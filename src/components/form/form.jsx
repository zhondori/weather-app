import React from "react";
import "./form.css";

const Form = ({ city, handleEvent }) => {
  return (
    <div className="form">
      <input
        onChange={(e) => city(e.target.value)}
        className="city-input"
        placeholder="Please, enter the city name..."
      />
      <button onClick={() => handleEvent()} className="button">
        <span>Search</span>
      </button>
    </div>
  );
};
export default Form;