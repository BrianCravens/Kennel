import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
  Name: <span className="card-location">{props.location.city}</span>
        </h3>
  <p>Address: {props.location.address}</p>
  <p>Hours: {props.location.hours}</p>
      </div>
      <button onClick={() => {props.deleteLocation(props.location.id)}} className = "delete">Close Location</button>
    </div>
  );
};

export default LocationCard;