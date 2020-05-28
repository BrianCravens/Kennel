import React from "react";
import "./Animal.css"
const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          
             {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
            <img src={props.animal.image}/>
          
        </picture>
        <h3>
          <span className="card-petname"> {props.animal.name} </span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
      <button onClick={() => {props.deleteAnimal(props.animal.id)}} className = "delete">Release Animal</button>
    </div>
  );
};

export default AnimalCard;
