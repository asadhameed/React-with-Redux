import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import HeaderMenu from "./HeaderMenu";
const App2 = () => {
  return (
    <div className="ui container">
      <div className="ui segments">
        <div className="ui teal inverted segment">
          <h4>Currency Info</h4>
          <BrowserRouter>
            <HeaderMenu />
            <MainRouter />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App2;
