import React, { useState } from "react";
import WeatherData from "./WeatherData";
import "./ReactWeatherApp.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function ReactWeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });

  function getData(response) {
    setData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      ready: true,
      currentDate: new Date(response.data.dt * 1000),
      coords: response.data.coord,
    });
  }

  function updateSearchValue(event) {
    setCity(event.target.value);
  }
  function submitCity(event) {
    event.preventDefault();
    runAxios();
  }

  function runAxios() {
    let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
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
        <WeatherForecast coords={data.coords} tzOffset={data.tzOffset} />
      </div>
    );
  } else {
    runAxios();
    return `loading...`;
  }
}
