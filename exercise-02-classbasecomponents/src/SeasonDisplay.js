import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    icon: "sun",
  },
  winter: {
    text: "Burr , it's chill!",
    icon: "snowflake",
  },
};
const getSeason = (lat) => {
  const month = new Date().getMonth();
  return month >= 3 && month <= 8
    ? lat > 0
      ? "summer"
      : "winter"
    : lat > 0
    ? "winter"
    : "summer";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat);
  // const text =
  //   season === "summer" ? "Let's hit the beach!" : "Burr , it's chill!"
  // const icon = season === "summer" ? "sun" : "snowflake";
  const { text, icon } = seasonConfig[season];

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
