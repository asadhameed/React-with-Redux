import React from "react";
//import "./Spinner.css";
const Spinner = (props) => {
  return (
    // <div className="spinner ui segment ">
    <div className="ui active dimmer">
      <div className="ui  big  text loader"> {props.message}</div>
    </div>
    // </div>
  );
};
Spinner.defaultProps = {
  // if we forget give props value then this default value will show on screen
  message: "Loading......",
};
export default Spinner;
