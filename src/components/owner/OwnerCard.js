import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
         <img src={props.owner.image}/>
       
     </picture>
        <h3>
  Name: <span className="card-owner">{props.owner.name}</span>
        </h3>
  <p>Phone Number: {props.owner.phone}</p>
      </div>
      <button onClick ={() => {props.deleteOwner(props.owner.id)}} className = "delete">Remove Owner</button>
    </div>
  );
};

export default OwnerCard;