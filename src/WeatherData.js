import React, { useState } from "react";
import "./WeatherData.css";
import axios from "axios";

export default function WeatherData(props) {
  const [data, setData] = useState({ ready: false });

  function getData(response) {
    console.log(response);
    setData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      ready: true,
    });
  }

  if (data.ready === true) {
    return (
      <div className="WeatherData">
        <h1>{data.city}</h1>
        <ul>
          <li>date</li>
          <li>{data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span>
              <img src={data.iconUrl} alt={data.description} />
            </span>
            <span className="temp">{data.temperature}</span>{" "}
            <span className="unit">°C | °F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {data.humidity}%</li>
              <li>Wind: {data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `d37e0bate3co638094f17bb45fdb3101`;
    let axiosUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(axiosUrl).then(getData);
    return `loading...`;
  }
}
