import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  static contextType = LanguageContext;
  render() {
    // const text = this.context === "english" ? "Submit" : "voorleggen";
    //return <button className="ui button primary">{text}</button>;
    console.log(LanguageContext);
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "vorrleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
