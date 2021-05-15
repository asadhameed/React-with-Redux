import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  state = { language: "english" };
  onLanguageChang = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChang("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChang("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider
            value={this.state.language === "english" ? "red" : "primary"}
          >
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
