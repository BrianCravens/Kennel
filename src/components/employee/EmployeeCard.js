import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employee">Joe Dirt</span>
        </h3>
        <p>Lebanon Branch</p>
        <p>Manager</p>
      </div>
    </div>
  );
};

export default EmployeeCard;