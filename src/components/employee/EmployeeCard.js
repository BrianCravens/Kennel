import React from "react";
import {Link} from "react-router-dom"

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
         <img src={props.employee.image} alt= "Employee Picture"/>
       
     </picture>
        <h3>
          <span className="card-employee">{props.employee.name}</span>
        </h3>
        <p>Title: {props.employee.title}</p>
      </div>
      <Link to={`/employees/${props.employee.id}`}>
        <button>Details</button>
      </Link>
      <button onClick={() => {props.deleteEmployee(props.employee.id)}} className = "delete">You're Fired</button>
    </div>
  );
};

export default EmployeeCard;
