import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
          <img src={props.animal.image} alt="Animal Picture" />
        </picture>
        <h3>
          <span className="card-petname"> {props.animal.name} </span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
      <Link to={`/animals/${props.animal.id}`}>
        <button>Details</button>
      </Link>
      <button
        onClick={() => {
          props.deleteAnimal(props.animal.id);
        }}
        className="delete"
      >
        Release Animal
      </button>
    </div>
  );
};

export default AnimalCard;
