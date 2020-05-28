import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({ name: "", title: "", image: "" });

  useEffect(() => {
    EmployeeManager.get(props.employeeId)
    .then(employee => {
      setEmployee({
        name: employee.name,
        title: employee.title,
        image: employee.image,
      });
    });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={employee.image} alt="Employee Image" />
        </picture>
        <h3>
          <span style={{ color: "darkslategrey" }}>{employee.name}</span>
        </h3>
        <p>Title: {employee.title}</p>
      </div>
    </div>
  );
};
export default EmployeeDetail;
