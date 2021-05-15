import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Fields extends Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui fields">
        <label>{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Fields;
