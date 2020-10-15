import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: "" };
  // }

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
  render() {
    if (this.state.lat && !this.state.errorMessage)
      // return <div>User Latitude :{this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error : {this.state.errorMessage}</div>;
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
