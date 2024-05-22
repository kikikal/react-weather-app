import React from "react";
import "./WeatherData.css";
import DateSet from "./DateSet";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateSet timezone={props.timezone} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${props.data.iconUrl}@2x.png`}
              alt={props.data.description}
            />
          </span>
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind.speed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
