import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });
  const [isLoading, setIsLoading] = useState(true)
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then((animal) => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        image: animal.image,
      });
      setIsLoading(false)
    });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={animal.image} alt="My Animal" />
        </picture>
        <h3>
          <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
      </div>
      <button type="button" disabled={isLoading} onClick={handleDelete}
      >Release</button>
    </div>
  );


};
export default AnimalDetail;
