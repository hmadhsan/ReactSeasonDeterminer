import "./SeasonDisplay.css";
import React from "react";

//determining season
const seasonConfig = {
  summer: {
    text: "Let's hit the beach !",
    iconName: "sun"
  },
  winter: {
    text: "Burrr its so cold here !!",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"; //it is saying if we are in summer months then show summer else winter
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

//functional component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-leftTop massive ${iconName} icon`} />
      <i className={`icon-rightTop massive ${iconName} icon`} />
      <h2>
        {" "}
       Time: {props.time} <br /> {text}{" "}
      </h2>
      <i className={`icon-leftBottom massive ${iconName} icon`} />
      <i className={`icon-rightBottom massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
