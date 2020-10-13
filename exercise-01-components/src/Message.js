import React from "react";

const Message = (props) => {
  return (
    <div className="ui message">
      <div className="header">{props.service}</div>
      <p>{props.details}</p>
    </div>
  );
};

export default Message;
