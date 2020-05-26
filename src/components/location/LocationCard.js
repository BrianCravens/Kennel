import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-location">Lebanon TN </span>
        </h3>
        <p>Address: 123 Main St.</p>
        <p>Phone: 615-858-8888</p>
      </div>
    </div>
  );
};

export default LocationCard;