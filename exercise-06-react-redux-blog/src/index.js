import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./component/App";
import Reducer from "./reducer";
import thunk from "redux-thunk";

ReactDOM.render(
  <Provider store={createStore(Reducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
