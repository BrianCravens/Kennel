import React from "react";
import {Link} from "react-router-dom";
import "./LocationDetail.css";

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
      <Link to={`/locations/${props.location.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default LocationCard;