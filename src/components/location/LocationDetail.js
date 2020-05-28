import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({
    city: "",
    address: "",
    hours: "",
  });

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        city: location.city,
        address: location.address,
        hours: location.hours,
      });
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
    </div>
  );
};

export default LocationDetail;
