import React from "react";
import { Link } from "react-router-dom";
import "./Owner.css"

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
          <img src={props.owner.image} alt="Owner Picture" />
        </picture>
        <h3>
          <span className="card-owner">{props.owner.name}</span>
        </h3>
        <p>Phone Number: {props.owner.phone}</p>
      </div>
      <Link to={`/owners/${props.owner.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default OwnerCard;
