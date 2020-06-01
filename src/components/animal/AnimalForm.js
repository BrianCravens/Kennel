import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'
import EmployeeManager from '../../modules/EmployeeManager';
import { getAllByAltText } from '@testing-library/react';
// import Select from "react-dropdown-select";

const AnimalForm = props => {
    const [employees, setEmployees] = useState([])
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(false);

    const getEmployees = () => {
        return EmployeeManager.getAll().then(employees => {
            setEmployees(employees)
        });
    }
    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
        };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };

  useEffect(() => {getEmployees()}, []);

 

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          
          <select id="cartakerSelect" value = {animal.employeeId} id= "employeeId" onChange={handleFieldChange}>
              <option value = "">Choose Cartaker</option>
              {employees.map(employee => <option value= {employee.id}>{employee.name}</option>)}
          </select>
              </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm