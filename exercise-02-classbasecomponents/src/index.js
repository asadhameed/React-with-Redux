import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("When the componentDidUpdate");
  }
  /******************
   * Suppose we want to add boarder around element.style
   * In this case we will add the following div around all 3 return
   *  <div className="boarder red">
   * which is not an good approach
   *  first we will make some helper function
   */
  renderContent = () => {
    if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />;
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error : {this.state.errorMessage}</div>;
    return <Spinner message="Please accept location request" />;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
