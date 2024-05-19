import React from "react";
import "./WeatherForecastReturn.css";

export default function WeatherForecastReturn(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <span className="WeatherForecastReturn row">
      {props.dailyData.map(function (day, index) {
        if (index < 6) {
          return (
            <span className="col" key={index}>
              <div className="day">{days[index]}</div>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />{" "}
              <div className="temps">
                <span className="max">{Math.round(day.temp.max)}°</span>{" "}
                <span className="min text-secondary">
                  {Math.round(day.temp.min)}°
                </span>
              </div>
            </span>
          );
        } else {
          return null;
        }
      })}
    </span>
  );
}
