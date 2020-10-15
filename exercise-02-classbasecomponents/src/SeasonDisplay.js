import React from "react";
const getSeason = (lat) => {
  const month = new Date().getMonth();
  return month >= 3 && month <= 8
    ? lat > 0
      ? "summer"
      : "Winter"
    : lat > 0
    ? "winter"
    : "summer";
};

const SeasonDisplay = (props) => {
  return getSeason(props.lat) === "summer" ? (
    <div>
      <h1>Let's hit the beach!</h1>
    </div>
  ) : (
    <div>
      <h1>Burr , it's chill!</h1>
    </div>
  );
};

export default SeasonDisplay;
