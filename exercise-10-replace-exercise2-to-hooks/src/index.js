import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";
import useLocation from "./useLocation";

/** The following code can put another file and call it */
const App = () => {
  // const [lat, setLat] = useState(null);
  // const [errorMessage, SetErrorMessage] = useState("");
  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => setLat(position.coords.latitude),
  //     (err) => SetErrorMessage(err.message)
  //   );
  // }, []);

  const [lat, errorMessage] = useLocation();

  const renderContent = () => {
    if (lat && !errorMessage) return <SeasonDisplay lat={lat} />;
    if (!lat && errorMessage) return <div>Error : {errorMessage}</div>;
    return <Spinner message="Please accept location request" />;
  };

  return <div>{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
