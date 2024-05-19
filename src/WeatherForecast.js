import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastReturn from "./WeatherForecastReturn";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  function changeData(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function runApi() {
    let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(changeData);
  }

  if (ready) {
    return (
      <WeatherForecastReturn dailyData={forecastData} coords={props.coords} />
    );
  } else {
    runApi();
  }
}
