import React from "react";
import {Link} from "react-router-dom";
import "./LocationDetail.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
  Location: <span className="card-location">{props.loco.city}</span>
        </h3>
  <p>Address: {props.loco.address}</p>
  <p>Hours: {props.loco.hours}</p>
      </div>
      <Link to={`/locations/${props.loco.id}`}>
        <button>Details</button>
      </Link>
      <button type="button"
            onClick={() => props.history.push(`/locations/${props.loco.id}/edit`)}> Edit</button>
    </div>
  );
};

export default LocationCard;