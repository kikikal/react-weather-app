import React, { useState } from "react";
import WeatherData from "./WeatherData";
import "./ReactWeatherApp.css";

export default function ReactWeatherApp() {
  const [city, setCity] = useState("Melbourne");
  function updateSearchValue(event) {
    setCity(event.target.value);
  }
  function searchForCity(event) {
    event.preventDefault();
  }

  return (
    <div className="ReactWeatherApp">
      <form onSubmit={searchForCity}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateSearchValue}
          className="col-8 me-3 border rounded p-2"
        />
        <input
          type="submit"
          value="Search"
          className="col-3 bg-primary border-1 border-primary text-light rounded p-2"
        />
      </form>

      <WeatherData city={city} />
    </div>
  );
}
