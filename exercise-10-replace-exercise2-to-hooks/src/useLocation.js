import { useState, useEffect } from "react";
export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, SetErrorMessage] = useState("");
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => SetErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
};
