import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({ name: "", title: "", image: "" });
  const [isLoading, setIsLoading] = useState(true)
  const handleDelete = () => {
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
      props.history.push("/employees")
    )
  }

  useEffect(() => {
    EmployeeManager.get(props.employeeId)
    .then(employee => {
      setEmployee({
        name: employee.name,
        title: employee.title,
        image: employee.image,
      });
      setIsLoading(false)
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
      <button type="button" disabled={isLoading} onClick={handleDelete}>You're Fired</button>
    </div>
  );
};
export default EmployeeDetail;
