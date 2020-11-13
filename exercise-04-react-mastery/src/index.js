import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
// import SearchBar from "./SearchBar";
// function getTime() {
//   return new Date().toLocaleDateString();
// }
// const App = () => {
//   const buttonText = { text: "click me" }; // this will give a error if only call {buttonText} in jsx
//   const style = { backgroundColor: "red", color: "white" }; // this will working because it call in the properties field
//   const onSearchSubmit = (value) => {
//     console.log(value);
//   };
//   return (
//     <div>
//       <label className="labelclass" htmlFor="name">
//         Enter the name
//       </label>
//       <input id="name" type="text" />
//       <button style={style}>{buttonText.text}</button>
//       {getTime()}
//       <br />
//       <SearchBar onSearch={onSearchSubmit}></SearchBar>
//     </div>
//   );
// };

ReactDom.render(<App />, document.querySelector("#root"));
