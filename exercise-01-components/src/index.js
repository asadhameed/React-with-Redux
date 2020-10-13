import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            asad
          </a>
          <div className="metadata">
            <span className="date">Today at 2:00 pm</span>
          </div>
          <div className="text">so nice post</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Hameed
          </a>
          <div className="metadata">
            <span className="date">Today at 3:00 pm</span>
          </div>
          <div className="text">i like your post</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            afridi
          </a>
          <div className="metadata">
            <span className="date">Today at 4:00 pm</span>
          </div>
          <div className="text">nice work man</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
