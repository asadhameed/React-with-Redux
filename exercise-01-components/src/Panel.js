import React from "react";

const Panel = (props) => {
  return (
    <div>
      <div className="ui placeholder segment">{props.children}</div>
    </div>
  );
};

export default Panel;
