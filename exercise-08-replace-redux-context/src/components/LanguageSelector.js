import React, { Component } from "react";
import Context from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = Context;

  render() {
    console.log(this.context);
    return (
      <div>
        Select Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
