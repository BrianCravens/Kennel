import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
         <img src={props.employee.image}/>
       
     </picture>
        <h3>
          Name: <span className="card-employee">{props.employee.name}</span>
        </h3>
        <p>Title: {props.employee.title}</p>
      </div>
      <button onClick={() => {props.deleteEmployee(props.employee.id)}} className = "delete">You're Fired</button>
    </div>
  );
};

export default EmployeeCard;
