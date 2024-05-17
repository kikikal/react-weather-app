import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [metric, setMetric] = useState(true);

  function changeToF(event) {
    event.preventDefault();
    setMetric(false);
  }

  function changeToC(event) {
    event.preventDefault();
    setMetric(true);
  }

  if (metric) {
    return (
      <span className="Temperature">
        <span className="temp">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={changeToF}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="temp">{Math.round(props.celsius * (9 / 5) + 32)}</span>{" "}
        <span className="unit">
          <a href="/" onClick={changeToC}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
