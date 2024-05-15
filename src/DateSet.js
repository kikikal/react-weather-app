import React from "react";

export default function DateSet(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[props.currentDate.getDay()];
  let minute = props.currentDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let hour = props.currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  return (
    <div>
      {weekday} {hour}:{minute}
    </div>
  );
}
