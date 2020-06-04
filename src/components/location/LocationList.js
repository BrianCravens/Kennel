import React, { useState, useEffect } from 'react';
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard"

const LocationList = (props) => {

    const [locations, setlocations] = useState([]);

    const getLocations = () => {
        return LocationManager.getAll().then(locationsFromAPI => {
            setlocations(locationsFromAPI)
        })
    }

    const deleteLocation = id => {
        LocationManager.delete(id)
          .then(() => LocationManager.getAll().then(setlocations));
      };
        useEffect(() => {
            getLocations();
        }, []);

        return(
            <div className="container-cards">
                {locations.map(location => <LocationCard key={location.id} location={location} deleteLocation = {deleteLocation}{...props}/>)}
            </div>
        )
    }

    export default LocationList