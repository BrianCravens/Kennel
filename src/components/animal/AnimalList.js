import React, { useEffect, useState} from 'react';
import AnimalManager from "../../modules/AnimalManager"
import AnimalCard from "./AnimalCard"

const AnimalList = () => {

//Create an initial state of an empty array called animals, and a function for updating animals, called setAnimals
  const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        return AnimalManager.getAll().then(animalsFromAPI => {
          // We'll do something more interesting with this data soon.
          console.log(animalsFromAPI);
          setAnimals(animalsFromAPI)
        });
      };
      //Deletes animal from the API, THEN gets all the animals again so we can THEN set the state of the animals
      //When we call setAnimals (change the state), the component will automagically re-render
      const deleteAnimal = id => {
        AnimalManager.delete(id)
          .then(() => AnimalManager.getAll().then(setAnimals));
      };
      //When animalList mounts to the DOM for the first time, go get the animals
      useEffect(() => {
          getAnimals();
      }, []);
      

    return (
        <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />)}
        </div>
    );
};

export default AnimalList