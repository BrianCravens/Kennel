import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

const OwnerDetail = (props) => {
  const [owner, setOwner] = useState({ name: "", phone: "", image: "" });
  const [isLoading, setIsLoading] = useState(true)
  const handleDelete = () => {
    setIsLoading(true)
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners"))
  }

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          phone: owner.phone,
          image: owner.image
        });
        setIsLoading(false)
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
      <button type="button" disabled={isLoading} onClick={handleDelete}
      >Remove</button>
    </div>
  );
}

export default OwnerDetail;