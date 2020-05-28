import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phone: "", image: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          phone: owner.phone,
          image: owner.image
        });
      });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={owner.image} alt="Owner Image" />
        </picture>
        <h3><span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
        <p>Phone Number: {owner.phone}</p>
      </div>
    </div>
  );
}

export default OwnerDetail;