import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({city: "",address: "",hours: "",});
  const [isLoading, setIsLoading] = useState(true)
  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
    props.history.push("/locations")
    )
  }

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        city: location.city,
        address: location.address,
        hours: location.hours,
      });
      setIsLoading(false)
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span style={{ color: "darkslategrey" }}>{location.city}</span>
        </h3>
        <p>Address: {location.address}</p>
        <p>Hours: {location.hours}</p>
      </div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>Close Location</button>
    </div>
  );
};

export default LocationDetail;
