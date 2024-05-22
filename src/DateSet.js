import React from "react";
import moment from "moment-timezone";

export default function DateSet(props) {

  return (
    <div>
      {moment.tz(props.timezone).format("dddd HH:MM")}
    </div>
  );
}
