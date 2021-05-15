// import React, { Component } from "react";
// import LanguageContext from "../contexts/LanguageContext";

// class Fields extends Component {
//   static contextType = LanguageContext;
//   render() {
//     const text = this.context.language === "english" ? "Name" : "Naam";
//     return (
//       <div className="ui fields">
//         <label>{text}</label>
//         <input type="text" />
//       </div>
//     );
//   }
// }

// export default Fields;

/*** Functional component */

import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Fields = () => {
  const { language } = useContext(LanguageContext);
  const text = language === "english" ? "Name" : "Naam";

  return (
    <div className="ui fields">
      <label>{text}</label>
      <input type="text" />
    </div>
  );
};

export default Fields;
