import React from "react";

export default function WeatherData(props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <ul>
        <li>date</li>
        <li>description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span>icon</span>
          <span className="temp">temp</span> °C | °F
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: humidity%</li>
            <li>Wind: wind km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
