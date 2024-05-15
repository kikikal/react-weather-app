import React, { useState } from "react";
import WeatherData from "./WeatherData";
import "./ReactWeatherApp.css";
import axios from "axios";

export default function ReactWeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });

  function getData(response) {
    setData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      ready: true,
      currentDate: new Date(response.data.time * 1000),
    });
    console.log(data.currentDate);
  }

  function updateSearchValue(event) {
    setCity(event.target.value);
  }
  function submitCity(event) {
    event.preventDefault();
    runAxios();
  }

  function runAxios() {
    let apiKey = `d37e0bate3co638094f17bb45fdb3101`;
    let axiosUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(axiosUrl).then(getData);
  }

  if (data.ready) {
    return (
      <div className="ReactWeatherApp">
        <form onSubmit={submitCity}>
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
        <WeatherData data={data} />
      </div>
    );
  } else {
    runAxios();
    return `loading...`;
  }
}
